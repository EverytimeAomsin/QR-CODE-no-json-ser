import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";

const EditContact = ({ contacts, updateContact }) => {
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
      contact.description === description && contact.id !== currentContact.id
        ? contact
        : null
    );
    const checkContactPhoneExists = contacts.filter((contact) =>
      contact.qr === qr && contact.id !== currentContact.id
        ? contact
        : null
    );

    const checkContactImgExists = contacts.filter((contact) =>
      contact.img === img && contact.id !== currentContact.id
        ? contact
        : null
    );

    if (!description || !name  || !img || !qr) {
      return toast.warning("Please fill in all fields!!");
    }
  

    const data = {
      id: currentContact.id,
      description,
      name,
      img,
      qr,
    };

    updateContact(data);
    toast.success("Contact updated successfully!!");
    history.push("/");
  }; 

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => history.push("/")}
        >
          Go back
        </button>
        <div className="col-md-6 mx-auto shadow p-5">
          {currentContact ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  value={description}
                  placeholder={"description"}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={img}
                  placeholder={"img"}
                  onChange={(e) => setImg(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={qr}
                  placeholder={"qr"}
                  onChange={(e) => setQr(e.target.value)}
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update Contact
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.push("/")}
                >
                  cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Contact Found</h1>
          )}
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
