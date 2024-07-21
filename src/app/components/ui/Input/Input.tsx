'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import styles from './Input.module.css';
import { useTheme } from '@/app/context/ThemeContext';

interface InputProps {
  type: string;
  placeholder: string;
  icon?: 'email' | 'password' | 'user';
  className?: string; // Add className to the props
}

const iconMap = {
  email: faEnvelope,
  password: faLock,
  user: faUser,
};

const Input = ({ type, placeholder, icon, className }: InputProps) => {
  const { theme } = useTheme();
  const iconStyle = theme === 'light' ? styles.iconLight : styles.iconDark;

  return (
    <div className={`${styles.inputContainer} ${className}`}>
      {icon && (
        <div className={`${styles.icon} ${iconStyle}`}>
          <FontAwesomeIcon icon={iconMap[icon]} />
        </div>
      )}
      <input type={type} placeholder={placeholder} className={styles.input} />
    </div>
  );
};

export default Input;
