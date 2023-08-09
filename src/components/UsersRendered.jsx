import { useTranslation } from 'react-i18next';
import UserRow from './UserRow';

const UsersRendered = ({ users, error, loading }) => {
	const { t } = useTranslation();
	if (loading) return <p>Cargando usuarios...</p>;
	if (error) {
		let errorFetch;
		if (error === 'data') errorFetch = t('users-rendered.error-data');
		else errorFetch = t('users-rendered.error-red');
		return <p>{errorFetch}</p>;
	}
	return users !== [] ? (
		users.map(user => <UserRow key={user.id} {...user} />)
	) : (
		<p>{t('users-rendered.error-empty')}</p>
	);
};

export default UsersRendered;
