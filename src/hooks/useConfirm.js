import React from 'react';
import ReactDOM from 'react-dom';

const useConfrim = (message, callback, rejection) => {
	if (typeof callback !== 'function') {
		return;
	}
	const confirmAction = () => {
		if (confirm(message)) {
			callback();
		} else {
			rejection();
		}
	};
	return confirmAction;
};

const App = () => {
	const deleteWorld = () => {
		console.log('Delete the world');
	};
	const confirmDelete = useConfrim('Are you sure', deleteWorld);
	const abort = () => {
		console.log('Aborted');
	};

	return (
		<div className="App">
			<button onClick={confirmDelete}>Delete the world</button>
		</div>
	);
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
