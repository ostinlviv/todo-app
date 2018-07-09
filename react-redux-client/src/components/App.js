// ./react-redux-client/src/components/App.js
import React from 'react';
import { Navbar,Nav,NavItem,Glyphicon,Button,Modal } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import TodoForm from './TodoForm';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.hideShowModal = this.hideShowModal.bind(this);
    this.toggleAddTodo = this.toggleAddTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  toggleAddTodo(e){
    e.preventDefault();
    this.props.mappedToggleAddTodo();
  }
  
  hideShowModal(){
    this.props.mappedToggleAddTodo();
  }

  addTodo(e){
      e.preventDefault();
      const form = document.getElementById('addTodoForm');
      if(form.todoText.value !== ""  && form.todoDesc.value !== ""){
        const data = new FormData();
        data.append('todoText', form.todoText.value);
        data.append('todoDesc', form.todoDesc.value);
        this.props.mappedAddTodo(data);
      form.reset();
      this.hideShowModal();
      }
      else{
        return ;
      }
  }

  render(){
    const appState = this.props.mappedAppState;
    return(
      <div>
      <Navbar inverse  collapseOnSelect className="customNav" >
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/#">TODO APP</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <LinkContainer to={{ pathname: '/', query: {  } }}>
          <NavItem eventKey={1}>Log out</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <LinkContainer to={{ pathname: '/', query: {  } }}>
          <NavItem eventKey={1}>User</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <div className="title"><p className="titleText"><Glyphicon glyph="tree-deciduous" /> ToDo List</p></div>
  <h3 className="centerAlign">
    <Button onClick={this.toggleAddTodo} className="addBtn"><Glyphicon glyph="plus" /> CREATE TASK</Button>
  </h3>
  <div className="container">
    {this.props.children}
  </div>
      <Modal
      show={appState.showAddTodo}
      onHide={this.hideShowModal}
      container={this}
      >
      <Modal.Body>
      <div className="col-md-12">
        <TodoForm addTodo={this.addTodo} hideShowModal={this.hideShowModal}/>
      </div>
      </Modal.Body>
    </Modal>
  </div>
    );
  }
}
