import style from './UsersPaging.module.css';
import { useTranslation } from 'react-i18next';
import ITEMS_SELECTION from '../lib/constants/itemsSelection';
import PageSelector from './forms/PageSelector';
import SelectWithIcon from './forms/SelectWithIcon';
import SelectorIcon from './icons/SelectorIcon';

const UsersPaging = ({ pagination, setPagination, totalPages }) => {
	const { t } = useTranslation();
	return (
		<div className={style.paged}>
			<SelectWithIcon
				label={t('users-paging.elements')}
				icon={SelectorIcon}
				value={pagination.itemsPerPage}
				onChange={ev => setPagination.setItemsPerPage(Number(ev.target.value))}
			>
				<option value={ITEMS_SELECTION.FOUR}>4</option>
				<option value={ITEMS_SELECTION.SIX}>6</option>
				<option value={ITEMS_SELECTION.EIGHT}>8</option>
			</SelectWithIcon>
			<PageSelector
				pagination={pagination}
				setPagination={setPagination}
				totalPages={totalPages}
			/>
		</div>
	);
};

export default UsersPaging;
