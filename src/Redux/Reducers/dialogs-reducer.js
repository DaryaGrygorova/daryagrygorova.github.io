const ADD_MESS = 'DIALOGS/ADD_MESS';

let initialState = {
  ContactsData: [
    { name: 'Sara Connor', id: 'Connor' },
    { name: 'Lisa Fahrenheit', id: 'Fahrenheit' },
    { name: 'Rose Friedman', id: 'Friedman' },
    { name: 'Frank Sinatra', id: 'Sinatra' },
    { name: 'John Silver', id: 'Silver' },
    { name: 'Tomas Fisher', id: 'Fisher' },
    { name: 'Lili Walker', id: 'Walker' }
  ],
  MessData: [
    { id: 1, message: 'Hello!', name: 'Frank Sinatra', time: '15:20' },
    { id: 2, message: 'It\'s my first private chat', name: 'Frank Sinatra', time: '15:21' },
    { id: 3, message: 'It\'s my first message!', name: 'Frank Sinatra', time: '15:21' },
    { id: 4, message: 'It\'s my first message!', name: 'Frank Sinatra', time: '15:22' },
    { id: 5, message: 'It\'s my first message!', name: 'Frank Sinatra', time: '15:22' },
    { id: 6, message: 'It\'s my first message!', name: 'Frank Sinatra', time: '15:22' },
    { id: 7, message: 'It\'s my first message!', name: 'Frank Sinatra', time: '15:22' },
    { id: 8, message: 'It\'s my first message!', name: 'Frank Sinatra', time: '15:22' },
    { id: 9, message: 'HaHaHa!!! I like it!!', name: 'Frank Sinatra', time: '15:24' }
  ],
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_MESS:
      let newMess = action.newMessText;

      return {
        ...state,
        MessData: [...state.MessData, { id: 10, name: 'Frank Sinatra', message: newMess, time: '15:58' }]
      };

    default: return state;
  }
};

export const addMessActionCreator = (newMessText) => ({type: ADD_MESS, newMessText});