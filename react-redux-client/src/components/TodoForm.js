// ./react-redux-client/src/components/TodoForm.js
import React from 'react';
import { FormGroup,FormControl,Button } from 'react-bootstrap';

const TodoForm = (props) => {
  
  return (
    <form className="form form-horizontal" id="addTodoForm" onSubmit={props.addTodo}>
      <div className="row">
        <div className="col-md-12">
          <FormGroup>
            <FormControl
              type="text" placeholder="title to 15 charachters"
              name="todoText"
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <FormControl
              componentClass="textarea" placeholder="description"
              name="todoDesc"
            />
          </FormGroup>
        </div>
      </div>
      <FormGroup>
        <Button className="submitBtn" type="submit" bsStyle="info">CREATE</Button>
        <Button onClick={props.hideShowModal} bsStyle="success">Cancel</Button>
      </FormGroup>
    </form>
  );
}

export default TodoForm;
