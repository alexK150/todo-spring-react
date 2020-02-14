package com.example.todospringreact.repo;

import com.example.todospringreact.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepo extends JpaRepository<Todo, Long> {
}
