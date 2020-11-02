import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

const useNotification = (title, options) => {
	if (!('Notification' in window)) {
		return;
	}

	const fireNotif = () => {
		if (Notification.permission !== 'granted') {
			Notification.requestPermission().then((permission) => {
				if (permission === 'granted') {
					new Notification(title, options);
				} else {
					return;
				}
			});
		} else {
			new Notification(title, options);
		}
	};
	return fireNotif;
};

const App = () => {
	const triggerNotif = useNotification('알림입니다.', { body: '킴치 좋아하세용?' });
	return (
		<div className="App" style={{ height: '1000vh' }}>
			<button onClick={triggerNotif}>Hello</button>
		</div>
	);
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
