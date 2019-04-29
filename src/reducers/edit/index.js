export default function(state = null, action) {

    switch (action.type) {

        case 'EDIT_BOOKS':
          return action.payload;
        
        case 'UPDATE_BOOKS':
          return null;

        default: {
          return state;
        }

    };
};