import _ from 'lodash';
import React from 'react';
import TodosListsHeader from './TodosListsHeader';
import TodosListItem from './TodosListItem';

class TodosList extends React.Component {
  renderItems() {
  const props = _.omit(this.props, 'todos');

    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo}  {...props}/>);
    //{...todo} is like task ={todo.task} isCompleted={todo.isCompleted}
  }
  render() {

    return (
      <table>
        <TodosListsHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    )
  }
}

export default TodosList;