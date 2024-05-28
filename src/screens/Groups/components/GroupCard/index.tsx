import { TouchableOpacityProps } from "react-native";
import { Container, UsersIcon, Name } from "./styles";

type Props = TouchableOpacityProps & {
  name: string;
}

export function GroupCard({ name, ...rest } :Props) {
  return (
    <Container {...rest}>
      <UsersIcon />
      <Name>{name}</Name>
    </Container>
  );
}