export const checkUsernameRepeated = async (username, setData) => {
	let newError;
	try {
		const response = await fetch(
			'http://127.0.0.1:4000/users?username=' + username
		);
		if (response.ok) {
			const result = await response.json();
			newError = result.length ? 'Usuario existente' : '';
		} else {
			newError = 'Error en la consulta';
		}
	} catch (error) {
		newError = 'Error de red';
	} finally {
		setData(previousValue => ({
			...previousValue,
			username: {
				value: username,
				loading: false,
				error: newError
			}
		}));
	}
};
