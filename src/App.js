
import './App.css';
import ChooseUs from './Components/ChooseUs/ChooseUs';
import Description from './Components/Description/Description';
import Introduction from './Components/Introduction/Introduction';
import Practices from './Components/Practices/Practices';
import { Navbar } from './Components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Description/>
      <Introduction/>
      <ChooseUs/>
      <Practices/>
      
    </div>
  );
}

export default App;
