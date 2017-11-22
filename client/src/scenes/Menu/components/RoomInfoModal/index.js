import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PlayersList from './components/PlayersList';
import SignForm from './components/SignForm';
import './styles.css';

const modalStyle = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex         : "999"
    },
    content : {
        minWidth              : '40%',
        top                   : '50%',
        minHeight             : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        border                : "none",
        borderRadius          : "none",
        backgroundColor       : "white"
    },
    preloaderWrapper:{
        marginTop: "50px",
        display: "flex",
        flexFlow: "row",
        justifyContent: "center"
    }
};

class RoomInfoModal extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        let obj = {};
        for(let [k, v] of new FormData(form).entries())
            obj[k] = v;
        this.props.join(obj);
    }
    render(){
        return (
            <ReactModal
                isOpen={this.props.isOpen}
                style={modalStyle}
                onRequestClose={this.props.onCloseRoom}
                shouldCloseOnOverlayClick={true}
                contentLabel="Escolha uma sala">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 modal__title">
                                {this.props.displayedRoom.name}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <div className="modal-content-wrapper">
                                    <PlayersList room = {this.props.displayedRoom}/>
                                    <SignForm 
                                        handleSubmit = {this.handleSubmit} 
                                        roomName = {this.props.displayedRoom.name}
                                        message = {this.props.message}/>
                                </div>
                            </div>
                        </div>
                    </div>
            </ReactModal>
        );
    }
}

export default RoomInfoModal;