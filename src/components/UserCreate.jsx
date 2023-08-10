import style from './UserCreate.module.css';
import { useTranslation } from 'react-i18next';
import Checkbox from './forms/Checkbox';
import InputText from './forms/InputText';
import InputTextAsync from './forms/InputTextAsync';
import SelectWithIcon from './forms/SelectWithIcon';
import Button from './buttons/Button';
import SelectorIcon from './icons/SelectorIcon';
import ROLE_TYPES from '../lib/constants/roleTypes';
import ButtonWithIcon from './buttons/ButtonWithIcon';
import CrossIcon from './icons/CrossIcon';

const UserCreate = ({ onClose }) => {
	const { t } = useTranslation();
	return (
		<div className={style.wrapper}>
			<div className={style.close}>
				<ButtonWithIcon icon={CrossIcon} onClick={onClose} />
			</div>
			<div className={style.row1}>
				<InputText
					className={style.name}
					label='Nombre'
					error=''
					placeholder='John Doe'
				/>
				<InputTextAsync
					className={style.username}
					label='Username'
					placeholder='johndoe'
				/>
			</div>
			<div className={style.row2}>
				<div className={style.select}>
					<SelectWithIcon icon={SelectorIcon}>
						<option value={ROLE_TYPES.TEACHER}>
							{t('user-create.teacher')}
						</option>
						<option value={ROLE_TYPES.STUDENT}>
							{t('user-create.student')}
						</option>
						<option value={ROLE_TYPES.OTHER}>{t('user-create.other')}</option>
					</SelectWithIcon>
				</div>
				<div className={style.checkbox}>
					<Checkbox label={t('user-create.active')} position='right' />
				</div>
				<div className={style.button}>
					<Button label={t('user-create.button')} />
				</div>
			</div>
		</div>
	);
};

export default UserCreate;
