import { useTranslation } from 'react-i18next';
import ORDER_TYPES from '../lib/constants/orderTypes';
import style from './UsersFilters.module.css';
import Checkbox from './forms/Checkbox';
import InputSearch from './forms/InputSearch';
import SelectWithIcon from './forms/SelectWithIcon';
import SelectorIcon from './icons/SelectorIcon';

const UsersFilters = ({ filters, setSelectedText, setIsActive, setSortBy }) => {
	const { t } = useTranslation();
	return (
		<div className={style.filter}>
			<div className={style.byName}>
				<InputSearch
					value={filters.selectedText}
					onChange={ev => setSelectedText(ev.target.value)}
					placeholder={t('users-filters.placeholder')}
				/>
			</div>
			<div className={style.byActivity}>
				<Checkbox
					label={t('users-filters.actives')}
					value={filters.isActive}
					onChange={ev => setIsActive(ev.target.checked)}
				/>
			</div>
			<div className={style.sortBy}>
				<SelectWithIcon
					value={filters.sortBy}
					onChange={ev => setSortBy(Number(ev.target.value))}
					label='Ordenar por:'
					icon={SelectorIcon}
				>
					<option value={ORDER_TYPES.NONE}>
						{t('users-filters.unsorted')}
					</option>
					<option value={ORDER_TYPES.BY_NAME}>
						{t('users-filters.by-name')}
					</option>
					{!filters.isActive ? (
						<option value={ORDER_TYPES.BY_ACTIVE}>
							{t('users-filters.by-active')}
						</option>
					) : (
						''
					)}
					<option value={ORDER_TYPES.BY_ROLE}>
						{t('users-filters.by-role')}
					</option>
				</SelectWithIcon>
			</div>
		</div>
	);
};

export default UsersFilters;
