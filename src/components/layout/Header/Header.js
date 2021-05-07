import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { changeLanguage } from '../../store/locale/actions';
import Title from '../../elements/Title/Title';
import styles from '../../../scss/layout/Header.module.scss';

const Header = ({ home, about, message }) => {
  const locale = useSelector(({ locale: loc }) => loc.locale);
  const dispatch = useDispatch();
  return (
    <header className={styles.appHeader}>
      <Title text={message} />
      <Link to="/" className={styles.headerLink}>
        {home}
      </Link>
      <Link to="/about" className={styles.headerLink}>
        {about}
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

Header.propTypes = {
  home: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Header;
