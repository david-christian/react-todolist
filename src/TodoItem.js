import './App.css';
import styled from 'styled-components';

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border: 1px solid black;

  & + & {
    margin-top: 10px; 
  }
`

const TodoContent = styled.div`
  color: rgba(2, 40, 77);
  ${props => props.isDone && `
    text-decoration: line-through;
  `}
`

const TodoButtonWrapper = styled.div``

const Button = styled.button`
  padding: 4px;
  color: black;

  &:hover {
    color: red;
  }

  & + & {
    margin-left: 4px;
  }
`

export default function TodoItem ({ className, size, todo, handleDeleteTodo, handleToggleIsDone }) {
  return (
    <TodoItemWrapper className={className} data-todo-id={todo.id} isHiden={todo.isHiden}>
      <TodoContent isDone={todo.isDone} size={size}>{todo.content}</TodoContent>
      <TodoButtonWrapper>
        <Button onClick={() => {handleToggleIsDone(todo.id)}}>
          {todo.isDone ? '未完成' : '已完成'}
        </Button>
        <Button onClick={() =>{handleDeleteTodo(todo.id)}}>刪除</Button>
      </TodoButtonWrapper>
    </TodoItemWrapper>
  )
}
