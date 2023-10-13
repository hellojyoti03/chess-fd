import Board from "./component/board/board";
import Provider from "./context/Provider.jsx";

function App() {
	return (
		<Provider>
			<div className='app'>
				<Board />
			</div>
		</Provider>
	);
}

export default App;
