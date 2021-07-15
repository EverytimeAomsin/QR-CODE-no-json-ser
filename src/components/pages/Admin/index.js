import React ,{useEffect} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavbarAdmin from "../../Navbar/Navbar1"

import "../../../css/home.css"

const Admin = ({menus }) => {
  useEffect(() => {
    document.title = "QR-Admin"})
  return (
    <div>
      <NavbarAdmin />
        {menus.map((menu) => (
                 <div className="column">
                 <div className="content card" >
                 <Link   to={`/admin/${menu.id}`} ><img className="img-fluid "  src={menu.qr} /></Link>
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
