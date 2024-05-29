import { useState } from "react";

function TodoForm(props) {
	const [text, setText] = useState("");

	function handleChange(event) {
		setText(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		props.onSubmit(text);
		setText("");
	}

	return (
		<form className="TodoForm" onSubmit={handleSubmit}>
			<p>
				<label htmlFor="todo">To do</label>
				<br />
				<input id="todo" type="text" required={true} value={text} onChange={handleChange} />
			</p>
			<p>
				<button type="submit">Add to list</button>
			</p>
		</form>
	);
}

export default TodoForm;
