import React, { useState } from "react";
import ReactDOM from "react-dom";

function LoginForm() {
	const [form, setValues] = useState({
		username: "",
		password: ""
	});

	const printValues = e => {
		e.preventDefault();
		console.log(form.username, form.password);
	};

	const updateField = e => {
		setValues({
			...form,
			[e.target.name]: e.target.value
		});
	};

	return (
		<form onSubmit={printValues}>
			<label>
				Username:
        		<input
					value={form.username}
					name="username"
					onChange={updateField}
				/>
			</label>
			<br />
			<label>
				Password:
        		<input
					value={form.password}
					name="password"
					type="password"
					onChange={updateField}
				/>
			</label>
			<br />
			<button>Submit</button>
		</form>
	);
}

function ListOfThings() {
	const [items, setItems] = useState([]);
	const [itemName, setItemName] = useState("");

	const addItem = event => {
		event.preventDefault();
		setItems([
			...items,
			{
				id: items.length,
				name: itemName
			}
		]);
		setItemName("");
	};

	return (
		<>
			<form onSubmit={addItem}>
				<label>
					<input
						name="item"
						type="text"
						value={itemName}
						onChange={e => setItemName(e.target.value)}
					/>
				</label>
			</form>
			<ul>
				{items.map(item => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</>
	);
}

function LessText({ text, maxLength }) {
	// Create a piece of state, and initialize it to `true` 
	// `hidden` will hold the current value of the state, and `setHidden` will let us change it
	const [hidden, setHidden] = useState(true);

	// If the text is short enough, just render it
	if (text.length <= maxLength) {
		return <span>{text}</span>;
	}

	// Render the text (shortened or full-length) followed by a link to expand/collapse it.
	// When a link is clicked, update the value of `hidden`, which will trigger a re-render
	return (
		<span>
			{hidden ? `${text.substr(0, maxLength).trim()} ...` : text}
			{hidden ? 
			(
				<a onClick={() => setHidden(false)}> read more</a>
			) : (
					<a onClick={() => setHidden(true)}> read less</a>
				)}
		</span>
	);
}
export {LoginForm, ListOfThings, LessText};