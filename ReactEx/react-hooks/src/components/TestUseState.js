import React, { useState } from "react";
import ReactDOM from "react-dom";

const Message = () => {
	const [messageObj, setMessage] = useState({
		message: "world",
		id: 1,
		meta: [
			{
				value: 1,
				text: "hello"
			}
		]
	});
	const [meta, setMeta] = useState("");
	const [metaList, setMetaList] = useState([]);
	const onEnter = (e) => {
		// messageObj.message = e.target.value;
		// setMessage(messageObj);
		const val = e.target.value;
		// setMessage(prevState => {
		//   return { ...prevState, message: val }
		// });
		setMessage((prevState) => {
			setMeta(val)
			return {
				...prevState, // copy all other field/objects
				// id: "20", // update the value of the field
				meta: [
					{
						// recreate the object that contains the field to update
						...prevState.meta, // copy all the fields of the object
						text: val // overwrite the value of the field to update
					}
				]
			};
		});
	};
	let metaname = messageObj.meta;
	return (
		<div>
			<input type="text" placeholder="Enter a message" onChange={onEnter} />
			<input
				type="button"
				value="Add"
				onClick={(e) => {
					setMetaList([
						...metaList,
						{
							// Use the current size as ID (needed to iterate the list later)
							value: metaList.length + 1,
							text: meta
						}
					]);
				}}
			/>
			<p>
				<strong>
					{messageObj.id} : {messageObj.message}
				</strong>
			</p>
			<ul>
				{metaname.map((m) => (
					<li key={m.value}>{m.text}</li>
				))}
			</ul>
		</div>
	);
};

export default Message;
// ReactDOM.render(<Message />, document.querySelector("#App"));