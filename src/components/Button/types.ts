export interface ButtonProps {
  name?: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  disabled?: boolean;
  isRedFont?: boolean;
}
