from app.data import jobs, projects


class DataBaseConnector():

    def getJobs(self):
        temp = []
        for job in jobs:
            temp.append(job)
        return temp

    def getJobById(self, id):
        for job in jobs:
            if job.id == id:
                return job
        return None

    def getProjects(self):
        temp = []
        for project in projects:
            temp.append(project)
        return temp

    def getProjectById(self, id):
        for project in projects:
            if project.id == id:
                return project
        return None
