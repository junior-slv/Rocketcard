import React, { useState, useEffect } from 'react';
import { StyledContainer, StyledButton, CardBackground, LeftMenu, RightMenu, Card, StyledTitle, StyledImg} from './components/StyledComponents'
import api from './services/api';
import followers from './assets/followers.svg';
import following from './assets/following.svg';
import repository from './assets/repository.svg';
import location from './assets/location.svg';
import Enviar from './Scripts/valor';
import {texto} from './Scripts/valor';

function App() {

  const [user, setUser] = useState()
  useEffect(() => {
    api
      .get(`/users/junior-slv`)
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  return (
    
    <StyledContainer>  

      <LeftMenu>
        <CardBackground>
 
          <Card>
            <StyledTitle>{user?.login}</StyledTitle>
            <img id='useravatar'src={user?.avatar_url}/>
            <div className='infos'>
              <p><img src={followers}/> {user?.followers} Seguidores</p>
              <p><img src={following}/> {user?.following} Seguindo</p>
              <p><img src={repository}/> {user?.public_repos} Repositórios</p>
              <p><img src={location}/> {user?.location}</p>
            </div>   
          </Card>
        </CardBackground>
      </LeftMenu>
      <RightMenu>
      <form action="">
  <input type="text" id="name" name="name"/>
  <input type="submit" onClick={Enviar} value="Enviar"/>
</form>
        <StyledButton> Gerar background </StyledButton>
      </RightMenu>
  </StyledContainer>
  
  )
  ;
}

export default App;
