import os
from contextlib import asynccontextmanager
from typing import Annotated
from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import SQLModel, create_engine, Session, select

from app.models import Job, Project

from app.data import jobs, projects

DB_USER = os.getenv("POSTGRES_USER", "postgres")
DB_PASSWORD = os.getenv("POSTGRES_PASSWORD", "postgres")
DB_HOST = os.getenv("DB_HOST", "localhost")
DB_PORT = os.getenv("DB_PORT", "5432")
DB_NAME = os.getenv("POSTGRES_DB", "mywebsite")

DATABASE_URL = (
    f"postgresql+psycopg2://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
)

engine = create_engine(DATABASE_URL, echo=True)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def get_session():
    with Session(engine) as session:
        try:
            yield session
        finally:
            session.close()

SessionDep = Annotated[Session, Depends(get_session)]

def fill_empty_tables_with_dummy_data(session: Session):
    print('Filling empty tables with dummy data')

    if not session.exec(select(Project)).first():
        for project in projects:
            print(f'Adding project {project.title}')
            db_project = Project.model_validate(project)
            session.add(db_project)
        session.commit()

    if not session.exec(select(Job)).first():
        for job in jobs:
            print(f'Adding job {job.title}')
            db_job = Job.model_validate(job)
            session.add(db_job)
        session.commit()

    print('Dummy data added to database')

@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db_and_tables()
    fill_empty_tables_with_dummy_data(Session(engine))
    yield


app = FastAPI(lifespan=lifespan)

origins = [
    "http://localhost",  # Allows requests from http://localhost (your frontend in development)
    'justforjan.eu'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True, # Allows cookies to be sent in requests (if you need them)
    allow_methods=["*"],     # Allows all HTTP methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],     # Allows all headers
)


@app.get("/jobs", response_model=list[Job])
def get_all_jobs(session: SessionDep):
    db_jobs = session.exec(select(Job))
    return db_jobs


@app.get('/jobs/{job_id}', response_model=Job)
def get_job(job_id: int, session: SessionDep):
    job = session.get(Job, job_id)
    if not job:
        raise HTTPException(status_code=404, detail=f'Job with the ID {job_id} does not exists')
    return job


@app.get('/projects', response_model=list[Project])
def get_all_projects(session: SessionDep):
    return session.exec(select(Project))


@app.get('/projects/{project_id}', response_model=Project)
def get_project_by_id(project_id: int, session: SessionDep):
    project = session.get(Project, project_id)
    if not project:
        raise HTTPException(status_code=404, detail=f'Project with the ID {project_id} does not exists')
    return project



