import Modal from "@material-ui/core/Modal";
import React, {useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { connect} from 'react-redux';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const WarningModal = props => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(()=> {
        setOpen(props.open);
        setMessage(props.message);
    },[props.open]);

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                onBackdropClick = {props.closeModal}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Transition modal</h2>
                        <p id="transition-modal-description">{message}</p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};
const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch({ type: '', openModal: false, message: ''})
    };
};
const mapStateToProps = state => {
    return {
        open: state.showModal,
        message: state.message
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(WarningModal);
