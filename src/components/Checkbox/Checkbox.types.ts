export type CheckboxState = 'unchecked' | 'checked' | 'indeterminate' | 'error' | 'disabled-unchecked' | 'disabled-checked';

export interface CheckboxProps {
  /** Texto principal do label */
  label?: string;
  /** Texto secundário (sub-label) */
  subLabel?: string;
  /** Texto auxiliar (helper / erro) */
  helperText?: string;
  /** Estado controlado */
  checked?: boolean;
  /** Estado indeterminado */
  indeterminate?: boolean;
  /** Campo desabilitado */
  disabled?: boolean;
  /** Estado de erro */
  error?: boolean;
  /** Valor do checkbox */
  value?: string;
  /** Nome do grupo */
  name?: string;
  /** ID do elemento */
  id?: string;
  /** Callback de mudança */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Classe CSS adicional */
  className?: string;
}
