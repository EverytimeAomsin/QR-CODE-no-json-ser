const initialState = require('./menu.json');

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
   
    default:
      return state;
  }
};
/*  case "RESET_menu":
state = [{ name: "null", description: "null", qr: "null", img: "null" }];
      
      
return state; */