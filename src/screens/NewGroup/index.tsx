import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container, Content, UsersIcon } from "./styles";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup() {
  return (
    <Container>
      <Header showButtonBack />
      
      <Content>
        <UsersIcon />
        <Highlight title="Nova turma" subtitle="crie uma turma para adicionar pessoas" />

        <Input />
        <Button 
          description="Criar"
          style={{ marginTop: 16 }}  
        />
      </Content>
    </Container>
  );
}