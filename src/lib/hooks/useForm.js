import { useState } from 'react';
import { FORM_TYPES } from '../constants/formTypes';

const useForm = () => {
	const [currentForm, setCurrentForm] = useState(FORM_TYPES.FILTER_FORM);
	const setFilterForm = () => setCurrentForm(FORM_TYPES.FILTER_FORM);
	const setCreateForm = () => setCurrentForm(FORM_TYPES.CREATE_FORM);
	return {
		currentForm,
		setFilterForm,
		setCreateForm
	};
};

export default useForm;
