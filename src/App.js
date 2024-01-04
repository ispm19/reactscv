import Nav from './components/Nav';
import Banner from './components/Banner';
import Projects from './components/Projects';
import {NextUIProvider} from "@nextui-org/react";
import './App.css';

const App = () => {
  return (
    <NextUIProvider>
    <>

    <Nav />
    <Banner />
    <Projects />
    </>
    </NextUIProvider>
  
  );
}

export default App;
