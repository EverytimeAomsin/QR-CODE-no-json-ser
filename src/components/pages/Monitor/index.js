import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import Modal from 'react-modal';
import "../../../css/showimg.css"
import "../../../css/buttons.css"


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

const Monitor = ({ menus }) => {
    const { id } = useParams();
    const currentMenu = menus.find(
        (menu) => menu.id === parseInt(id)
    );
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = 'black';
    }

    function closeModal() {
        setIsOpen(false);
    }
    useEffect(() => {
        document.title = "ร้าน " + (currentMenu.name)
        setName(currentMenu.name);
        setDescription(currentMenu.description);
        setImg(currentMenu.img);
    }, [currentMenu]);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (


        <div className="row d-flex flex-column">
            <button className="circle " onClick={openModal}>
                <img src="https://image.flaticon.com/icons/png/512/4263/4263644.png" alt="" />
            </button>
            <div>
                {currentMenu ? (
                    <form onSubmit={handleSubmit}>

                        <div style={{ marginTop: '10px' }}>
                            <img
                                src={img}
                                onChange={(e) => setImg(e.target.value)}
                            />


                        </div>
                    </form>
                ) : (
                    <h1 className="text-center">No menu Found</h1>
                )}
            </div>
            <div>





                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                   
                ><form onSubmit={handleSubmit}>
                        
                       
                        <section className="intro-card">
                            <h1 ref={(_subtitle) => (subtitle = _subtitle)} style={{marginBottom:'10px'}}>ร้าน {name}<div><hr/></div></h1>

                            <p>{description}</p>

                        </section>

                    </form>
                </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(Monitor);
