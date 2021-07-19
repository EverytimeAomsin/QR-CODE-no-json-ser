const initialState = require('./menu.json');

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESET_menu":
      state = [{id:null, name: null, description: null, qr: null, img: null }];
      return state;
    default:
      return state;
  }
};
