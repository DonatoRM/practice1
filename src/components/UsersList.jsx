import style from './UsersList.module.css';
import { useTranslation } from 'react-i18next';
import UsersRendered from './UsersRendered';
import useUsers from '../lib/hooks/useUsers';
import UsersFilters from './UsersFilters';
import SelectLanguageChange from './SelectLanguageChange';
import UsersPaging from './UsersPaging';

const UsersList = () => {
	const { t } = useTranslation();

	const { filters, setFilters, users, pagination, setPagination, totalPages } =
		useUsers();

	return (
		<div className={style.wrapper}>
			<SelectLanguageChange />
			<h1 className={style.title}>{t('users-list.title')}</h1>
			<UsersFilters
				filters={filters}
				setSelectedText={setFilters.setSelectedText}
				setIsActive={setFilters.setIsActive}
				setSortBy={setFilters.setSortBy}
			/>
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
