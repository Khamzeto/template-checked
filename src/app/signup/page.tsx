'use client';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Registration.module.css';
import Input from '../components/ui/Input/Input';
import Button from '../components/ui/Button/Button';
import i18n from '../../i18n'; // Убедитесь, что путь правильный

const Registration = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Нормализация языкового кода
    const normalizedLang = i18n.language ? i18n.language.split('-')[0] : 'en';
    i18n.changeLanguage(normalizedLang);

    console.log('Current language:', i18n.language);
    console.log('Translation object:', t);
    console.log('Translation for registration.title:', t('registration.title'));
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <img src="./logo.svg" alt="Logo" className={styles.logo} />
        <div className={styles.header}>
          <h1 className={styles.title}>{t('registration.title')}</h1>
        </div>
        <div className={styles.inputs}>
          <Input
            type="text"
            placeholder={t('registration.username') || ''}
            icon="user"
            className={styles.input}
          />
          <Input
            type="email"
            placeholder={t('registration.email') || ''}
            icon="email"
            className={styles.input}
          />
          <Input
            type="password"
            placeholder={t('registration.password') || ''}
            icon="password"
            className={styles.input}
          />
          <Input
            type="password"
            placeholder={t('registration.confirmPassword') || ''}
            icon="password"
            className={styles.input}
          />
        </div>
        <Button
          text={t('registration.register') || ''}
          className={styles.button}
          showIcon={false}
        />
        <p className={styles.or}>{t('registration.or')}</p>
        <p className={styles.signup}>
          {t('registration.alreadyAccount')}{' '}
          <a href="/signin" className={styles.signupLink}>
            {t('registration.signIn')}
          </a>
        </p>
      </div>
    </main>
  );
};

export default Registration;
