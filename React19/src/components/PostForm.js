import { useState } from "react";

const PostItem = ({ post }) => {
    return (
        <div className="bg-blue-100 shadow-md p-4 my-6 rounded-lg">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

const Form = ({ addPost }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = { title, body };
        addPost(newPost);
        setTitle('');
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title" type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">Body</label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="body" rows="5" placeholder="Enter body" value={body} onChange={e => setBody(e.target.value)}></textarea>
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
            </div>
        </form>
    );
};

const PostForm = () => {
    const [posts, setPosts] = useState([]);

    const addPost = newPost => {
        setPosts(prevPosts => [...prevPosts, newPost]);
    };

    return (
        <>
            <Form addPost={addPost} />
            {posts.map((post, index) => (
                <PostItem key={index} post={post} />
            ))}
        </>
    )
}

export default PostForm