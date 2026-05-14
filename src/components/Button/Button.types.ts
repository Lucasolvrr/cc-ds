export type ButtonVariant  = 'primary' | 'secondary' | 'tertiary' | 'danger';
export type ButtonSize     = 'lg' | 'md' | 'sm' | 'xs';
export type ButtonIcon     = 'none' | 'left' | 'right' | 'only';

export interface ButtonProps {
  /** Texto exibido no botão */
  label?: string;
  /** Variante visual */
  variant?: ButtonVariant;
  /** Tamanho */
  size?: ButtonSize;
  /** Posição do ícone */
  icon?: ButtonIcon;
  /** Elemento de ícone (ex: componente Phosphor) */
  iconElement?: React.ReactNode;
  /** Estado desabilitado */
  disabled?: boolean;
  /** Estado de carregamento */
  loading?: boolean;
  /** Largura total do container */
  fullWidth?: boolean;
  /** Callback de clique */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Classe CSS adicional */
  className?: string;
  /** Tipo HTML do botão */
  type?: 'button' | 'submit' | 'reset';
  /** aria-label para ícone only */
  ariaLabel?: string;
}
