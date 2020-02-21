create table todos
(
  id        int auto_increment
    primary key,
  todo_text varchar(100) collate utf8_bin not null,
  todo_done tinyint(1)                    not null
);


