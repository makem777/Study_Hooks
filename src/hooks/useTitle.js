import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import "./styles.css";

const useTitle = (initialTitle) => {
	const [title, setTitlte] = useState(initialTitle);
	const updateTitle = () => {
		const htmlTitle = document.querySelector('title');
		htmlTitle.innerText = title;
	};
	useEffect(updateTitle, [title]); // title이 변경되면 호출
	return setTitlte;
};
const App = () => {
	const titleUpdater = useTitle('Loading...');
	setTimeout(() => titleUpdater('Home'), 5000);
	return <div className="App"></div>;
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
