import { useState } from 'react';
import ORDER_TYPES from '../constants/orderTypes';

const useFilters = setPage => {
	const [filters, setFilters] = useState({
		selectedText: '',
		isActive: false,
		sortBy: ORDER_TYPES.NONE
	});
	const setSelectedText = selectedText =>
		setFilters({ ...filters, selectedText });
	const setIsActive = isActive => {
		setFilters({ ...filters, isActive });
		setPage(1);
	};
	const setSortBy = sortBy => setFilters({ ...filters, sortBy });
	return {
		filters,
		setSelectedText,
		setIsActive,
		setSortBy
	};
};

export default useFilters;
