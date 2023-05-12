import "../../Clocks.css";
interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

export const Button = ({ children, color = "gray", onClick }: Props) => {
  return (
    <button className={"btn" + color} onClick={onClick}>
      {children}
    </button>
  );
};
