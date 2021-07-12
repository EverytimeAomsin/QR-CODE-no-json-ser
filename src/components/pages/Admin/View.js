import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, Link , useParams  } from "react-router-dom";
import "../../../css/View.css"

const View = ({ contacts, updateContact }) => {
  const { id } = useParams();
  const history = useHistory();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    setName(currentContact.name);
    setDescription(currentContact.description);
    setQr(currentContact.qr);
    setImg(currentContact.img);
  }, [currentContact]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [qr, setQr] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkContactEmailExists = contacts.filter((contact) =>
      contact.email === email && contact.id !== currentContact.id
        ? contact
        : null
    );
    const checkContactPhoneExists = contacts.filter((contact) =>
      contact.phone === phone && contact.id !== currentContact.id
        ? contact
        : null
    );


    const data = {
      id: currentContact.id,
      description,
      name,
      qr,
      img,
    };

  };

  return (
    


      <div>
      <form onSubmit={e => onSubmit(e)}>
        <div className="header">
          <h1>เพิ่มเมนู</h1>
        </div>
        <Link style={{ marginBottom: '3px', textDecoration: "none" }}

          to={`/admin`}
        ><button className="button button1" style={{ marginTop: '15px' }}>กลับหน้าผู้ดูแล</button></Link>
        <div className="row">

          <div className="col-6 col-s-12 menu">
            <ul>
              <p>
                <h4 style={{ textAlign:"left", marginLeft:'30px'}}>ชื่อ : </h4><input style={{width: '90%'}} type="text" onChange={e => onInputChange(e)} placeholder="ใส่ชื่อร้าน" name="MenuName" value={name} />
              </p>
              <h4 style={{ textAlign:"left", marginLeft:'30px',marginTop:'8px'}}>Description : </h4> <textarea style={{width: '90%'}} id="Description" placeholder="Enter Your Description"
                name="Description"
                value={description}
                onChange={e => onInputChange(e)} rows={15} cols={60} />
              <h4 style={{ textAlign:"left", marginLeft:'30px',marginTop:'8px'}}>ที่อยู่ไฟล์รูป : </h4><input style={{width: '90%'}} type="text" onChange={e => onInputChange(e)} placeholder="ที่อยู่ไฟล์รูป" name="img" value={img} /><p />
              <h4 style={{ textAlign:"left", marginLeft:'30px',marginTop:'8px'}}>ที่อยู่ไฟล์ QR :</h4> <input style={{width: '90%'}} type="text" onChange={e => onInputChange(e)} id="id" placeholder="ที่อยู่ไฟล์ QR" name="QR" value={qr} /><p />

            </ul>
          </div>
          <div className="col-6 col-s-12">

            <div className="flex-parent  jc-center">
            <img className="img-fluid "   src={qr} />
            <img className="img-fluid "  src={img} />
            </div>

            <div className="flex-parentbt  jc-center " style={{marginTop:'15px'}}>
              <button className="button button1" type="button" onclick="{downloadQR}" > โหลด QR-CODE</button>
              <button className=" button button1">บันทึกเมนู</button>

            </div>
          </div>

        </div>
      </form>
    </div>
    
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateContact: (data) => {
    dispatch({ type: "UPDATE_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
