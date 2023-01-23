package com.example.taskmanagement.repository;

import com.example.taskmanagement.modal.Project;
import org.springframework.data.repository.CrudRepository;

public interface ProjectRepository extends CrudRepository<Project, Long> {
}
