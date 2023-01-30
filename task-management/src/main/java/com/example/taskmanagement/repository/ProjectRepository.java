package com.example.taskmanagement.repository;

import com.example.taskmanagement.modal.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {

    // find project by project identifier
    Project findByProjectIdentifier(String projectId);

    // find all project
    @Override
    Iterable<Project> findAll();

    // find specific user project
    Iterable<Project> findAllByProjectLeader(String username);
}
