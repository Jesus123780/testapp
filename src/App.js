import logo from './logo.svg'
import './App.css'
import Button from './Button/button'
import Card from './Card/card';

function App() {
  const texto = 'Hola Mundo'
  const array = [
    {
      id: 1,
      name: 'Juan',
      age: 20
    },
    {
      id: 2,
      name: 'Pablo',
      age: 15
    },
    {
      id: 2,
      name: 'Tasha',
      age: 15
    },
    {
      id: 2,
      name: 'Yunicua',
      age: 15
    },
    {
      id: 2,
      name: 'Tairon',
      age: 15
    },
    {
      id: 2,
      name: 'Somo tus amigos',
      age: 15
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {array.map((item) => { 
          return <Button texto={item.name} ></Button>
        })}

      </header>
    </div>
  );
}

export default App;
