import React, { useContext } from "react";

import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

import { TodosContext } from "../store/todos-context";

// React.FC라는 타입을 표기를 추가함으로써 타입스크립트와 개발 툴은 이 함수가 받는 값이 props객체라는 걸 이해함
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          // bind() : 자바스크립트에서 제공하는 메서드로 이 메서드를 사용하면 실행할 함수를 미리 설정 가능
          // 첫번째 인자 : 무엇을 가르키는지 / 두번째 인자 : 매개변수
        />
      ))}
    </ul>
  );
};

export default Todos;
