import { useEffect, useState } from 'react';
import ORDER_TYPES from '../constants/orderTypes';
import ROLE_TYPES from '../constants/roleTypes';
import useFilters from './useFilters';
import usePagination from './usePagination';

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

	const { filters, setSelectedText, setIsActive, setSortBy } = useFilters();

	let filteredUsers = uploadedUsers.users.filter(user =>
		user.name.toLowerCase().includes(filters.selectedText.toLowerCase())
	);

	filteredUsers = sortListOfUsersBy(filteredUsers, filters.sortBy);
	filteredUsers = filters.isActive
		? filteredUsers.filter(user => user.active === true)
		: filteredUsers;

	const setFilters = { setSelectedText, setIsActive, setSortBy };

	/* Pages */
	const { pagination, setPage, setItemsPerPage } = usePagination();
	const totalPages = Math.ceil(filteredUsers.length / pagination.itemsPerPage);
	const firstItem = (pagination.page - 1) * pagination.itemsPerPage;
	const lastItem = pagination.page * pagination.itemsPerPage;
	filteredUsers = filteredUsers.slice(firstItem, lastItem);

	/* Fin Pages */

	const users = {
		filteredUsers,
		error: uploadedUsers.error,
		loading: uploadedUsers.loading
	};
	const setPagination = { setPage, setItemsPerPage };
	return {
		filters,
		setFilters,
		users,
		pagination,
		setPagination,
		totalPages
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

const sortListOfUsersBy = (users, orderType) => {
	const newUsers = [...users];
	switch (orderType) {
		case ORDER_TYPES.BY_NAME:
			return newUsers.sort((a, b) => {
				if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
				if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
				b = b.name.toLowerCase();
				return 0;
			});
		case ORDER_TYPES.BY_ACTIVE:
			return newUsers.sort((a, b) => {
				if (a.active > b.active) return -1;
				if (a.active < b.active) return 1;
				return 0;
			});
		case ORDER_TYPES.BY_ROLE:
			return newUsers.sort((a, b) => {
				if (a.role !== ROLE_TYPES.TEACHER && a.role !== ROLE_TYPES.STUDENT)
					a.role = ROLE_TYPES.OTHER;
				if (b.role !== ROLE_TYPES.TEACHER && b.role !== ROLE_TYPES.STUDENT)
					b.role = ROLE_TYPES.OTHER;
				if (a.role === b.role) return 0;
				if (a.role === ROLE_TYPES.TEACHER && b.role !== ROLE_TYPES.TEACHER)
					return -1;
				if (a.role === ROLE_TYPES.STUDENT && b.role === ROLE_TYPES.OTHER)
					return -1;
				return 1;
			});
		default:
			return newUsers;
	}
};

export default useUsers;
