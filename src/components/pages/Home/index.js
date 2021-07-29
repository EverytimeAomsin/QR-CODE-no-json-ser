import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../../../css/home.css"

const Home = ({menus }) => {
  return (
    <>
     <h1 className="head-center " >ร้านค้าที่เปิดให้บริการ</h1>
    
       {menus.map((menu , menus) => ( 
       
                 <div className="column" key={menus}>
                 <div className="contentH cardH shadowv" >
                 <Link  title="ภาพ"  to={`/${menu.id}`} target="_blank"><img className="img-fluid " alt=""  src={menu.img} /></Link>
                   <Link title="ชื่อหัวข้อ"  to={`/${menu.id}`} style={{textDecoration:"none"}}><h2>{menu.name}</h2></Link>
                   <Link  title="รายละเอียด" to={`/${menu.id}`} style={{textDecoration:"none"}}><p>{menu.description}</p></Link>
                 </div>
               </div>
                ))}
     </>
          
  );
};

const mapStateToProps = (state) => ({
  menus: state,
});



export default connect(mapStateToProps)(Home);
