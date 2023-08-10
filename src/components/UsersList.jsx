import style from './UsersList.module.css';
import { useTranslation } from 'react-i18next';
import UsersRendered from './UsersRendered';
import useUsers from '../lib/hooks/useUsers';
import useForm from '../lib/hooks/useForm';
import UsersFilters from './UsersFilters';
import SelectLanguageChange from './SelectLanguageChange';
import UsersPaging from './UsersPaging';
import Button from './buttons/Button';
import { FORM_TYPES } from '../lib/constants/formTypes';
import UserCreate from './UserCreate';

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
				<UserCreate onClose={setFilterForm} />
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

export default UsersList;
