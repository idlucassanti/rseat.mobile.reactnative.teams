import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container, Content, UsersIcon } from "./styles";
import { Button } from "@components/Button";

export function NewGroup() {
  return (
    <Container>
      <Header showButtonBack />
      
      <Content>
        <UsersIcon />
        <Highlight title="Nova turma" subtitle="crie uma turma para adicionar pessoas" />

        <Button description="Criar"/>
      </Content>
    </Container>
  );
}