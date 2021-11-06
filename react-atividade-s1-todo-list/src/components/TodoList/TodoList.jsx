const TodoList = ({ todo, handleTodo }) => {
  return (
    <div>
      <ul>
        {todo.map((list, index) => (
          <>
            <li key={index}>
              {list}
              <button onClick={() => handleTodo(list)}>concluida</button>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
