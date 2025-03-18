from pydantic import BaseModel
from datetime import date as _date

from sqlmodel import Field, SQLModel, Column
from sqlalchemy import String
from sqlalchemy.dialects.postgresql import JSONB, ARRAY

class Link(BaseModel):
    name: str
    url: str

### Job Models ###
class JobBase(SQLModel):
    title: str = Field(sa_column=Column(String(length=50), nullable=False))
    start: _date = Field(nullable=False)
    end: _date| None = None
    at: str | None = Field(default= None, sa_column=Column(String(length=50), nullable=True))
    description: str | None = Field(default= None, sa_column=Column(String(length=1000), nullable=True))
    skills: list[str] | None = Field(default= None, sa_column=Column(ARRAY(String(length=25)), nullable=True))
    link: str | None = Field(default= None, sa_column=Column(String(length=200), nullable=True))


class Job(JobBase, table=True):
    id: int | None = Field(default=None, primary_key=True)

class JobPublic(JobBase):
    id: int

JobCreate = JobBase


### Education Models ###
class EducationBase(JobBase):
    title: str = Field(sa_column=Column(String(length=50), nullable=False))
    start: _date = Field(nullable=False)
    end: _date| None = None
    at: str | None = Field(default= None, sa_column=Column(String(length=50), nullable=True))
    description: str | None = Field(default= None, sa_column=Column(String(length=1000), nullable=True))
    skills: list[str] | None = Field(default= None, sa_column=Column(ARRAY(String(length=25)), nullable=True))
    link: str | None = Field(default= None, sa_column=Column(String(length=200), nullable=True))

class Education(EducationBase, table=True):
    id: int | None = Field(default=None, primary_key=True)

EducationCreate = EducationBase


### Project Models ###
class ProjectBase(SQLModel):
    title: str = Field(sa_column=Column(String(length=50), nullable=False))
    date: _date = Field(nullable=False)
    image: str | None = Field(default=None, sa_column=Column(String(length=100), nullable=True))
    description: str | None = Field(default=None, sa_column=Column(String(length=1000), nullable=True))
    links: list[dict] | None = Field(default=None, sa_column=Column(ARRAY(JSONB), nullable=True))
    tools: list[str]  | None= Field(default=None, sa_column=Column(ARRAY(String(length=20)), nullable=True))


class Project(ProjectBase, table=True):
    id: int | None = Field(default=None, primary_key=True)

class ProjectPublic(ProjectBase):
    id: int

ProjectCreate = ProjectBase
