const initialState = [
  {
    id: 1,
    name: "ahoy",
    description: "jgdflhjoirdgfhjoidgfj ",
    qr: "./qr/qr1",
    img: "./img/menu3.jpg"
  },
  {
    id: 2,
    name: "Ahoy",
    description: "jgdflhjoirdgfhjo",
    qr: "./qr/qr2",
    img: "./img/menu3.jpg"
  },
  {
    id: 3,
    name: "Yummy",
    description: "jgdflhjoirdgfhjoidgf",
    qr: "./qr/qr3",
    img: "./img/menu4.jpg"
  },
  {
    id: 4,
    name: "Yummy",
    description: "jgdflhjoirdgfhjoidgf",
    qr: "./qr/qr3",
    img: "./img/menu1.jpg"
  },
  {
    id: 5,
    name: "Yummy",
    description: "I like the place. It's good for quick lunch or easy meal. 🏖️🍜🍜\nLike the pop up concept and the restaurant design. 🌤️\n👸 Good service. 💕 They quickly change my food when I told them that ",
    qr: "./qr/qr3",
    img: "./img/menu1.jpg"
  },
  {
    id: 6,
    name: "Yummy",
    description: "jgdflhjoirdgfhjoidgf",
    qr: "./qr/qr3",
    img: "./img/menu4.jpg"
  },
];





export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESET_menu":
      state = [{ name: null, description: null, qr: null, img: null }];
      return state;
    default:
      return state;
  }
};
