import { useOptimistic, useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const [optimistics, setOptimistics] = useOptimistic(
        todos,
        (oldTodos, newTodo) => [...oldTodos, { text: newTodo, pending: true }]
    );

    const handleAddTodo = async (formData) => {
        const newTodo = formData.get("todo");
        setOptimistics(newTodo)
        await new Promise((resolve) => setTimeout(resolve, 6000)); // Simulate delay
        setTodos(currentTodos => [
            ...currentTodos,
            { text: newTodo, pending: false }
        ]);
    };

    return (
        <>
            <form action={handleAddTodo} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="todo">Add Item</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="todo" type="text" placeholder="Enter Item" name="todo" />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
                </div>
            </form>
            {optimistics.map((todo, index) => (
                <div className="bg-blue-100 shadow-md p-4 my-6 rounded-lg" key={index}>
                    <h2 className="text-xl font-bold">{todo.text}</h2>
                    <p>{todo.pending && <span>(Adding...)</span>}</p>
                </div>
            ))}
        </>
    )
}
export default TodoList