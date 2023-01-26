package com.example.taskmanagement.service;

import com.example.taskmanagement.modal.Backlog;
import com.example.taskmanagement.modal.Task;
import com.example.taskmanagement.repository.BacklogRepository;
import com.example.taskmanagement.repository.ProjectRepository;
import com.example.taskmanagement.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final BacklogRepository backlogRepository;
    private final TaskRepository taskRepository;
    private final ProjectRepository projectRepository;

    // add project task
    public Task addProjectTask(String projectIdentifier, Task projectTask) {
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
    }

    // get project backlog
    public Iterable<Task> findBacklogById(String backlogId) {
        return taskRepository.findByProjectIdentifierOrderByPriority(backlogId);
    }
}
