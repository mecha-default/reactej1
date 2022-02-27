import './App.scss';
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";





const App= ()=>{
return(
<div className='contenedor'>
<Nav />
<Main>
  <Button></Button>
  <Button></Button>
</Main>
<Footer />
</div>
)
}

export default App;

