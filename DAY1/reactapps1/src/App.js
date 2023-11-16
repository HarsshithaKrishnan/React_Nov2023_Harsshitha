import './App.css';
import Greetings from "./components/Greetings";
import Helloworld from "./components/Helloworld";
import Helloclass from "./components/Helloclass";
function App()
{
  return(
    <div className="App">
      <Helloworld/>
      <Greetings/>
      <Helloclass/>
    </div>
  );
}
export default App;