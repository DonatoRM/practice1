import style from './UsersList.module.css';
import { useTranslation } from 'react-i18next';
import UsersRendered from './UsersRendered';
import useUsers from '../lib/hooks/useUsers';
import useFilters from '../lib/hooks/useFilters';
import InputSearch from './forms/InputSearch';
import SelectWithIcon from './forms/SelectWithIcon';
import Checkbox from './forms/Checkbox';
import TranslatorIcon from './icons/TranslatorIcon';
import SelectorIcon from './icons/SelectorIcon';
import ROLE_TYPES from '../lib/constants/roleTypes';
import ORDER_TYPES from '../lib/constants/orderTypes';

const UsersList = () => {
	const { users, error, loading } = useUsers();
	const { t, i18n } = useTranslation();

	const {
		selectedText,
		isActive,
		sortBy,
		setSelectedText,
		setIsActive,
		setSortBy
	} = useFilters();

	let filteredUsers = users.filter(user =>
		user.name.toLowerCase().includes(selectedText.toLowerCase())
	);
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
	filteredUsers = sortListOfUsersBy(filteredUsers, sortBy);
	console.log(isActive);
	filteredUsers = isActive
		? filteredUsers.filter(user => user.active === true)
		: filteredUsers;

	return (
		<div className={style.wrapper}>
			<div className={style.languageChange}>
				<SelectWithIcon
					value={i18n.language}
					onChange={ev => i18n.changeLanguage(ev.target.value)}
					icon={TranslatorIcon}
				>
					<option value='es'>{t('users-list.spanish')}</option>
					<option value='en'>{t('users-list.english')}</option>
				</SelectWithIcon>
			</div>
			<h1 className={style.title}>{t('users-list.title')}</h1>
			<div className={style.filter}>
				<div className={style.byName}>
					<InputSearch
						value={selectedText}
						onChange={ev => setSelectedText(ev.target.value)}
						placeholder={t('users-list.placeholder')}
					/>
				</div>
				<div className={style.byActivity}>
					<Checkbox
						label={t('users-list.actives')}
						value={isActive}
						onChange={ev => setIsActive(ev.target.checked)}
					/>
				</div>
				<div className={style.sortBy}>
					<SelectWithIcon
						value={sortBy}
						onChange={ev => setSortBy(Number(ev.target.value))}
						label='Ordenar por:'
						icon={SelectorIcon}
					>
						<option value={ORDER_TYPES.NONE}>{t('users-list.unsorted')}</option>
						<option value={ORDER_TYPES.BY_NAME}>
							{t('users-list.by-name')}
						</option>
						{!isActive ? (
							<option value={ORDER_TYPES.BY_ACTIVE}>
								{t('users-list.by-active')}
							</option>
						) : (
							''
						)}
						<option value={ORDER_TYPES.BY_ROLE}>
							{t('users-list.by-role')}
						</option>
					</SelectWithIcon>
				</div>
			</div>
			<UsersRendered users={filteredUsers} error={error} loading={loading} />
		</div>
	);
};

export default UsersList;
