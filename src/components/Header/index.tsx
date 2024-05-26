import { Container, Logo, BackButton, BackIcon } from "./styles";
import logoImg from '@assets/logo.png';

type Props = {
  showButtonBack?: boolean;
}

export function Header({ showButtonBack = false } : Props) {
  return (
    <Container>
      { 
        showButtonBack && 
        <BackButton>
          <BackIcon/>
        </BackButton>
      }
      
      <Logo source={logoImg}/>
    </Container>
  );
}