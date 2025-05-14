import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handloeDelete(item) {
    setTodos(todos.filter((todo) => todo !== item)); // filter only not equal item
  }
  function handleClick(idx) {
    setTodos(
      todos.map((todo) =>
        todo.idx === idx ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const complete = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={complete} onClick={() => handleClick(item.idx)}>
          {" "}
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handloeDelete(item)} // call back fundtion
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
