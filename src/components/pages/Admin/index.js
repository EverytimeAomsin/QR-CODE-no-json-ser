import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../../css/home.css"

const Admin = ({menus }) => {
  return (
    <div>
        {menus.map((menu) => (
                 <div className="column">
                 <div className="content card" >
                 <Link   to={`/${menu.id}`} ><img className="img-fluid "  src={menu.qr} /></Link>
                   <Link  to={`/${menu.id}`} style={{textDecoration:"none"}}><h2 >{menu.name}</h2></Link>
                   <Link  to={`/${menu.id}`} style={{textDecoration:"none"}}><p>{menu.description}</p></Link>
                 </div>
               </div>
                ))}
      </div>
          
  );
};

const mapStateToProps = (state) => ({
  menus: state,
});



export default connect(mapStateToProps)(Admin);
