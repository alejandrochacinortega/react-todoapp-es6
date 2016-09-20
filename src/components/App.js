import React from 'react';
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
        <h1>Hello, it's me</h1>
        <TodosLists todos={this.state.todos}/>
      </div>
    );
  }
}

export default App

