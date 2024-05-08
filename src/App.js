import './App.css';
import axios from "axios";

function App() {
  const hello = async () => {
    const res = await axios.get("http://localhost:5000/hello");
    alert(res.data); 
  };

  return (
    <div className="App">
      <div>
        <button onClick={hello}>Click Here!</button>
      </div>
    </div>
  );
}

export default App;
