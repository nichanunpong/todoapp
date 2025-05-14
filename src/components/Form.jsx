import { useState, useRef } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [name, setName] = useState("");

  const nextIdx = useRef(
    todos.length > 0 ? Math.max(...todos.map((t) => t.idx)) + 1 : 1
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;

    const newTodo = {
      idx: nextIdx.current,
      name,
      done: false,
    };

    setTodos([...todos, newTodo]);

    // increment for next time
    nextIdx.current += 1;

    // reset the input
    setName("");
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modrenInput}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter todo item..."
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
