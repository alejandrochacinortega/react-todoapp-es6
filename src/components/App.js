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
        <CreateTodo/>
        <TodosLists todos={this.state.todos}/>
      </div>
    );
  }
}

export default App

