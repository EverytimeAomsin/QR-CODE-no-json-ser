const initialState = [
  {
    id: 1,
    name: "Yummy",
    description: "เป็นร้านอาหารบรรยากาศสบาย อาหารส่วนใหญ่เน้นเป็นเมนูพื้นถิ่นอีสาน และเมนูดัดแปลงเป็นส่วนใหญ่ ด้วยเจ้าของเป็นคนชอบดัดแปลงอาหารจานใหม่เพื่อนำเสนอความอร่อยต่อให้กับ ลูกค้าจะได้ไม่เกิดความจำเจ ",
    qr: "./qr/qr1.svg",
    img: "./img/menu1.jpg"
  },
  {
    id: 2,
    name: "Fubuki",
    description: "มีชื่อเสียงด้านการทำขนมจีนที่อร่อยที่สุดของนครราชสีมา ด้วยรสชาติเป็นที่ถูกปากถูกใจแก่ผู้บริโภค สำหรับเมนูนั้นไม่ได้มีแค่ขนมจีนน้ำยาเท่านั้น แต่ยังมีเมนูอีกหลากหลายให้ชวนลิ้มลองกัน อาทิ ส้มตำโคราช,หมูสะเต๊ะ,ผัดหมี่โคราช,ยำแหนมคลุก,ลาบไก่ ",
    qr: "./qr/qr2.svg",
    img: "./img/menu2.jpg"
  },
  {
    id: 3,
    name: "Pekora",
    description: "บรรยากาศร้านเป็นบรรยากาศเปิดโล่ง มีที่จอดรถพอสมควร ช่วงหัวค่ำคนเยอะเป็นปกติ เมนูในร้านนี้ก็เป็นแนวอาหารไทยแบบร้านข้าวต้ม แต่ก็เลือกทานข้าวสวยได้ ร้านนี้ช่วงเย็นเป็นต้นไปคนค่อนข้างมาก พิสูจน์ได้จากใครเดินทางผ่านไปมาก็เลือกแวะร้านนี้",
    qr: "./qr/qr3.svg",
    img: "./img/menu3.jpg"
  },
  {
    id: 4,
    name: "Gura",
    description: "นั่งทานอาหารในแพบรรยากาศดี เสิร์ฟอาหารโดยเรือ พายเรือขายอาหารท้องถิ่นเช่น ส้มตำ ผัดหมี่ ไส้กรอกอีสาน นอกจากนี้ยังมีของหวานเช่น ปลากิมไข่เต่า วุ้นมะพร้าว ในส่วนของเมนูอาหาร เน้นเมนูปลา เสิร์ฟอาหารจานใหญ่ ทานได้อิ่มทั้งครอบครัว",
    qr: "./qr/qr4.svg",
    img: "./img/menu4.jpg"
  },
  {
    id: 5,
    name: "amelia",
    description: "I like the place. It's good for quick lunch or easy meal. 🏖️🍜🍜\nLike the pop up concept and the restaurant design. 🌤️\n👸 Good service. 💕 They quickly change my food when I told them that ",
    qr: "./qr/qr5.svg",
    img: "./img/menu5.jpg"
  },
  {
    id: 6,
    name: "Ina",
    description: "ภายในจะมีห้องปรับอากาศตกแต่งอย่างสวยงาม ด้านนอกจะจัดเป็นสวนอาหารล้อมรอบร้าน ดูเป็นธรรมชาติมาก บรรยากาศดี กว้างขวาง มีบึงขนาดใหญ่อยู่ภายในบริเวณร้านพร้อมสะพานไม้ทางเดินที่ทอดยาวข้ามผ่านบึง เข้าไปในตัวร้าน ดูสวยงามเก๋ไก๋",
    qr: "./qr/qr6.svg",
    img: "./img/menu6.jpg"
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
