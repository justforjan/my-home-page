from app.models import Link, JobCreate, ProjectCreate, EducationCreate
from datetime import date

codecentric = JobCreate(title='Working Student Software Development', start=date.fromisoformat('2024-12-01'), at='Codecentric AG', skills=['React', 'Scala', 'Docker', 'Typescript'], link= 'https://www.codecentric.de/', description='I worked as a Software Engineer at Codecentric as part of the Dashboard team. I worked in the front end, backend and infratructure')
bikeclub = JobCreate(title='Entrepreneur in Residence', start=date.fromisoformat('2023-01-14'), end=date.fromisoformat('2024-01-10'), at='Bike Club', description='I defined several key processes covering operations, IT, logistics and customer operations', skills=['Process Management','Customer Operations', 'Salesforce', 'Automation', 'Notion', 'Entrepreneursip'])
stocard = JobCreate(title='Business Development Intern', start=date.fromisoformat('2021-08-01'), end=date.fromisoformat('2022-02-14'), at='Stocard GmbH', description='I supporeted Sales and Business Development with Analyses.', link='https://stocardapp.com/', skills=['Salesforce', 'Data Analytics'])

jobs = [codecentric, bikeclub, stocard]

personal_website = ProjectCreate(
    title='My personal Website',
    date=date.fromisoformat('2021-03-01'),
    links=[Link(name='Github', url='https://github.com/justforjan/my-home-page').model_dump()],
    description='The website you are looking at is my very first one. I built it as an exercise to learn how to develop front-ends and how to build simple deployments pipelines. I built it using ReactJS, Docker, and Github Actions',
    tools=['ReactJS', 'Docker', 'Github Actions', 'Tailwind'])
squeak = ProjectCreate(
    title='Tower Defense Game in Squeak/Smalltalk',
    date=date.fromisoformat('2025-01-01'),
    description='We were tasked with creating a game in Squeak/Smalltalk in the University Module "Software Architecture"',
    links=[Link(name='Github', url='ttps://github.com/hpi-swa-teaching/swa24-25-group17').model_dump()],
    skills=['Squak/Smalltalk'])
cs50finalproject = ProjectCreate(
    title='CS50 Final Project',
    date=date.fromisoformat('2021-01-01'),
    descriptio='This is my capstone project of CS50. CS50 is a course developes by David Malan and hist team at Harvard and Yale. The course material is freely available online and covers basics of Computer Science. We learned the principles of programming in C, Python and SQL, Datastructures and Algorithms and Web Development. As a final project I developed an Expense Tracker with Flask. I currently is not deployed but I am thinking about deploying it in the near future for demonstration purposes.',
    links=[Link(name='Youtube', url='https://youtu.be/aA5bLuLiqWE?si=ckbiVcr8N4LS3vTG').model_dump(), Link(name='Github', url='https://github.com/justforjan/FinanceTracker').model_dump()],
    tools=['Flask', 'Python', 'Jinja', 'HMTL', 'Bootstrap'])
ttt = ProjectCreate(
    title='TicTacToe',
    date=date.fromisoformat('2024-06-01'),
    descriptio='As part of the lecture "Distributed Systems" we were tasked with developing a small distributed System. We decided to build a TicTacToe web application based on cookies. The app is currently not deployed but I would love to deploy in the in the future.',
    links=[Link(name='Gitlab', url='123').model_dump()],
    tools=['Django', 'Python', 'PostgreSQL', 'Docker'])

projects = [personal_website, squeak, cs50finalproject, ttt]


education1 = EducationCreate(title='B. Sc. Engineering and Management', at='Hochschule Mannheim', start=date.fromisoformat('2018-09-01'), end=date.fromisoformat('2023-03-31'), link='https://www.wing.hs-mannheim.de/studierende/aktuelleshtml/bachelor-studiengang-wbi.html')
education2 = EducationCreate(title='B. Sc. IT-Systems Engineering', at='Hasso-Plattner-Institut', start=date.fromisoformat('2023-10-01'), link='https://hpi.de/studium/', skills=['C', 'C++', 'Python', 'Django'])

education = [education1, education2]
