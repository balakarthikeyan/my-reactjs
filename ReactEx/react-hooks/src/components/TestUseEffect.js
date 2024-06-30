import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

// 1. Destructure the `subreddit` from props:
function Reddit({ subreddit }) {
    // Initialize state to hold the posts
    const [posts, setPosts] = useState([]);

    // 2. effect functions can't be async, so declare the async function inside the effect, then call it
    useEffect(
        async () => {
            // 2. Use a template string to set the URL:
            const res = await fetch(
                `https://www.reddit.com/r/${subreddit}.json`
            );
            // Pull out the data as usual
            const json = await res.json();
            // Save the posts into state
            setPosts(json.data.children.map(c => c.data));
        },
        // 3. Re-run this effect when `subreddit` changes:
        [subreddit, setPosts]
    );

    // Render as usual
    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

function SimpleEffect() {
    // Store a reference to the input's DOM node
    const inputRef = useRef();

    // Store the input's value in state
    const [value, setValue] = useState("reactjs");
    const [subreddit, setSubreddit] = useState(value);

    useEffect(
        () => {
            // This runs AFTER the first render, so the ref is set by now.
            console.log("render");
            inputRef.current.focus();
        },
        // The effect "depends on" inputRef
        [inputRef]
    );

    const handleSubmit = e => {
        e.preventDefault();
        setSubreddit(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <Reddit subreddit={subreddit} />
        </form>
    );
}
export default SimpleEffect;