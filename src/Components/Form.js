import React from 'react';
const Form = () => {
    return (
        <form className='col-12'>

            <fieldset className='text-center'>
                <legend>Search beverages by category or ingredients</legend>
            </fieldset>

            <div className='row'>

                <div className='col-md-4'>
                    <input
                        name='name'
                        className='form-control'
                        type={'text'}
                        placeholder='Search by ingredient'
                    />
                </div>

                <div className='col-md-4'> 
                    <select
                        className='form-control'>
                        <option value={""}>

                        </option>
                    </select>
                </div>
                
                <div className='col-md-4'>
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