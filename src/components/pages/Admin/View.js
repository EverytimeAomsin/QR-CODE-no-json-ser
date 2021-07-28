import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {  Link, useParams } from "react-router-dom";
import QRCode from 'qrcode';
import QRCode2 from "react-qr-code";
import NotFound from '../Notfound/index'

import "../../../css/View.css"
import "../../../css/buttons.css"

const View = ({ menus }) => {
  const { id } = useParams();
  try{
    
  
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

  const [text] = useState('http://localhost:3000/'+(currentMenu.id));
  const [imageUrl, setImageUrl] = useState('');

  const generateQrCode = async () => {
    try {
          const response = await QRCode.toDataURL(text, Qrstyle);
          setImageUrl(response);
    }catch (error) {
      console.log(error);
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



  const handleSubmit = (e) => {
    e.preventDefault();


    
  };

  return (


    <div className="content  " >

        {currentMenu ? (
          <form onSubmit={handleSubmit}>
            
              <h1 className="head-center" >ร้าน {name}</h1>
           

            <div className="row " >

              <div className="col-6 col-s-12 menu midp " >
                <ul style={{backgroundColor:'#ffffff'}} >

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
                 <QRCode2 classname ="qr-img "
                value={"http://localhost:3000/" + id}
                size={300}
                level={"H"}
                includeMargin={true}
        /> 
                </div>

                <div className="flex-parentbt  jc-center " style={{ marginTop: '15px' }}>
                  <a className="buttona button1" type="button" style={{fontSize:'30px'}}  href={imageUrl} download 
                             onClick={() => generateQrCode()}>ดาวน์โหลด QR{imageUrl ? (
                              <a>
                                    <img style={{display: 'none'}}  src={imageUrl} alt="img"/>
                              </a>) : null}</a>
                  <Link to={`/admin`}><button className="buttona button3" style={{fontSize:'20px'}}>กลับหน้าผู้ดูแล</button></Link>

                </div>
              </div>

            </div>
          </form>
        ) : (
          <h1 className="text-center">No menu Found</h1>
        )}
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
    dispatch({payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
