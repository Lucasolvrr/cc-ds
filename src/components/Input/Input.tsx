import React, { useId } from 'react';
import styles from './Input.module.css';
import type { InputProps } from './Input.types';

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  defaultValue,
  state     = 'default',
  icon      = 'none',
  iconLeft,
  iconRight,
  helperText,
  type      = 'text',
  disabled  = false,
  fullWidth = false,
  name,
  id,
  onChange,
  onBlur,
  onFocus,
  className,
  autoComplete,
}) => {
  const generatedId = useId();
  const fieldId     = id ?? `input-${generatedId}`;
  const helperId    = helperText ? `${fieldId}-helper` : undefined;

  const isDisabled  = disabled || state === 'disabled';
  const stateClass  = `state-${state}`;

  const wrapperClasses = [
    styles.wrapper,
    styles[stateClass],
    fullWidth ? styles['full-width'] : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  const labelClass = [
    styles.label,
    state === 'error'    ? styles['label-error']   : '',
    state === 'success'  ? styles['label-success']  : '',
    isDisabled           ? styles['label-disabled']  : '',
  ].filter(Boolean).join(' ');

  const helperClass = [
    styles.helper,
    state === 'error'   ? styles['helper-error']   : '',
    state === 'success' ? styles['helper-success']  : '',
  ].filter(Boolean).join(' ');

  const showIconLeft  = (icon === 'left'  || icon === 'both') && iconLeft;
  const showIconRight = (icon === 'right' || icon === 'both') && iconRight;

  return (
    <div className={wrapperClasses}>
      {label && (
        <label htmlFor={fieldId} className={labelClass}>
          {label}
        </label>
      )}

      <div className={styles.field}>
        {showIconLeft && (
          <span className={styles.icon} aria-hidden="true">
            {iconLeft}
          </span>
        )}

        <input
          id={fieldId}
          name={name}
          type={type}
          className={styles.input}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          disabled={isDisabled}
          aria-disabled={isDisabled}
          aria-describedby={helperId}
          aria-invalid={state === 'error'}
          autoComplete={autoComplete}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />

        {showIconRight && (
          <span className={styles.icon} aria-hidden="true">
            {iconRight}
          </span>
        )}
      </div>

      {helperText && (
        <span id={helperId} className={helperClass} role={state === 'error' ? 'alert' : undefined}>
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Input;
