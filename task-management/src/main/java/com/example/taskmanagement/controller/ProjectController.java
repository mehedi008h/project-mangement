package com.example.taskmanagement.controller;

import com.example.taskmanagement.modal.Project;
import com.example.taskmanagement.service.ProjectService;
import com.example.taskmanagement.service.ValidationErrorService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/project")
@CrossOrigin("*")
public class ProjectController {

    private final ProjectService projectService;
    private final ValidationErrorService validationErrorService;

    // create project
    @PostMapping
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult result) {
        System.out.println("Hello");

        ResponseEntity<?> errorMap = validationErrorService.ValidationService(result);
        if (errorMap != null) return errorMap;

        Project project1 = projectService.saveOrUpdateProject(project);
        return new ResponseEntity<Project>(project, HttpStatus.CREATED);
    }

    // find project by project identifier
    @GetMapping("/{projectId}")
    public ResponseEntity<?> getProjectById(@PathVariable String projectId) {
        Project project = projectService.findProjectByIdentifier(projectId);
        return new ResponseEntity<Project>(project, HttpStatus.OK);
    }

    // find all project
    @GetMapping
    public Iterable<Project> getAllProject() {
        return projectService.findAllProjects();
    }

    // delete project by identifier
    @DeleteMapping("/{projectId}")
    public ResponseEntity<?> deleteProject(@PathVariable String projectId) {
        projectService.deleteProjectByIdentifier(projectId);

        return new ResponseEntity<String>("Project with Id " + projectId + " was deleted.", HttpStatus.OK);
    }

    // update project by id
    @PutMapping("/{projectId}")
    public ResponseEntity<?> updateProject(@PathVariable String projectId) {
        projectService.updateProject(projectId);

        return new ResponseEntity<String>("Project with Id " + projectId + " was updated.", HttpStatus.OK);
    }


}
