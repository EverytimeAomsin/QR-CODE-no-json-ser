import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Modal from 'react-modal';
import NotFound from '../Notfound/index'

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

const Monitor = ({ menus }) => {


    const { id } = useParams();
    try {


        const currentMenu = menus.find

        (
            (menu) => menu.id === parseInt(id)
            
        );


        const [text] = useState('http://localhost:3000/' + (currentMenu.id));


        var subtitle;
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


            <div  >

             
                    <form onSubmit={handleSubmit}>  
                        <div >
                            <button className="circle " onClick={openModal}>
                                <img src="https://image.flaticon.com/icons/png/512/4263/4263644.png" alt="" />
                            </button>
                            <img
                                src={img}
                                onChange={(e) => setImg(e.target.value)}
                            />


                        </div>

                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                        >

                            <section className="intro-card">
                                <h1 ref={(_subtitle) => (subtitle = _subtitle)} style={{ marginBottom: '10px' }}>ร้าน {name}<div><hr /></div></h1>

                                <p>{description}</p>

                            </section>


                        </Modal>
                    </form>

              
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

export default connect(mapStateToProps, mapDispatchToProps)(Monitor);
