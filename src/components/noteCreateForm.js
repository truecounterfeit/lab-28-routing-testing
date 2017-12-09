'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import uuid from 'uuid';

import noteItem from './components/noteItem.js'
import noteList from './noteList.js'

class noteCreateForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        content: this.state
    }
    this.noteCreateForm = this.noteCreateForm.bind(this);
  }

  note() {
    this.state = {
        id: uuid,
        editing: false,
        completed: false,
        content: this.state
    }
  }

  let newNote = new note();

  submitNote() {
    this.newNote.content = 'pants';
  }


  handleSubmitButton(e) {
    e.preventDefault();
    console.log('submit clicked');
    this.submitNote(e.target.id)
  }

  render(){
    return (
      <button onClick={this.handleSubmitButton}>
      Submit
      </button>
    )
  }


}

export default noteCreateForm;
