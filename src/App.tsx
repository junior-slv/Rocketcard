import React from 'react';
import { StyledContainer, StyledButton, CardBackground, LeftMenu, RightMenu, Card} from './components/StyledComponents'

function App() {
  return (
    <StyledContainer>   
      <LeftMenu>
        <CardBackground>
          <Card>
            
          </Card>
        </CardBackground>
      </LeftMenu>
      <RightMenu>
        <StyledButton> Gerar background </StyledButton>
      </RightMenu>
  </StyledContainer>
  );
}

export default App;
