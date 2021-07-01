import { Skills } from './components/Skills';
import { MiTrabajo } from './components/MiTrabajo';
import { Contacto } from './components/Contacto';
import { Header } from './components/Header';
import { MainContainer } from './styles';
import { AboutMe } from "./components/AboutMe";



function App() {
 
  return (
    <MainContainer>
      <Header />
      <AboutMe dark={true} id="about"/>
      <Skills  dark={false} id="skills"/>
      <MiTrabajo dark={true} id="work"/>
      <Contacto dark={false} id="contact"/>
    </MainContainer>
  );
}


export default App;
