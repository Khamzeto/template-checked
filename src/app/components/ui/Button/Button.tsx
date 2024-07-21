'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  className?: string; // Optional className prop
  showIcon?: boolean; // Optional showIcon prop
}

const Button = ({ text, className, showIcon = true }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${className}`}>
      <span className={styles.text}>{text}</span>
      {showIcon && (
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
        </div>
      )}
    </button>
  );
};

export default Button;
