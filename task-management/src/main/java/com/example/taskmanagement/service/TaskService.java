package com.example.taskmanagement.service;

import com.example.taskmanagement.exceptions.ProjectNotFoundException;
import com.example.taskmanagement.modal.Backlog;
import com.example.taskmanagement.modal.Project;
import com.example.taskmanagement.modal.Task;
import com.example.taskmanagement.repository.BacklogRepository;
import com.example.taskmanagement.repository.ProjectRepository;
import com.example.taskmanagement.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final BacklogRepository backlogRepository;
    private final TaskRepository taskRepository;
    private final ProjectRepository projectRepository;

    // add project task
    public Task addProjectTask(String projectIdentifier, Task projectTask) {
        try {
            Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifier);
            projectTask.setBacklog(backlog);

            // update sequence
            Integer backLogSequence = backlog.getPTSequence();
            backLogSequence++;
            backlog.setPTSequence(backLogSequence);

            // add sequence to project task
            projectTask.setProjectSequence(projectIdentifier + "-" + backLogSequence);
            projectTask.setProjectIdentifier(projectIdentifier);

            //initial priority when priority null // projectTask.getPriority() == 0 ||
            if (projectTask.getPriority() == null) {
                projectTask.setPriority(3);
            }

            // initial status when status is null
            if (projectTask.getStatus() == "" || projectTask.getStatus() == null) {
                projectTask.setStatus("TO_DO");
            }

            return taskRepository.save(projectTask);
        } catch (Exception e) {
            throw new ProjectNotFoundException("Project not found!");
        }
    }

    // get project backlog
    public Iterable<Task> findBacklogById(String backlogId) {
        Project project = projectRepository.findByProjectIdentifier(backlogId);
        if (project == null) {
            throw new ProjectNotFoundException("Project with this ID: '" + backlogId + "' does not exist!");
        }
        return taskRepository.findByProjectIdentifierOrderByPriority(backlogId);
    }

    // find task by project sequence
    public Task findPTByProjectSequence(String backlog_id, String pt_id) {
        // make sure searching an existing backlog
        Backlog backlog = backlogRepository.findByProjectIdentifier(backlog_id);

        if (backlog == null) {
            throw new ProjectNotFoundException("Project with this ID: '" + backlog_id + "' does not exist!");
        }

        // make sure searching an existing task
        Task task = taskRepository.findByProjectSequence(pt_id);
        if (task == null) {
            throw new ProjectNotFoundException("Project Task '" + pt_id + "' not found!");
        }

        // make sure that the backlog/project id int the path corresponds to right project
        if (!task.getProjectIdentifier().equals(backlog_id)) {
            throw new ProjectNotFoundException("Project Task '" + pt_id + "' does not exist in this project!");
        }

        return task;
    }
}
