package com.example.todospringreact.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "todos")
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotBlank
    @Column(name = "todo_text")
    private String todoText;
    @Column(name = "todo_done")
    private String isDone;

    public Todo() {
    }

    public Todo(Long id, String todoText, String isDone) {
        this.id = id;
        this.todoText = todoText;
        this.isDone = isDone;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTodoText() {
        return todoText;
    }

    public void setTodoText(String todoText) {
        this.todoText = todoText;
    }

    public String isDone() {
        return isDone;
    }

    public void setDone(String done) {
        isDone = done;
    }
}
