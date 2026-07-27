import { useEffect, useState } from 'react';

const HookUseEffect = () => {
    const [joke, setJoke] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchJoke = async () => {
            try {
                const res = await fetch('https://api.chucknorris.io/jokes/random');
                const data = await res.json();
                setJoke(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchJoke();
    }, []);

    return (
        <>
            {loading ? <h2 className='text-2xl text-center font-bold mt-5'>Loading...</h2> : (
                <div className='bg-blue-100 shadow-md p-4 my-6 rounded-lg'>
                    <h2 className='text-xl font-bold'>{joke.value}</h2>
                </div>
            )}
        </>
    )
}

export default HookUseEffect