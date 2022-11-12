import { useState } from 'react';
import { StyledContainer, StyledButton, CardBackground, LeftMenu, RightMenu, Card, StyledTitle, StyledImg} from './components/StyledComponents'
import axios from "axios";
import followersicon from './assets/followers.svg';
import followingicon from './assets/following.svg';
import locationicon from './assets/location.svg';
import repositoryicon from './assets/repository.svg';

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
              <p><img src={followersicon}/> {followers} Seguidores</p>
              <p><img src={followingicon}/> {following} Seguindo</p>
              <p><img src={repositoryicon}/> {publicrepos} Repositórios</p>
              <p><img src={locationicon}/> {location}</p>
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

