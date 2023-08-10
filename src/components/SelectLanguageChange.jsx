import style from './SelectLanguageChange.module.css';
import SelectWithIcon from './forms/SelectWithIcon';
import TranslatorIcon from './icons/TranslatorIcon';
import { useTranslation } from 'react-i18next';

const SelectLanguageChange = () => {
	const { t, i18n } = useTranslation();
	return (
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
	);
};

export default SelectLanguageChange;
