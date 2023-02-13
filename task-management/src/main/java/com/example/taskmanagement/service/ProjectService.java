package com.example.taskmanagement.service;

import com.example.taskmanagement.exceptions.ProjectIdException;
import com.example.taskmanagement.exceptions.ProjectNotFoundException;
import com.example.taskmanagement.modal.Backlog;
import com.example.taskmanagement.modal.Project;
import com.example.taskmanagement.modal.User;
import com.example.taskmanagement.repository.BacklogRepository;
import com.example.taskmanagement.repository.ProjectRepository;
import com.example.taskmanagement.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final BacklogRepository backlogRepository;
    private final UserRepository userRepository;
    private final CloudinaryService cloudinaryService;

    // save & update project
    public Project saveOrUpdateProject(Project project, String username) {
        // check if existing project
        if (project.getId() != null) {
            Project existingProject = projectRepository.findByProjectIdentifier(project.getProjectIdentifier());
            if (existingProject != null && (!existingProject.getProjectLeader().equals(username))) {
                throw new ProjectNotFoundException("Project not found in your account!");
            } else if (existingProject == null) {
                throw new ProjectNotFoundException("Project with ID: '" + project.getProjectIdentifier() + "' cannot be updated because it doesn't exist");
            }
        }

        // create new project
        try {
            User user = userRepository.findByEmail(username);
            project.getUsers().add(user);
            project.setProjectLeader(user.getUsername());
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

            user.getProjects().add(project);
            return projectRepository.save(project);
        } catch (Exception e) {
            throw new ProjectIdException("Project ID " + project.getProjectIdentifier().toUpperCase() + " already taken!");
        }
    }

    // find project by project identifier & project leader
    public Project findProjectByIdentifier(String projectId, String username) {
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());
        if (project == null) {
            throw new ProjectIdException("Project ID " + projectId + " doesn't exist!");
        }
        // checking project owner
        if (!project.getProjectLeader().equals(username)) {
            throw new ProjectNotFoundException("Project not found in your account!");
        }
        return project;
    }

    // find project developer
    public Project findProjectByDeveloper(String projectId, String username) {
        Project project = projectRepository.findByProjectIdentifier(projectId);
        if (project == null) {
            throw new ProjectIdException("Project ID " + projectId + " doesn't exist!");
        }

        // checking project assigned developer
        project.getUsers().stream().filter(user -> user.getEmail().equals(username))
                .findAny()
                .orElseThrow(() -> new ProjectNotFoundException("Project not found in your account!"));

        return project;
    }

    // find all project
    public Iterable<Project> findAllProjects(String username) {
        return projectRepository.findAllByProjectLeader(username);
    }

    // assign developer in project
    public Project assignDeveloper(String projectId, String userEmail, String username) {
        // find project & check valid project leader
        Project project = findProjectByIdentifier(projectId, username);
        // find user
        User user = userRepository.findByEmail(userEmail);

        // assign user in project
        project.getUsers().add(user);
        user.getProjects().add(project);

        return projectRepository.save(project);
    }

    // delete project by identifier
    public void deleteProjectByIdentifier(String projectId, String username) {
        projectRepository.delete(findProjectByIdentifier(projectId, username));
    }

    // update project
    public Project updateProjectById(String projectId, Project updateProject, String username) {
        // find project & check project leader
        Project project = findProjectByIdentifier(projectId, username);
        project.setProjectName(updateProject.getProjectName());
        project.setDescription(updateProject.getDescription());
        project.setStart_date(updateProject.getStart_date());
        project.setEnd_date(updateProject.getEnd_date());
        return projectRepository.save(project);
    }
}
