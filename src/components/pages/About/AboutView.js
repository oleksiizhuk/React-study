import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../../../scss/pages/About/About.module.scss';

const AboutView = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p className={styles.appIntro}>{t('aboutPage')}</p>
    </div>
  );
};

export default AboutView;
