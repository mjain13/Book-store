export default function(state = [{id: 1, bookName: 'Book-1',Author:'Mayank',description:'this is my first Book'}],action){
    let Books = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'ADD_BOOK': {
            let Book = action.payload;
            Book.id = Math.floor(Math.random() * 100000);
            Books.push(Book);
            // console.log(Books)
            return Books;
        };
        case'UPDATE_BOOKS':{
            let Book = action.payload;
            Books= Books.map((p)=>{
                if(p.id === Book.id){
                    Book.bookName = p.bookName;
                    Book.Author = p.Author;
                    Book.description = p.description;
                    return Book;
                }
                return p;
            });
            return Books;
        }
        default:{
            return state;
        }
    };
};