package com.example.taskmanagement.repository;

import com.example.taskmanagement.modal.Backlog;
import org.springframework.data.repository.CrudRepository;

public interface BacklogRepository extends CrudRepository<Backlog, Long> {
}
