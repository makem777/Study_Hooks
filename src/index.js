import React from 'react';
import ReactDOM from 'react-dom';
import useAxios from './hooks/useAxios';

const App = () => {
	const { loading, data, error } = useAxios({ url: 'https://yts.am/api/v2/list_movies.json' });
	console.log(`Loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}\n`);

	return <div className="App" style={{ height: '1000vh' }}></div>;
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
