import React,{Component} from 'react';
import {connect} from 'react-redux';

import { editBooks } from '../Action/edit/';
import { addBooks } from '../Action/product';

// import {addBooks} from '../reducers/product/';

class ListBook extends Component{
    onEdit(Book){
        this.props.onEdit(Book);
    };
    render(){
        let {Book} = this.props;
        return(
            <li className = {`list-group-item`}>
                <span className={'mt-1 float-left'}>
                    {Book.bookName}
                </span>
                <button
                    onClick={this.onEdit.bind(this, Book)}
                    type={'button'}
                    className={'btn btn-dark btn-sm float-right'}>
                    Edit
                </button>
            </li>
        );

    }
};
class List extends Component {
    render() {
      console.log(Books);
      let { Books } = this.props;
      debugger;
      
      return (
        <ul
          className={'list-group mb-3'}>
          {/* {Books.map((Book, k)=>
            <ListBook
              key={k}
              Book={Book}
              onEdit={this.props.onEdit}
            />
          )} */}
          {/* {!Books.length && 
            <li className={'list-group-item font-weight-bold text-center'}>
            {'No Books Added!'}
            </li>} */}
        </ul>
      );
    }
  };

  export default connect((state) => {
    return {
      Books: state.Books
    }
  },
  {
    onEdit: editBooks
  }
)(List);