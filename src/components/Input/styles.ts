import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  padding: 16px;

  border-radius: 6px;

  background-color: ${({ theme }) => (theme.COLORS.GRAY_700)};
  color: ${({ theme }) => (theme.COLORS.WHITE)};

  font-size: ${({ theme }) => (theme.FONT_SIZE.MD)}px;
  font-family: ${({ theme }) => (theme.FONT_FAMILY.REGULAR)};
`;