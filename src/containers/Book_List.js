import React, {Component} from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index.js';
import {bindActionCreators} from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
        return (
          <li
            key={book.title}
            onClick={() => this.props.selectBook(book)} 
            className="list-group-item">
              {book.title}
          </li>
      );
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // whatever returned, will come back as props
  // inside of bookList
  return {
    books: state.books
  }
}

// anything returned to this function, will end up
// as props on the BookList container
function mapDispatchToProps(dispatch) {
  // when ever the selectBook is called, the result should be passed
  // to all reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

// promote BookList from a component, to a container - it needs to know about
// this new dispatch-method, selectBook. Make it avaible as prop.
export default connect(mapStateToProps, mapDispatchToProps) (BookList)
