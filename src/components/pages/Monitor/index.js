import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import "../../../css/showimg.css"
import "../../../css/navbar.css"

const Monitor = ({ menus}) => {
    const { id } = useParams();
    const currentMenu = menus.find(
        (menu) => menu.id === parseInt(id)
    );

    useEffect(() => {document.title = "ร้าน "+(currentMenu.name)
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
        <div>
              <div className="header">
              <h1>ร้าน {name}</h1>
            </div>
        
        <div className="row d-flex flex-column">
            <div>
                {currentMenu ? (
                    <form onSubmit={handleSubmit}>
                        <div style={{marginTop:'10px'}}>
                            <h1>{name}</h1>
                        </div>
                        <p style={{ backgroundColor: 'white', marginLeft:'10px', display:'block' }}>{description} </p>
                        <div style={{marginTop:'10px'}}>
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
