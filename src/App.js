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
  <Button mensaje=""></Button>
  <Button mensaje=""></Button>

</Main>
<Footer>

</Footer>
</div>
)
}

export default App;
