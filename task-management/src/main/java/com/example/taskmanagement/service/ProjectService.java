package com.example.taskmanagement.service;

import com.example.taskmanagement.exceptions.ProjectIdException;
import com.example.taskmanagement.modal.Backlog;
import com.example.taskmanagement.modal.Project;
import com.example.taskmanagement.repository.BacklogRepository;
import com.example.taskmanagement.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final BacklogRepository backlogRepository;

    // save & update project
    public Project saveOrUpdateProject(Project project) {

        try {
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());

            if (project.getId() == null) {
                Backlog backlog = new Backlog();
                project.setBacklog(backlog);
                backlog.setProject(project);
                backlog.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            }

            if (project.getId() != null) {
                project.setBacklog(backlogRepository.findByProjectIdentifier(project.getProjectIdentifier().toUpperCase()));
            }

            return projectRepository.save(project);
        } catch (Exception e) {
            throw new ProjectIdException("Project ID " + project.getProjectIdentifier().toUpperCase() + " already taken!");
        }
    }

    // find project by project identifier
    public Project findProjectByIdentifier(String projectId) {
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());
        if (project == null) {
            throw new ProjectIdException("Project ID " + projectId + " doesn't exist!");
        }
        return project;
    }

    // find all project
    public Iterable<Project> findAllProjects() {
        return projectRepository.findAll();
    }

    // delete project by identifier
    public void deleteProjectByIdentifier(String projectId) {
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());

        if (project == null) {
            throw new ProjectIdException("Can not delete Project with this " + projectId + " !. This project does not exist,");
        }

        projectRepository.delete(project);
    }

    // update project by id
    public void updateProject(String projectId) {
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());

        if (project == null) {
            throw new ProjectIdException("Can not update Project with this " + projectId + " !. This project does not exist,");
        }

        projectRepository.save(project);
    }
}
