import React from 'react';
import Select from 'react-select';
import './Welcome.css'
import './AddForm.css';
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';

function AddForm () {

    const navigate = useNavigate();

    const validate = values => {
        const errors = {}

        if (!values.description) {
            errors.description = 'This field is required'
        }
        if (!values.completionDate) {
            errors.completionDate = 'This field is required'
        }
        if (!values.isDone) {
            errors.isDone = 'This field is required'
        }
        return errors;
    }
    const formik = useFormik({
        initialValues: {
            description: '',
            completionDate: '',
            isDone: ''
        },
        validate,
        onSubmit: values =>
            axios ({
                method: "POST",
                url: "http://localhost:8080/users/Admin/items",
                data: values
            }).then(response => {
                console.log(response);
                // navigate('/Welcome')
            }).catch(err => {console.log(err)})
    })

    // navigate('/Welcome');
// Add REGEX for Password strength and e-amil
    return (
        <div>
            <h1>Add An Item, Stay Productiv!</h1>
            <form className='location-form' onSubmit={formik.handleSubmit}>
                <div>
                <label htmlFor='description'> Description </label>
                <input className='input-fields' onChange={formik.handleChange} value = {formik.values.description} onBlur = {formik.handleBlur} type='text' id='description' name = 'description'/>
                {formik.touched.description && formik.errors.description ? <div>{formik.errors.description}</div> : null}
                </div>
                <div>
                <label htmlFor='date'> Date </label>
                <input className='input-fields' onChange={formik.handleChange} value = {formik.values.completionDate} onBlur = {formik.handleBlur} type='text' id='completionDate' name = 'completionDate'/>
                {formik.touched.completionDate && formik.errors.completionDate ? <div>{formik.errors.completionDate}</div> : null}
                </div>
                <div>
                <label htmlFor='isDone'> Status </label>
                <input className='input-fields' onChange={formik.handleChange} value = {formik.values.isDone} onBlur = {formik.handleBlur} type='text' id='isDone' name = 'isDone'/>
                {formik.touched.isDone && formik.errors.isDone ? <div>{formik.errors.isDone}</div> : null}
                </div>
                <button type='submit' className='add-form-button'>Submit</button>
                <button type='cancel' className='cancel-form-button' onClick={() => navigate('/Welcome')}>Cancel</button>
            </form>
        </div>
    )
}

export default AddForm;