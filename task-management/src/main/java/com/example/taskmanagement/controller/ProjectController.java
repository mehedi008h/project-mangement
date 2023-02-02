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

import java.security.Principal;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/project")
@CrossOrigin("*")
public class ProjectController {

    private final ProjectService projectService;
    private final ValidationErrorService validationErrorService;

    // create project
    @PostMapping
    public ResponseEntity<?> createNewProject(
            @Valid
            @RequestBody Project project,
            BindingResult result,
            Principal principal) {
        ResponseEntity<?> errorMap = validationErrorService.ValidationService(result);
        if (errorMap != null) return errorMap;

        Project project1 = projectService.saveOrUpdateProject(project, principal.getName());
        return new ResponseEntity<Project>(project, HttpStatus.CREATED);
    }

    // assign user in project
    @PostMapping("/{projectId}/{userEmail}")
    public ResponseEntity<?> assignDeveloper(
            @PathVariable String projectId,
            @PathVariable String userEmail,
            Principal principal
    ) {
        Project project = projectService.assignDeveloper(projectId, userEmail, principal.getName());
        return new ResponseEntity<Project>(project, HttpStatus.OK);
    }

    // find project by project identifier
    @GetMapping("/{projectId}")
    public ResponseEntity<?> getProjectById(@PathVariable String projectId, Principal principal) {
        Project project = projectService.findProjectByIdentifier(projectId, principal.getName());
        return new ResponseEntity<Project>(project, HttpStatus.OK);
    }

    // find all project
    @GetMapping
    public Iterable<Project> getAllProject(Principal principal) {
        return projectService.findAllProjects(principal.getName());
    }

    // delete project by identifier
    @DeleteMapping("/{projectId}")
    public ResponseEntity<?> deleteProject(@PathVariable String projectId, Principal principal) {
        projectService.deleteProjectByIdentifier(projectId, principal.getName());

        return new ResponseEntity<String>("Project with Id " + projectId + " was deleted.", HttpStatus.OK);
    }

}
