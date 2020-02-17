package com.example.todospringreact.controller;

import com.example.todospringreact.model.Todo;
import com.example.todospringreact.repo.TodoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;

@RestController
@RequestMapping(value = "/todo")
public class TodoController {

    @Autowired
    private TodoRepo todoRepo;

    @GetMapping
    public List<Todo> findAll() {
        return todoRepo.findAll();
    }

    @PostMapping
    public Todo save(@Valid @NotNull @RequestBody Todo todo) {
        return todoRepo.save(todo);
    }

    @PostMapping(path = "/add")
    public @ResponseBody String addNewTodo(@RequestBody Todo todoText) {

        todoRepo.save(todoText);

        return "Saved";
    }

    @PutMapping
    public @ResponseBody String updateTodo(@Valid @NotNull @RequestBody Todo todo){

        todoRepo.save(todo);

        return "Updated";
    }
}
