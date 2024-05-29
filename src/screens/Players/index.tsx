import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "./components/Filter";

export function Players() {
  return (
    <Container>
      <Header showButtonBack />
      <Highlight title="Nome da turma" subtitle="adicione a galera e separe os esportes"/>

      <Form>
        <Input placeholder="Nome do participante"/>
        <ButtonIcon icon="add"/>
      </Form>

      <Filter title="Time A" isActive />
    </Container>
  );
}