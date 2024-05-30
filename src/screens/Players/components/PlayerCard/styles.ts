import { MaterialIcons } from '@expo/vector-icons';
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  width: 100%;
  
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};

  flex-direction: row;

  align-items: center;

  border-radius: 6px;

  padding: 0 0 0 12px;

  margin-bottom: 12px;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200
}))`
  margin-right: 4px;
`;

export const Name = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

