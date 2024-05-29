import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";

export function Players() {
  return (
    <Container>
      <Header showButtonBack />
      <Highlight title="Nome da turma" subtitle="adicione a galera e separe os esportes"/>
    </Container>
  );
}