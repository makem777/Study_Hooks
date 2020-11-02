import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const useClick = (onClick) => {
	if (typeof onClick !== 'function') {
		return;
	}
	const element = useRef();
	useEffect(() => {
		// componentDidUpdate ,componentDidMount 에서 동작함 update의 경우 dependency에 따라서
		if (element.current) {
			element.current.addEventListener('click', onClick);
		}
		// componentWillUnmount
		return () => {
			if (element.current) {
				element.current.removeEventListener('click', onClick);
			}
		};
	}, []);
	return element;
};

const App = () => {
	const sayHello = () => console.log('say hello');
	const title = useClick(sayHello);
	return (
		<div className="App">
			<h1 ref={title}>Hi</h1>
		</div>
	);
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
