import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, Link, useParams } from "react-router-dom";
import DownloadLink from "react-download-link";
import "../../../css/showimg.css"
import "../../../css/View.css"

const View = ({ menus}) => {
    const { id } = useParams();
    const history = useHistory();
    const currentMenu = menus.find(
        (menu) => menu.id === parseInt(id)
    );

    useEffect(() => {document.title = "ร้าน "+(currentMenu.name)
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
       

        const data = {
            id: currentMenu.id,
            description,
            name,
            img,
            qr,
        };
    };

    return (


       <div>

            <div>
      <form onSubmit={handleSubmit}>
        <div className="header">
          <h1>View</h1>
        </div>
        
        <div className="row">

          <div className="col-6 col-s-12 menu">
            <ul>
              
                <h4 style={{ textAlign:"left", marginLeft:'30px'}}>ชื่อ : {name} </h4>
              
              <h4 style={{ textAlign:"left", marginLeft:'30px',marginTop:'8px'}}>Description : {description}</h4> 
              <h4 style={{ textAlign:"left", marginLeft:'30px',marginTop:'8px'}}>ที่อยู่ไฟล์รูป : {img}</h4>
              <h4 style={{ textAlign:"left", marginLeft:'30px',marginTop:'8px'}}>ที่อยู่ไฟล์ QR : {qr}</h4> 

            </ul>
          </div>
          <div className="col-6 col-s-12">

            <div className="flex-parent  jc-center">
            <img
                                src={img}
                                onChange={(e) => setImg(e.target.value)}
                            />
                            <img
                                src={img}
                                onChange={(e) => setImg(e.target.value)}
                            />
            </div>

            <div className="flex-parentbt  jc-center " style={{marginTop:'15px'}}>
              <button className="button button1" style={{marginLeft:'10px'}} type="button" > โหลด QR-CODE</button>
              <Link to={`/admin`}><button className="button button3">กลับหน้าผู้ดูแล</button></Link>

            </div>
          </div>

        </div>
      </form>
    </div>
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