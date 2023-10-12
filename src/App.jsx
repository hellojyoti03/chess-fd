import Board from "./component/board/board";
import Provider from "./context/Provider.jsx";
import { useAppContext } from "./context/Provider.jsx";
function App() {
	const { appState, dispatch } = useAppContext();
	console.log(appState);
	return (
		<Provider>
			<div className='app'>
				{/* <h2>turn : {state.appState.turn}</h2> */}
				<Board />
			</div>
		</Provider>
	);
}

export default App;
