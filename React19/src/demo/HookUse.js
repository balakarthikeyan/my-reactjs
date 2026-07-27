import { use, Suspense } from 'react';

const jokePromise = fetch('https://api.chucknorris.io/jokes/random').then(res => res.json());

const JokeItem = () => {
    const joke = use(jokePromise);
    return (
        <div className='bg-blue-100 shadow-md p-4 my-6 rounded-lg'>
            <h2 className='text-xl font-bold'>{joke.value}</h2>
        </div>
    );
};

const HookUse = () => {
    return (
        <Suspense fallback={<h2 className='text-2xl text-center font-bold mt-5'>Loading...</h2>}>
            <JokeItem />
        </Suspense>
    );
};

export default HookUse;
