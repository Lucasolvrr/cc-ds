export type InputState = 'default' | 'focus' | 'filled' | 'error' | 'success' | 'disabled';
export type InputIcon  = 'none' | 'left' | 'right' | 'both';

export interface InputProps {
  /** Label exibida acima do campo */
  label?: string;
  /** Placeholder do campo */
  placeholder?: string;
  /** Valor controlado */
  value?: string;
  /** Valor padrão (não controlado) */
  defaultValue?: string;
  /** Estado visual */
  state?: InputState;
  /** Posição dos ícones */
  icon?: InputIcon;
  /** Ícone esquerdo (ex: MagnifyingGlass do Phosphor) */
  iconLeft?: React.ReactNode;
  /** Ícone direito (ex: Eye do Phosphor) */
  iconRight?: React.ReactNode;
  /** Texto auxiliar / mensagem de erro ou sucesso */
  helperText?: string;
  /** Tipo HTML do input */
  type?: 'text' | 'email' | 'password' | 'number' | 'search' | 'tel';
  /** Campo desabilitado */
  disabled?: boolean;
  /** Largura total */
  fullWidth?: boolean;
  /** Nome do campo */
  name?: string;
  /** ID do campo */
  id?: string;
  /** Callback de mudança */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Callback de blur */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /** Callback de focus */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /** Classe CSS adicional */
  className?: string;
  /** Auto complete */
  autoComplete?: string;
}
