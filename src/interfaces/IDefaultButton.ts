export interface IDefaultButton {
  name?: string;
  backgroundColor?: string;
  paddingSize?: number;
  fontSize?: number;
  fontColor?: string;
  children?: React.ReactElement;
  onClick: () => void;
}
