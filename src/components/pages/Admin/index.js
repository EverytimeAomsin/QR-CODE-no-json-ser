import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavbarAdmin from "../../Navbar/Navbar1"
import QRCode from "react-qr-code";

import "../../../css/home.css"

const Admin = ({ menus }) => {
  useEffect(() => {
    document.title = "QR-Admin"
  })
  return (
    <div>
      <NavbarAdmin />
      {menus.map((menu) => (
        <div className="column">
          <div className="content card" >

            <Link to={`admin/${menu.id}`} style={{ textDecoration: "none" }}>
              <QRCode classname ="qr-img "
                value={"http://localhost:3000/" + menu.id}
                size={300}
                level={"H"}
                includeMargin={true}
              />
            </Link>
            <Link to={`admin/${menu.id}`} style={{ textDecoration: "none" }}><h2 >{menu.name}</h2></Link>
            <Link to={`admin/${menu.id}`} style={{ textDecoration: "none" }}><p>{menu.description}</p></Link>
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
