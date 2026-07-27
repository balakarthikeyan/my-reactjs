import { useState, useEffect } from "react";
import { Activity } from "react";

const MusicApp = () => {
    const [currentView, setCurrentView] = useState("library");

    console.log("MusicApp render - currentView:", currentView);

    return (
        <>
            <nav style={{ marginBottom: 10 }}>
                <button onClick={() => setCurrentView("library")}>Library</button>
                <button onClick={() => setCurrentView("player")}>Now Playing</button>
            </nav>

            <Activity mode={currentView === "library" ? "visible" : "hidden"}>
                <MusicLibrary />
            </Activity>

            <Activity mode={currentView === "player" ? "visible" : "hidden"}>
                <NowPlaying />
            </Activity>
        </>
    );
};

const MusicLibrary = () => {
    const [search, setSearch] = useState("");
    const [favorites, setFavorites] = useState(["Dreamscape", "Ocean Eyes"]);

    useEffect(() => {
        console.log("MusicLibrary mounted");
        return () => console.log("MusicLibrary hidden (cleanup)");
    }, []);

    const addFavorite = () => {
        if (search.trim()) {
            setFavorites([...favorites, search]);
            setSearch("");
        }
    };

    return (
        <div style={{ padding: 10, border: "1px solid #ccc" }}>
            <h2>Music Library</h2>
            <p>Type a song name to add to favorites:</p>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search song..."
            />
            <button onClick={addFavorite}>Add</button>

            <ul>
                {favorites.map((song, i) => (
                    <li key={i}>{song}</li>
                ))}
            </ul>
        </div>
    );
};

const NowPlaying = () => {
    const [track, setTrack] = useState("Dreamscape");
    const [position, setPosition] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        console.log("NowPlaying mounted");
        return () => console.log("NowPlaying hidden (cleanup)");
    }, []);

    useEffect(() => {
        if (!isPlaying) return;
        const interval = setInterval(() => {
            setPosition((p) => p + 1);
            console.log(`Playing "${track}" - ${position + 1}s`);
        }, 1000);

        return () => {
            clearInterval(interval);
            console.log("Paused / hidden — interval cleared");
        };
    }, [isPlaying, track, position]);

    const onTrackChange = () => {
        setTrack("Ocean Eyes");
        setPosition(0);
    };

    return (
        <div style={{ padding: 10, border: "1px solid #ccc" }}>
            <h2>Now Playing</h2>
            <p>
                Track: <strong>{track}</strong>
            </p>
            <p>Position: {position}s</p>
            <button onClick={() => setIsPlaying((p) => !p)}>
                {isPlaying ? "Pause" : "Play"}
            </button>
            <button onClick={onTrackChange}>Change Track</button>
        </div>
    );
};

export default MusicApp;