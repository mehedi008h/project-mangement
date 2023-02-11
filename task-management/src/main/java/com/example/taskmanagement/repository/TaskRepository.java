package com.example.taskmanagement.repository;

import com.example.taskmanagement.modal.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface TaskRepository extends CrudRepository<Task, Long> {
    List<Task> findByProjectIdentifierOrderByPriority(String id);

    // find task by project sequence
    Task findByProjectSequence(String sequence);
}
