import React from 'react';
import { Component } from 'react'

import BookList from '../containers/Book_List'
import BookDetail from '../containers/Book_Detail'

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
