package com.example.taskmanagement.controller;

import com.example.taskmanagement.modal.Task;
import com.example.taskmanagement.service.TaskService;
import com.example.taskmanagement.service.ValidationErrorService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/backlog")
@CrossOrigin
public class BacklogController {
    private final TaskService taskService;
    private final ValidationErrorService validationErrorService;

    @PostMapping("/{backlog_id}")
    public ResponseEntity<?> addPTtoBacklog(@Valid @RequestBody Task task,
                                            BindingResult result, @PathVariable String backlog_id) {
        ResponseEntity<?> errorMap = validationErrorService.ValidationService(result);
        if (errorMap != null) return errorMap;

        Task task1 = taskService.addProjectTask(backlog_id, task);

        return new ResponseEntity<Task>(task1, HttpStatus.CREATED);
    }

    // get project backlog
    @GetMapping("/{backlog_id}")
    public Iterable<Task> getProjectBacklog(@PathVariable String backlog_id) {
        return taskService.findBacklogById(backlog_id);
    }

    // find task by project sequence
    @GetMapping("/{backlog_id}/{pt_id}")
    public ResponseEntity<?> getProjectTask(@PathVariable String backlog_id, @PathVariable String pt_id) {
        Task projectTask = taskService.findPTByProjectSequence(backlog_id, pt_id);

        return new ResponseEntity<Task>(projectTask, HttpStatus.OK);
    }


}
