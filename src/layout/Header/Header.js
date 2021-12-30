import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../../store/locale/actions';
import styles from '../../scss/layout/Header.module.scss';

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
      <Link to="/linkedList" className={styles.headerLink}>
        {t('linkedList')}
      </Link>
      <Link to="/UseMemo" className={styles.headerLink}>
        {t('usememo')}
      </Link>
      <Link to="/BinaryTree" className={styles.headerLink}>
        {t('BinaryTree')}
      </Link>
      <Link to="/Grid" className={styles.headerLink}>
        {t('Grid')}
      </Link>
      <Link to="/UseCallBackUseMemo" className={styles.headerLink}>
        {t('UseCallBackUseMemo.js')}
      </Link>
      <Link to="/UseEffect" className={styles.headerLink}>
        {t('UseEffect')}
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
