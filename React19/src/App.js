import './App.css';

import React from 'react';
import HelloWorld from "./learn/HelloWorld";
import RefContainer from "./components/RefContainer";
// import Objects from "./learn/Objects";
// import ArrayLists from "./learn/ArrayLists";
// import ObjectArray from "./learn/ObjectArray";
// import ClassComponent from "./learn/ClassComponent";
// import FunComponent, {StatComponent} from "./learn/ListComponent";

// import Theme from "./components/Theme";
// import Posts from "./components/Posts";
// import PostForm from "./components/PostForm";
// import PostAction from "./components/PostFormActions";
// import PostStatus from "./components/PostFormStatus";
// import HookUse from "./components/HookUse";
// import HookUseEffect from "./components/HookUseEffect";
// import HookUseOptimistic from "./components/HookUseOptimistic";
// import HookUseRef from "./components/HookUseRef";

// import HookUseState from "./hooks/HookUseState";
// import HookUseContext from "./hooks/HookUseContext";
// import HookUseEffect from "./hooks/HookUseEffect";
// import HookUseMemo from "./hooks/HookUseMemo";
// import HookUseCallback from "./hooks/HookUseCallback";
// import HookUseRef from "./hooks/HookUseRef";
// import MyHooks from "./hooks/MyHooks";
// import CustomHookExample from "./hooks/CustomHookExample";
// import ParentComponent from "./hooks/ParentComponent";

// import MusicApp from "./components/MusicApp";
// import RecipeBuilder from "./components/RecipeBuilder";

const contacts = ["bala", "ram", "satvz"]

const notes = [
	{ name: 'i am doing it', friend: true },
	{ name: 'i am done with it', friend: false },
	{ name: 'i am not done', friend: false },
	{ name: 'i have to eat', friend: true },
	{ name: 'i am going to gym', friend: false }
];

const userdetail = {
	name: 'bala',
	email: 'balakarthikeya@gmail.com'
}

function Counter() {
	const [count, setCount] = React.useState(0);
	const isDisabled = count >= 10;
	return (
		<div>
			<p>Clicked {count} times</p>
			<button disabled={isDisabled} onClick={() => setCount(count + 1)}>
				Click me
			</button>
		</div>
	);
}

function App() {
  return (
    <div className='max-w-4xl mx-auto p-4'>
			<div className="App">

				{/* Introduction */}
				<article className="App-content">
          <RefContainer />
					{/* Lifecycle methods */}
					<HelloWorld name='Tom' /><hr />
					{/* Object */}
					{/* <Objects user={userdetail} /><hr /> */}
					{/* Array List */}
					{/* <ArrayLists contactlist={contacts} /><hr /> */}
					{/* Array List */}
					{/* <ObjectArray objectlist={notes} /><hr /> */}
					{/* Class components */}
					{/* <ClassComponent list={userdetail} /> */}
					{/* <Counter /> */}
					{/* <FunComponent friends={contacts} />
					<StatComponent friends={contacts} /> */}
				</article>

				{/* Hooks */}
				<article className="App-hooks">
					{/* <Theme /> */}
					{/* <Posts /> */}
					{/* <PostForm /> */}
					{/* <PostAction /> */}
					{/* <PostStatus /> */}
					{/* <HookUse /> */}
					{/* <HookUseEffect /> */}
					{/* <HookUseOptimistic /> */}
					{/* <HookUseRef /> */}

					{/* <HookUseState /> */}
					{/* <HookUseContext /> */}
					{/* <HookUseEffect /> */}
					{/* <HookUseMemo /> */}
					{/* <HookUseCallback /> */}
					{/* <HookUseRef /> */}
					{/* <MyHooks /> */}
					{/* <CustomHookExample /> */}
				</article>

				{/* Components */}
				<article className="App-components">
					{/* <ParentComponent /> */}
					{/* <MusicApp /> */}
					{/* <RecipeBuilder /> */}
				</article>

			</div>
    </div>
  );
}

export default App;
