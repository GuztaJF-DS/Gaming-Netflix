export interface IDefaultButton {
  name?: string;
  backgroundColor?: string;
  fontSize?: number;
  fontColor?: string;
  children?: React.ReactElement;
  onClick: () => void;
}
