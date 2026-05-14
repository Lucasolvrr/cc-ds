import React, { useId } from 'react';
import styles from './Checkbox.module.css';
import type { CheckboxProps } from './Checkbox.types';

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  subLabel,
  helperText,
  checked      = false,
  indeterminate = false,
  disabled      = false,
  error         = false,
  value,
  name,
  id,
  onChange,
  className,
}) => {
  const generatedId = useId();
  const fieldId     = id ?? `checkbox-${generatedId}`;
  const helperId    = helperText ? `${fieldId}-helper` : undefined;

  const boxClass = [
    styles.box,
    indeterminate        ? styles['box-indeterminate']      : '',
    checked && !disabled  ? styles['box-checked']            : '',
    checked && disabled   ? styles['box-disabled-checked']   : '',
    !checked && disabled  ? styles['box-disabled']           : '',
    error && !checked     ? styles['box-error']              : '',
  ].filter(Boolean).join(' ');

  const labelClass = [
    styles.label,
    disabled ? styles['label-disabled'] : '',
    error    ? styles['label-error']    : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={[styles.wrapper, className ?? ''].filter(Boolean).join(' ')}>
      <input
        type="checkbox"
        id={fieldId}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        aria-checked={indeterminate ? 'mixed' : checked}
        aria-disabled={disabled}
        aria-describedby={helperId}
        aria-invalid={error}
        onChange={onChange}
        className={styles.input}
      />

      <label htmlFor={fieldId} className={styles.row}>
        <span className={boxClass}>
          {(checked || indeterminate) && (
            <span className={styles['check-icon']} aria-hidden="true">
              {indeterminate
                ? <span className={styles.dash} />
                : <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              }
            </span>
          )}
        </span>

        <span className={styles['label-col']}>
          {label && <span className={labelClass}>{label}</span>}
          {subLabel && <span className={styles['sub-label']}>{subLabel}</span>}
        </span>
      </label>

      {helperText && (
        <span
          id={helperId}
          className={[styles.helper, error ? styles['helper-error'] : ''].filter(Boolean).join(' ')}
          role={error ? 'alert' : undefined}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Checkbox;
