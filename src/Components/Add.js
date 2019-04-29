import React,{Component} from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import { addBooks, updateBooks } from "../Action/product/";
import {editBooks}  from '../Action/edit/';


class Add extends Component{
    constructor(props){
        super(props);
        this.state = {
            bookName: '',
            Author: '',
            Description: ''
        };
    };
    componentWillUpdate(newProps){
        let {edit} = this.state;
        if(
            newProps.edit!== null && 
            edit == null
        ){
            this.setState({
                bookName: newProps.edit.bookName,
                Author: newProps.edit.Author,
                Description: newProps.edit.Description
            });
        }

    };
    onChange(f, {target}){
        this.setState({
            [f]: target.value
        });
    };
    onAddBook(e){
        e.preventDefault();
        let {bookName,Author,Description} = this.state,
            {edit} = this.props;
        if(!bookName || !Author || !Description){
            alert('Please fill the all value ');
        }
        if(edit){
            this.props.updateBooks({
                id: edit.id,
                bookName, Author, Description
            });
        } else{
            this.props.onAddBook({
                bookName: bookName,
                Author: Author,
                Description: Description
            });
        }
        this.setState({
            bookName: '',
            Author: '',
            Description: ''
        });
        ReactDOM.findDOMNode(this.refs.bookName).focus();

    };
    render(){
        let {bookName,Author,Description} = this.state,
            {edit} = this.props;
        return(
            <form onSubmit= {this.onAddBook.bind(this)}>
            <div className={'form-row'}>
                <div className={'form-group col-md-5'}>
                    <input 
                        ref ={'bookName'}
                        autoFocus
                        value={bookName}
                        type={'text'}
                        placeholder={'Book Name'}
                        onChange={this.onChange.bind(this, 'bookName')}
                        className={'form-control'}
                    />
                </div>
            </div>
            <div className={'form-row'}>
                <div className={'form-group col-md-5'}>
                    <input 
                        ref ={'Author'}
                        autoFocus
                        value={Author}
                        type={'text'}
                        placeholder={'Book Author Name'}
                        onChange={this.onChange.bind(this, 'Author')}
                        className={'form-control'}
                    />
                </div>
            </div>
            <div className={'form-row'}>
                <div className={'form-group col-md-8'}>
                    <input 
                        ref ={'Description'}
                        autoFocus
                        value={Description}
                        type={'text'}
                        placeholder={'Description'}
                        onChange={this.onChange.bind(this, 'Description')}
                        className={'form-control'}
                    />
                </div>
                <div className={'form-group col-md-2'}>
                <button className={'btn btn-primary btn-block'}
                type={'submit'}>
                {edit ?'Update Book':'Add Book'}
                </button>
                </div>
            </div>
            </form>
        );
    }
};
export default connect((state) =>{
        return{
            edit: state.edit
        };
    },
    {
        updateBooks,
        onAddBook: addBooks,
        onEditBook: editBooks
    }
)(Add);