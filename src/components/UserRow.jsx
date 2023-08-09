import style from './UserRow.module.css';
import ROLE_TYPES from '../lib/constants/roleTypes';
import { useTranslation } from 'react-i18next';

const UserRow = ({ name, active, role }) => {
	const { t, i18n } = useTranslation();
	const classActive = active ? style.active : style.inactive;
	const [userRole, classRole] = ROLES[role] || ROLES.OTHER;
	let roleUser;
	switch (userRole) {
		case 'profesor':
			roleUser = t('user-row.teacher');
			break;
		case 'alumno':
			roleUser = t('user-row.student');
			break;
		default:
			roleUser = t('user-row.other');
	}
	return (
		<div className={style.wrapper}>
			<div className={style.name}>
				<span>{name}</span>
			</div>
			<div className={`${style.userActive} ${classActive} || ''`}>
				<span>{active ? t('user-row.active') : t('user-row.inactive')}</span>
			</div>
			<div className={style.role}>
				<span className={`${style.spanRole} ${classRole} || ''`}>
					{roleUser}
				</span>
			</div>
		</div>
	);
};

const ROLES = {
	[ROLE_TYPES.TEACHER]: ['profesor', style.teacher],
	[ROLE_TYPES.STUDENT]: ['alumno', style.student],
	[ROLE_TYPES.OTHER]: ['otro', style.other]
};

export default UserRow;
