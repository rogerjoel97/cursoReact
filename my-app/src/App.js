
import './App.css';

function HelloWorld(props) {
  console.log(props)
  return(
    <div id = 'hello'>{props.mytext}</div>
  )
}

function App() {
  return (
    <div>
      This is my component: <HelloWorld mytext = "Hello Fazt"/> 
      <HelloWorld mytext = "Hola mundo"/> 
      <HelloWorld mytext = "hello!"/> 
    </div>
  );
}

export default App;
