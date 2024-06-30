import logo from './logo.svg';
import './App.css';
import ShoppingList from "./components/TestUseReducer";
import Message from "./components/TestUseState";
import { LoginForm, ListOfThings, LessText } from "./components/Examples";
import SpoilerAlert from "./components/CustomHooks";
import SpoilerDisplay from "./components/TestUseContext";
import SimpleEffect from "./components/TestUseEffect";
function App() {
	return (
		<div className="App">
			<ShoppingList></ShoppingList>
			{/* 
			<Message></Message> 
			<LessText
				text={`Focused, hard work is the real key to success. Keep your eyes on the goal, and just keep taking the next step towards completing it.`}
				maxLength={35}
			/>
			<LoginForm></LoginForm>
			<ListOfThings></ListOfThings>
			<SpoilerAlert></SpoilerAlert>
			<SpoilerDisplay></SpoilerDisplay>
			<SimpleEffect></SimpleEffect>
			*/}
		</div>
	);
}

export default App;
