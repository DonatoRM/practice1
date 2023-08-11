import { useEffect, useState } from 'react';
import {
	checkUserStructure,
	checkUsernameStructure
} from '../users/checkUserCreate';
import { checkUsernameRepeated } from '../users/checkUsernameRepeated';

export const useCreateUserData = () => {
	const [data, setData] = useState({
		name: {
			value: '',
			error: undefined
		},
		username: {
			value: '',
			loading: false,
			error: undefined
		}
	});
	const setName = newName => {
		const newError = checkUserStructure(newName);
		setData({
			...data,
			name: {
				value: newName,
				error: newError
			}
		});
	};

	useEffect(() => {
		if (data.username.loading) {
			checkUsernameRepeated(data.username.value, setData);
		}
	}, [data.username.loading, data.username.value, setData]);

	const setUsername = newUsername => {
		const newError = checkUsernameStructure(newUsername);
		setData({
			...data,
			username: {
				value: newUsername,
				loading: !newError,
				error: newError
			}
		});
	};
	return {
		...data,
		setName,
		setUsername
	};
};
