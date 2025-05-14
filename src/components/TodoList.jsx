import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos
    .slice() // copy array
    .sort((a, b) => Number(a.done) - Number(b.done));
  console.log("todos: ", todos);
  return (
    <div className={sortedTodos.length > 0 ? styles.list : ""}>
      {sortedTodos.map((item, index) => (
        <TodoItem key={index} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
