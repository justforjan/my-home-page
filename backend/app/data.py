from app.models import Link, JobCreate, ProjectCreate
from datetime import date

job1 = JobCreate(title='Title1', start=date.fromisoformat('2025-01-01'), end=date.fromisoformat('2025-03-10'), at='Codecentric', skills=['Docker'], link='www.link.de')
job2 = JobCreate(title='Title2', start=date.fromisoformat('2025-02-01'), at='Codecentric', description='This is my very first SWE job', skills=['Docker'])
job3 = JobCreate(title='Title3', start=date.fromisoformat('2025-03-01'), at='Codecentric', description='This is my very first SWE job', link='www.link.de')
job4 = JobCreate(title='Title4', start=date.fromisoformat('2025-04-01'), description='This is my very first SWE job', skills=['Docker'], link='www.link.de')

jobs = [job1, job2, job3]

project1 = ProjectCreate(title='Project1', date=date.fromisoformat('2025-01-01'), links=[Link(name='Github', url='www.github.com').model_dump()])
project2 = ProjectCreate(title='Project2', date=date.fromisoformat('2025-03-01'), description='This is a very nice project of mine', links=[Link(name='Gitlab', url='https://gitlab.hpi.de/jonathan.kreidler/tic-tac-toe').model_dump()])
project3 = ProjectCreate(title='Project3', date=date.fromisoformat('2025-06-01'))

projects = [project1, project2, project3]