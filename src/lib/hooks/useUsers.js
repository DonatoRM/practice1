import { useEffect, useState } from 'react';

const useUsers = () => {
	const [uploadedUsers, setUploadedUsers] = useState({
		users: [],
		error: undefined,
		loading: true
	});
	const setUsers = newUsers =>
		setUploadedUsers({
			users: [...newUsers],
			error: undefined,
			loading: false
		});
	const setError = newError =>
		setUploadedUsers({
			users: [],
			error: newError,
			loading: false
		});
	useEffect(() => {
		const controller = new AbortController();
		fetchUsers(setUsers, setError, controller.signal);

		return () => controller.abort();
	}, []);
	return {
		...uploadedUsers
	};
};

const fetchUsers = async (setUsers, setError, signal) => {
	try {
		const response = await fetch('http://localhost:4000/users', { signal });
		if (response.ok) {
			const data = await response.json();
			setUsers(data);
		} else {
			setError('data');
		}
	} catch (err) {
		setError('red');
	}
};

export default useUsers;
