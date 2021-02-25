import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'


//Components
import tasks from './sample/tasks.json';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm'
import Post from './components/Post'
console.log(tasks)
class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title,description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length 
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTasks = (id) => {
    const newTasks =  this.state.tasks.filter(task => task.id !== id)
    this.setState({
      tasks: newTasks
    })
  }

  checkDone = (id) => {
    const newTasks = this.state.tasks.map(tasks => {
      if (tasks.id === id){
        tasks.done = !tasks.done
      }
      return tasks;
    })

    this.setState({tasks: newTasks})

  }
  
  render(){
    return (
      <div>
        <Router>
          <Link to = "/">Home</Link>
          <br/>
          <Link to = "/posts">Post</Link>
          <Route exact path = "/" render = {() => {
            return <div>
              <TaskForm addTask = {this.addTask} />
              <Tasks tasks = {this.state.tasks} 
                deleteTasks = {this.deleteTasks}
                checkDone = {this.checkDone} />
            </div>
            }}>
          </Route>
          <Route path = "/posts" component = {Post} />
        </Router>       
      </div>
    ) 
   }
}

export default App;




/* function HelloWorld(props) {
  console.log(props)
  return(
    <div id = 'hello'>
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  )
} */

/* class HelloWorld extends React.Component {

  state = {
    show: true
  }
  toggleShow = () => {
    this.setState({show: !this.state.show})
  }
  render() {
    if (this.state.show){
      return (
        <div id = "hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick = { this.toggleShow}>Toggle Show</button>
        </div>
      );
    } else {
      return(
        <h1> 
          No hay elementos
          <button onClick = {this.toggleShow}>
            toggle Show
          </button>
        </h1>
        
      );
    }
    
  }
}

function App() {
  return (
    <div>
      This is my component: 
      <HelloWorld mytext = "Hello Fazt" subtitle = "Cualquier cosa"/> 
      <HelloWorld mytext = "Hola mundo" subtitle = "Otra Cosa"/> 
      <HelloWorld mytext = "hello!" subtitle = "cualquier otra cosa"/> 
    </div>
  );
} 
 */
