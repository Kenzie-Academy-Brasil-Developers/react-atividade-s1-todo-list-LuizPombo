import { useState } from "react";

const Form = ({ addTodo }) => {
  const [reserver, setReserver] = useState("");
  return (
    <div>
      <input
        type="text"
        value={reserver}
        onChange={(event) => setReserver(event.target.value)}
      />
      <button onClick={() => addTodo(reserver)}>enviar</button>
    </div>
  );
};

export default Form;
