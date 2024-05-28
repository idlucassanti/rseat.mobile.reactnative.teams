import { TouchableOpacityProps } from "react-native";
import { Container, UsersIcon, Name } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
}

export function GroupCard({ title, ...rest } :Props) {
  return (
    <Container {...rest}>
      <UsersIcon />
      <Name>{title}</Name>
    </Container>
  );
}