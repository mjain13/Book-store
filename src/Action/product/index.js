// Creating the Function

function addBooks(payload){
    return{
        type: 'ADD_BOOK',
        payload
    };
};
function updateBooks(payload){
    return{
        type: 'UPDATE_BOOKS',
        payload
    }
};

export {
    addBooks,       //exporting the addBook function
    updateBooks
};