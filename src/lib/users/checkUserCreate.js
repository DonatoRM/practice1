import { REGEX } from '../constants/regexUserCreate';

export const checkUserStructure = newName => {
	const MIN_CHARACTERS = 2;
	const MAX_CHARACTERS = 30;
	if (!REGEX.NAME.test(newName)) return 'Caracteres no válidos';
	const arrayWords = newName.split(' ');
	arrayWords.forEach(word => {
		if (REGEX.START_WITH_DASH.test(word))
			return 'Una palabra no puede comenzar por un guión';
		if (REGEX.END_WITH_DASH.test(word))
			return 'Una palabra no puede terminar por un guión';
	});
	if (newName.split('  ').length > 1)
		return 'No puede haber más de un espacio entre palabras';
	if (newName.split('--').length > 1)
		return 'No puede haber más de un guión entre palabras';
	if (newName.length < MIN_CHARACTERS || newName.length > MAX_CHARACTERS)
		return `Longitud no válida (${MIN_CHARACTERS} - ${MAX_CHARACTERS} caracteres)`;
	return '';
};

export const checkUsernameStructure = newUsername => {
	const MIN_CHARACTERS = 6;
	const MAX_CHARACTERS = 15;
	if (!REGEX.USERNAME.test(newUsername)) return 'Caracteres no válidos';
	if (
		newUsername.length < MIN_CHARACTERS ||
		newUsername.length > MAX_CHARACTERS
	)
		return `Longitud no válida`;
	return '';
};
