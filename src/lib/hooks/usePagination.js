import { useState } from 'react';
import ITEMS_SELECTION from '../constants/itemsSelection';

const usePagination = () => {
	const [pagination, setPagination] = useState({
		page: 1,
		itemsPerPage: ITEMS_SELECTION.SIX
	});
	const setPage = newPage =>
		setPagination({
			...pagination,
			page: newPage
		});
	const setItemsPerPage = newItemsPerPage =>
		setPagination({
			page: 1,
			itemsPerPage: newItemsPerPage
		});
	return {
		pagination,
		setPage,
		setItemsPerPage
	};
};

export default usePagination;
