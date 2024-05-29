import Todo from "./Todo.jsx";

function TodoList(props) {
	return (
		<ul className="TodoList">
			{props.items.map(item => (
				<Todo {...item} key={item.id} onChange={props.onChange} />
			))}
		</ul>
	);
}

export default TodoList;
