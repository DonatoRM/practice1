import style from './PageSelector.module.css';
import { useTranslation } from 'react-i18next';
import ButtonWithIcon from '../buttons/ButtonWithIcon';
import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';

const PageSelector = ({ pagination, setPagination, totalPages }) => {
	const { t } = useTranslation();
	const { page } = pagination;
	const { setPage } = setPagination;
	return (
		<div className={style.wrapper}>
			{pagination.page === 1 ? (
				<ButtonWithIcon
					icon={ArrowLeftIcon}
					value={page}
					onClick={() => setPage(page - 1)}
					disabled
				/>
			) : (
				<ButtonWithIcon
					icon={ArrowLeftIcon}
					value={page}
					onClick={() => setPage(page - 1)}
				/>
			)}
			<span className={style.span}>
				{t('page-selector.span', { page, totalPages })}
			</span>
			{pagination.page === totalPages ? (
				<ButtonWithIcon
					icon={ArrowRightIcon}
					value={page}
					onClick={() => setPage(page + 1)}
					disabled
				/>
			) : (
				<ButtonWithIcon
					icon={ArrowRightIcon}
					value={page}
					onClick={() => setPage(page + 1)}
				/>
			)}
		</div>
	);
};

export default PageSelector;
