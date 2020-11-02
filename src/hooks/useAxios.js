import defaultAxios from 'axios';
import { useState, useEffect } from 'react';

/*
  axios 는 http request 를 만드는것
 */

const useAxios = (opts, axiosInstance = defaultAxios) => {
	const [state, setState] = useState({
		loading: true,
		error: null,
		data: null,
	});
	if (!opts.url) {
		return;
	}
	useEffect(() => {
		axiosInstance(opts).then((data) => {
			setState({
				...state,
				loaidng: false,
				data,
			});
		});
	}, []);
	return state;
};

export default useAxios;
