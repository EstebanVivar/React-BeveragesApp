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
        width: 700,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        maxHeight: '95%',
        overflowY: 'scroll',
        overflowX: 'none'
    }
}));

const Recipe = ({ recipe }) => {
    const [ModalStyle] = useState(getModalStyle)

    const [Open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const classes = useStyles()

    const { Details, setDetails, setIDRecipe } = useContext(ModalContext)


    const getIngredients = (details) => {
        let ingredients = [];
        console.log(details)
        for (let i = 1; i < 16; i++) {
            if (details[`strIngredient${i}`]) {
                ingredients.push(
                    <li>{details[`strIngredient${i}`]} {details[`strMeasure${i}`]}</li>
                )

            }
        }
        return (ingredients);
    }

    return (
        <div className='col-md-4 col-lg-4 my-2'>
            <div className='card'>
                <h4 className='card-header bg-primary text-white' style={{ textAlign: 'center', fontWeight: 'bold' }}>{recipe.strDrink}</h4>
                <img src={recipe.strDrinkThumb} alt={`${recipe.strDrink}`} />
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
                            setDetails({});
                            handleClose();
                        }}
                    >
                        <div style={ModalStyle} className={classes.paper}>
                            <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>{Details.strDrink}</h2>
                            <h3 className='mt-3'>Instructions</h3>
                            <p>
                                {Details.strInstructions}
                            </p>
                            <h3 className='mt-3'>Ingredients and measures</h3>
                            <ul>
                                {getIngredients(Details)}
                            </ul>

                            <img src={Details.strDrinkThumb} className='img-fluid my-4' alt={`${Details.strDrink}`} />
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Recipe;