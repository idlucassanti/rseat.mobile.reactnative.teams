import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";

export function Players() {
  return (
    <Container>
      <Header showButtonBack />
      <Highlight title="Nome da turma" subtitle="adicione a galera e separe os esportes"/>

      <ButtonIcon icon="home"/>
    </Container>
  );
}