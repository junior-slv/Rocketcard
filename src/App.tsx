import React from 'react';
import { StyledContainer, StyledButton, LeftMenu, RightMenu, Card} from './components/StyledComponents'

function App() {
  return (
    <StyledContainer>   
      <LeftMenu>
        <Card>

          </Card>
      </LeftMenu>
      <RightMenu>
        <StyledButton> Gerar background </StyledButton>
      </RightMenu>
  </StyledContainer>
  );
}

export default App;
