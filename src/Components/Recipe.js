import React, { useContext, useState } from 'react';
import { ModalContext } from '../Context/ModalContext';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 600,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        scroll: { maxHeight: '500px', overflowY: 'scroll', overflowX: 'none' }
    },
}));

const Recipe = ({ recipe }) => {
    const [ModalStyle] = useState(getModalStyle)

    const [Open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const classes = useStyles()

    const { Details, setIDRecipe } = useContext(ModalContext)
    console.log(Details)
    return (
        <div className='col-md-4 col-lg-4 my-2'>
            <div className='card'>
                <h4 className='card-header bg-primary text-white' style={{ textAlign: 'center', fontWeight: 'bold' }}>{recipe.strDrink}</h4>
                <img src={recipe.strDrinkThumb} alt={`Image of ${recipe.strDrink}`} />
                <div className='card-body'>
                    <button
                        type='button'
                        className='btn btn-block btn-lg btn-primary'
                        onClick={() => {
                            setIDRecipe(recipe.idDrink);
                            handleOpen();
                        }}
                    >
                        Recipe
                    </button>
                    <Modal
                        open={Open}
                        onClose={() => {
                            setIDRecipe(null);
                            handleClose();
                        }}
                    >
                        <div style={ModalStyle} className={classes.paper}>

                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Recipe;