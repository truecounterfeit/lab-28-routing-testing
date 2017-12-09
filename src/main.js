'use strict';

import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import uuid from 'uuid';

import noteCreateFrom from './components/noteCreateForm.js'
import noteItem from './components/noteItem.js'
import noteList from './noteList.js'

class App extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
          id: uuid,
          editing: false,
          completed: false,
          content: this.state
      }
      this.app = this.app.bind(this);
    }

    app() {
      return {
        state: this.state,
        setState: this.setState.bind(this),
        showErrors: true
      }
    }

    render() {
      return (
        <div>


        </div>
      )
    }

}

ReactDom.render(<App />, document.getElementById('root'));
