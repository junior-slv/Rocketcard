import { useState } from 'react';
import { Container, 
  StyledButton, CardBackground,
  LeftMenu, RightMenu, 
  Card, P, Infos, GlobalStyle,
  AvatarIMG, Iconsvg} 
  from './components/StyledComponents'
import axios from "axios";
import followersicon from './assets/followers.svg';
import followingicon from './assets/following.svg';
import locationicon from './assets/location.svg';
import repositoryicon from './assets/repository.svg';

type GITHUBResponse = {
  name: string;
  avatar_url: string;
  following: string;
  followers: string;
  public_repos: string;
  location: string;
};
function App() {

  const [userName, setUserName] = useState("");
  const [name, setName] = useState("Aguardando...");
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
    <><GlobalStyle />
    <Container>
      <LeftMenu>
        <CardBackground>
          <Card>
            <P>{name}</P>
            <AvatarIMG  src={avatarURL} />
            <Infos>
              <P><Iconsvg src={followersicon} alt='icon'/> {followers} Seguidores</P>
              <P><Iconsvg src={followingicon} alt='icon'/> {following} Seguindo</P>
              <P><Iconsvg src={repositoryicon} alt='icon'/> {publicrepos} Repositórios</P>
              <P><Iconsvg src={locationicon} alt='icon'/> {location}</P>
            </Infos>
          </Card>
        </CardBackground>
      </LeftMenu>
      <RightMenu>
        <P>Insira o usuário do Github</P>
        <input
          type="text"
          placeholder="Digite um username"
          onChange={(e) => setUserName(e.target.value)} />
       <StyledButton onClick={handleSearch}>Buscar</StyledButton>
      </RightMenu>
    </Container></>
  
  )
  ;
}

export default App

