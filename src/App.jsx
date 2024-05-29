import { nanoid } from "nanoid";
import { useState } from "react";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
	const [todos, setTodos] = useState([]);

	function addTodo(text) {
		const newTodo = { id: "Todo-" + nanoid(), text: text, done: false };
		setTodos([...todos, newTodo]);
	}

	function toggleTodo(id) {
		const newTodos = todos.map(todo => {
			if (id === todo.id) {
				return { ...todo, done: !todo.done };
			} else {
				return todo;
			}
		});

		setTodos(newTodos);
	}

	return (
		<>
			<h1>To-do list</h1>
			<TodoForm onSubmit={addTodo} />
			{todos.length > 0 ? (
				<TodoList items={todos} onChange={toggleTodo} />
			) : (
				<p className="italic">Add some items...</p>
			)}
		</>
	);
}

export default App;
