import React from 'react';
import styles from './Button.module.css';
import type { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  label,
  variant  = 'primary',
  size     = 'md',
  icon     = 'none',
  iconElement,
  disabled = false,
  loading  = false,
  fullWidth = false,
  onClick,
  className,
  type     = 'button',
  ariaLabel,
}) => {
  const isIconOnly = icon === 'only';
  const hasIcon    = icon !== 'none' && iconElement;

  const classes = [
    styles.button,
    styles[variant],
    styles[`size-${size}`],
    isIconOnly            ? styles['icon-only'] : '',
    fullWidth             ? styles['full-width'] : '',
    loading               ? styles.loading       : '',
    className             || '',
  ].filter(Boolean).join(' ');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;
    onClick?.(e);
  };

  const renderIcon = (iconEl: React.ReactNode) => (
    <span className={styles.iconWrapper} aria-hidden="true">
      {iconEl}
    </span>
  );

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <span className={styles.spinner} aria-hidden="true" />
          {!isIconOnly && <span>Carregando...</span>}
        </>
      );
    }
    return (
      <>
        {(icon === 'left' || icon === 'only') && hasIcon && renderIcon(iconElement)}
        {!isIconOnly && label && <span>{label}</span>}
        {icon === 'right' && hasIcon && renderIcon(iconElement)}
      </>
    );
  };

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-label={isIconOnly ? ariaLabel ?? label : undefined}
      aria-busy={loading}
      onClick={handleClick}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
