import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {  Link, useParams } from "react-router-dom";
import QRCode from "react-qr-code";

import "../../../css/navbar.css"
import "../../../css/View.css"

const View = ({ menus }) => {
  const { id } = useParams();
  const currentMenu = menus.find(
    (menu) => menu.id === parseInt(id)
  );

  useEffect(() => {
    document.title = "ร้าน " + (currentMenu.name)
    setName(currentMenu.name);
    setDescription(currentMenu.description);
    setQr(currentMenu.qr);
    setImg(currentMenu.img);
  }, [currentMenu]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [qr, setQr] = useState("");
  const [img, setImg] = useState("");

  const download = e => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {}
    })
      .then(response => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.svg"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
      
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    
  };

  return (


    <div>

        {currentMenu ? (
          <form onSubmit={handleSubmit}>
             <div className="header">
              <h1>ร้าน {name}</h1>
            </div>

            <div className="row">

              <div className="col-6 col-s-12 menu midp" >
                <ul>

                  <div className="showtext"><p style={{ fontWeight: 'bold' }}>ชื่อ :</p> <p>{name} </p></div>
                  <div className="showtext"><p style={{ fontWeight: 'bold' }}>Description :</p> <p style={{ display: 'block' }}>{description} </p></div>
                  <div className="showtext"><p style={{ fontWeight: 'bold' }}>ที่อยู่ไฟล์รูป :</p> <p>{img} </p></div>



                </ul>
              </div>
              <div className="col-6 col-s-12">

                <div className="flex-parentbt ">
                  <img style={{maxWidth:'40%'}}
                    src={"http://localhost:3000" + img}
                    onChange={(e) => setImg(e.target.value)}
                  />
                  <QRCode
                value={"http://localhost:3000/" + id}
                size={420}
                level={"H"}
                includeMargin={true}
              />
                </div>

                <div className="flex-parentbt  jc-center " style={{ marginTop: '15px' }}>
                  <a className="button button1" type="button" href={"http://localhost:3000" + qr}
                    download
                    onClick={e => download(e)}> โหลด QR-CODE</a>
                  <Link to={`/admin`}><button className="button button3">กลับหน้าผู้ดูแล</button></Link>

                </div>
              </div>

            </div>
          </form>
        ) : (
          <h1 className="text-center">No menu Found</h1>
        )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  menus: state,
});
const mapDispatchToProps = (dispatch) => ({
  updatemenu: (data) => {
    dispatch({ type: "UPDATE_menu", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
