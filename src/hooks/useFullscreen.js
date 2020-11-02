import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

const useFullscreen = (callback) => {
	const element = useRef();
	const triggerFull = () => {
		if (element.current) {
			element.current.requestFullscreen();
			if (callback && typeof callback === 'function') {
				callback(true);
			}
		}
	};
	const exitFull = () => {
		document.exitFullscreen();
		if (callback && typeof callback === 'function') {
			callback(false);
		}
	};
	return { element, triggerFull, exitFull };
};

const App = () => {
	const onFullS = (isFull) => [console.log(isFull ? 'We are full' : 'We are small')];
	const { element, triggerFull, exitFull } = useFullscreen();
	return (
		<div className="App" style={{ height: '1000vh' }}>
			<div ref={element}>
				<img src="https://purr.objects-us-east-1.dream.io/i/RumjE.jpg" alt="cat" />
				<button onClick={exitFull}>Exit fullscreen</button>
			</div>
			<button onClick={triggerFull}>Make fullscreen</button>
		</div>
	);
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
