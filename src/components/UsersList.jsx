import style from './UsersList.module.css';
import { useTranslation } from 'react-i18next';
import UsersRendered from './UsersRendered';
import useUsers from '../lib/hooks/useUsers';
import UsersFilters from './UsersFilters';
import SelectLanguageChange from './SelectLanguageChange';
import UsersPaging from './UsersPaging';
import { useState } from 'react';
import Button from './buttons/Button';
import InputText from './forms/InputText';

const UsersList = () => {
	const { t } = useTranslation();

	const { currentForm, setFilterForm, setCreateForm } = useForm();

	const { filters, setFilters, users, pagination, setPagination, totalPages } =
		useUsers();

	return (
		<div className={style.wrapper}>
			<SelectLanguageChange />
			<h1 className={style.title}>{t('users-list.title')}</h1>
			{currentForm === FORM_TYPES.FILTER_FORM ? (
				<UsersFilters
					filters={filters}
					setSelectedText={setFilters.setSelectedText}
					setIsActive={setFilters.setIsActive}
					setSortBy={setFilters.setSortBy}
					slot={
						<Button
							label={t('users-list.new-user-button-label')}
							onClick={() => setCreateForm()}
						/>
					}
				/>
			) : (
				<p>CreateForm</p>
			)}
			<UsersRendered
				users={users.filteredUsers}
				error={users.error}
				loading={users.loading}
			/>
			<UsersPaging
				pagination={pagination}
				setPagination={setPagination}
				totalPages={totalPages}
			/>
		</div>
	);
};

const useForm = () => {
	const [currentForm, setCurrentForm] = useState(FORM_TYPES.FILTER_FORM);
	const setFilterForm = () => setCurrentForm(FORM_TYPES.FILTER_FORM);
	const setCreateForm = () => setCurrentForm(FORM_TYPES.CREATE_FORM);
	console.log(currentForm);
	return {
		currentForm,
		setFilterForm,
		setCreateForm
	};
};

const FORM_TYPES = {
	FILTER_FORM: 1,
	CREATE_FORM: 2
};

export default UsersList;
