import { Container } from "./styles";

//Responsável por tipar todas as propriedades que serão recebidas e seus tipos 
interface ButtonProps {
  title: string;
  onClick: () => void;
}

export function Button({ title, onClick }: ButtonProps) {
  return <Container onClick={onClick}>{title}</Container>;
}
