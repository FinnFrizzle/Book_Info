import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
  render() {
    if (!this.props.book) {
      return <div> Please choose a book! </div>
    }


    return (
      <div>
        <h3> Details for: </h3>
        <h4> Title: </h4>
        <div> {this.props.book.title} </div>
        <h4> Number: </h4>
        <div> {this.props.book.number} </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps) (BookDetail)
