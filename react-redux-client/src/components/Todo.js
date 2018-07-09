// ./react-redux-client/src/components/Todo.js
import React from 'react';
import { Glyphicon } from 'react-bootstrap';

export default class Todo extends React.Component {
  componentDidMount(){
    this.props.mappedfetchTodoById(this.props.params.id);
  }
  static contextTypes = {
    router: () => true,
  }

  render(){
    const todoState = this.props.mappedTodoState;
    return(
      
      <div className="todoDetail">
      <button className="backBtn" onClick={this.context.router.goBack}><Glyphicon glyph="chevron-left" /></button>
        {!todoState.todo && todoState.isFetching &&
          <div>
            <p>Loading todo....</p>
          </div>
        }
        {todoState.todo && !todoState.isFetching &&
          <div>
            <h3 className="centerAlign">{todoState.todo.todoText}</h3>
            <p>{todoState.todo.todoDesc}</p>
          </div>
        }
      </div>
    );
  }
}
