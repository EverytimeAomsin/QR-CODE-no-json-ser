import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link ,useLocation } from "react-router-dom";

import QRCode from "react-qr-code";

import "../../../css/home.css"

const Admin = ({ menus }) => {
  const currentRoute= window.location.pathname
  useEffect(() => {
    document.title = "QR-Admin"
    console.log(currentRoute);
  })
  return (
    <div>
      <h1 className="head-center">QR-Code</h1>
      {menus.map((menu,menus) => (
        <div className="column" key={menus}>
          <div className="contentH cardH shadow" >

            <Link to={'/admin/'+`${menu.id}`} >
              <QRCode className ="qr-img "
                value={"https://vana-qrcode.web.app/" + menu.id}
                size={300}
                level={"H"}
               
              />
            </Link>
            <Link to={'/admin/'+`${menu.id}`} style={{ textDecoration: "none" }}><h2 >{menu.name}</h2></Link>
            <Link to={'/admin/'+`${menu.id}`} style={{ textDecoration: "none" }}><p>{menu.description}</p></Link>
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
