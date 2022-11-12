import React, { useState, useEffect } from 'react';
import { StyledContainer, StyledButton, CardBackground, LeftMenu, RightMenu, Card, StyledTitle, StyledImg} from './components/StyledComponents'
import axios from "axios";
type GITHUBResponse = {
  name: string;
  avatar_url: string;
  bio: string;
  following: string;
  followers: string;
  public_repos: string;
  location: string;
};
function App() {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("Aguardando...");
  const [bio, setBio] = useState("Aguardando...");
  const [avatarURL, setAvatarURL] = useState("Aguardando...");
  const [following, setFollowing] = useState("Aguardando...");
  const [followers, setFollowers] = useState("Aguardando...");
  const [publicrepos, setPublicrepos] = useState("Aguardando...");
  const [location, setlocation] = useState("Aguardando...");

  const handleSearch = () => {
    axios
      .get<GITHUBResponse>(`https://api.github.com/users/${userName}`)
      .then((res) => {
        setName(res.data.name);
        setBio(res.data.bio);
        setAvatarURL(res.data.avatar_url);
        setFollowing(res.data.following);
        setFollowers(res.data.followers);
        setPublicrepos(res.data.public_repos);
        setlocation(res.data.location);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <StyledContainer>  
      <LeftMenu>
        <CardBackground>
          <Card>
            <StyledTitle>{name}</StyledTitle>
            <img id='useravatar'src={avatarURL}/>
            <div className='infos'>
              <p><img /> {followers} Seguidores</p>
              <p><img/> {following} Seguindo</p>
              <p><img/> {publicrepos} Repositórios</p>
              <p><img/> {location}</p>
            </div>   
          </Card>
        </CardBackground>
      </LeftMenu>
      <RightMenu>

      <input
              type="text"
              placeholder="Digite um username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>

        <StyledButton> Gerar background </StyledButton>
      </RightMenu>
  </StyledContainer>
  
  )
  ;
}

export default App

