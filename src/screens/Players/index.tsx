import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "./components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "./components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState(['Lucas Santi', 'Dyovana', 'Matteo', 'Valdir', 'Miguel', 'Claudia', 'Isabella', 'Valdir Jr', 'Tico', 'Teco']);

  return (
    <Container>
      <Header showButtonBack />
      <Highlight title="Nome da turma" subtitle="adicione a galera e separe os esportes"/>

      <Form>
        <Input placeholder="Nome do participante"/>
        <ButtonIcon icon="add"/>
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter 
              title={item}
              isActive={team == item}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumbersOfPlayers>
          {players.length}
        </NumbersOfPlayers>
      </HeaderList>

      <FlatList 
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard 
            name={item}
            onRemove={() => {}}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty
            message="Não há pessoas nesse time."
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
          players.length > 0 && { marginBottom: 12 }
        ]}
      />

      <Button 
        description="Remover turma" 
        type="SECONDARY"  
      />
    </Container>
  );
}