import React, { useContext } from 'react';
import { CategoryContext } from '../Context/CategoryContext';


const Form = () => {

    const { Categories } = useContext(CategoryContext);
    console.log(Categories);

    return (
        <form className='col-12'>

            <fieldset className='text-center'>
                <legend>Search beverages by category or ingredients</legend>
            </fieldset>

            <div className='row'>

                <div className='col-md-4 my-2'>
                    <input
                        name='name'
                        className='form-control'
                        type={'text'}
                        placeholder='Search by ingredient'
                    />
                </div>

                <div className='col-md-4 my-2'>
                    <select
                        className='form-control'>
                        <option value=""> Selecciona una categoria... </option>
                        {Categories.map(category => (
                            <option
                                key={category.strCategory}
                                value={category.strCategory}
                            >
                                {category.strCategory}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='col-md-4 my-2'>
                    <input
                        className='btn btn-block btn-primary'
                        type={'submit'}
                        value='Search'
                    />
                </div>

            </div>
        </form>
    );
}

export default Form;