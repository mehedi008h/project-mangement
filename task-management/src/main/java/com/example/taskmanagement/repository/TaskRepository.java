package com.example.taskmanagement.repository;

import com.example.taskmanagement.modal.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long> {
}
