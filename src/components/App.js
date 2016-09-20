import React from 'react';
import CreateTodo from './Create-Todo'
import TodosLists from './TodosList'

const todos = [
  {
    task       : 'make React Tutorial',
    isCompleted: false
  },
  {
    task       : 'eat dinner',
    isCompleted: true
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: todos
    };
  }


  render() {
    return (
      <div>
        <h1>Todos App</h1>
        <CreateTodo createTask={this.createTask.bind(this)}/>
        <TodosLists todos={this.state.todos}/>
      </div>
    );
  }

  createTask(task) {
    console.log('hi task ', task);
    this.state.todos.push({
      task: task,
      isCompleted:false
    });
    this.setState({
      todo: this.state.todos
    })
  }
}

export default App

