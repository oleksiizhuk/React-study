import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../../store/locale/actions';
import styles from '../../../scss/layout/Header.module.scss';

const Header = () => {
  const { t } = useTranslation();
  const locale = useSelector(({ locale: loc }) => loc.locale);
  const dispatch = useDispatch();
  return (
    <header className={styles.appHeader}>
      <Link to="/" className={styles.headerLink}>
        {t('home')}
      </Link>
      <Link to="/about" className={styles.headerLink}>
        {t('about')}
      </Link>
      <Link to="/basicFormik" className={styles.headerLink}>
        {t('basicFormik')}
      </Link>
      <Link to="/exampleUseFormik" className={styles.headerLink}>
        {t('exampleUseFormik')}
      </Link>
      <button
        className={styles.toggleLanguage}
        data-testid="toggle-language-button"
        type="button"
        onClick={dispatch(changeLanguage)}
      >
        {locale}
      </button>
    </header>
  );
};

export default Header;
