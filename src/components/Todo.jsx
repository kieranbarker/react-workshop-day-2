function Todo(props) {
	function handleChange() {
		props.onChange(props.id);
	}

	return (
		<li className="Todo">
			<label htmlFor={"Todo-" + props.id}>
				<input id={"Todo-" + props.id} type="checkbox" checked={props.done} onChange={handleChange} />
				<span>{props.text}</span>
			</label>
		</li>
	);
}

export default Todo;
