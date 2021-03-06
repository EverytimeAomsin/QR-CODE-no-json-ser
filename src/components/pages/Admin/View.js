import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import QRCode from 'qrcode';
import QRCode2 from "react-qr-code";
import NotFound from '../Notfound/index'

import "../../../css/View.css"
import "../../../css/buttons.css"

const View = ({ menus }) => {
  const { id } = useParams();
  try {


    const currentMenu = menus.find(
      (menu) => menu.id === parseInt(id)
    );

    var Qrstyle = {
      errorCorrectionLevel: 'H',
      type: "svg",
      width: 800,
      quality: 0.3,
      margin: 1
    }

    const [text] = useState('http://localhost:3000/' + (currentMenu.id));
    const [imageUrl, setImageUrl] = useState('');

    const generateQrCode = async () => {
      try {
        const response = await QRCode.toDataURL(text, Qrstyle);
        setImageUrl(response);
      } catch (error) {
        console.log(error)
      }
    }




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





    return (


      <div className="contentV  " >




        <h1 className="head-center" >ร้าน {name}</h1>


        <div >

          <div className="col-5V .col-s-12V menu midp " >
            <ul >

              <div className="showtext"><p className="textB ">ชื่อ :</p> <p>{name} </p></div>
              <div className="showtext"><p className="textB">Description :</p> <p className="contentVD">{description} </p></div>
              <div className="showtext"><p className="textB">ที่อยู่ไฟล์รูป :</p> <p>{img} </p></div>



            </ul>
          </div>

          <div className="col-7V .col-s-12V">

            <div className="flex-parentbt ">
              <img className="imgV"
                src={"http://localhost:3000" + img}
                onChange={(e) => setImg(e.target.value)}
              />
              <QRCode2 className="qr-imgV imgV"
                value={"http://localhost:3000/" + id}
                size={300}
                level={"H"}

              />
            </div>

            <div className="flex-parentbt  jc-center " >
              <a className="buttona button1  textB textBS BS2" type="button"   href={imageUrl} download
                onClick={() => generateQrCode()}>ดาวน์โหลด QR{imageUrl ? (
                  <a >
                    <img  src={imageUrl} style={{display:'none'}} alt="img" />
                  </a>) : null}</a>
              <Link to={`/admin`}><button className="buttona button3 textB textBS BS1" >กลับหน้าผู้ดูแล</button></Link>

            </div>
          </div>

        </div>


      </div>
    );
  } catch (error) {
    return (


      <>


        <NotFound />

      </>)
  }
};

const mapStateToProps = (state) => ({
  menus: state,
});
const mapDispatchToProps = (dispatch) => ({
  updatemenu: (data) => {
    dispatch({ payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
