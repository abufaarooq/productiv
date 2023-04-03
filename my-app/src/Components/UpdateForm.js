import React from 'react';
import './Welcome.css'
import './AddForm.css';
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';


function UpdateForm () {

    const navigate = useNavigate();
    const validate = values => {
        const errors = {}

        if (!values.description) {
            errors.description = 'Required'
        }
        if (!values.date) {
            errors.date = 'Required'
        }
        if (!values.status) {
            errors.status = 'Required'
        }
        return errors;
    }
    const formik = useFormik({
        initialValues: {

            userName: '',
            targetDate: '',
            isDone: ''
        },
        validate,
        onSubmit: values =>
            axios ({
                method: "PUT",
                url: "http://localhost:8080/users/Admin/items/0",
                data: values
            }).then(response => {
                console.log(response);
                // navigate('/Welcome')
            }).catch(err => {console.log(err)})
    })
    return (
        <div>
            <h1>Any Updates? Keep Productiv!</h1>
            <form className='location-form' onSubmit={formik.handleSubmit}>
                <div>
                <label htmlFor='description'> Description </label>
                <input className='input-fields' onChange={formik.handleChange} value = {formik.values.ID} onBlur = {formik.handleBlur} type='text' id='Description' name = 'description'/>
                </div>
                {formik.touched.description && formik.errors.description ? <div>{formik.errors.description}</div> : null}
                <div>
                <label htmlFor='date'> Date </label>
                <input className='input-fields' onChange={formik.handleChange} value = {formik.values.Date} onBlur = {formik.handleBlur} type='text' id='Date' name = 'date'/>
                {formik.touched.date && formik.errors.date ? <div>{formik.errors.date}</div> : null}

                </div>
                
                <div>
                <label htmlFor='status'> Status </label>
                <input className='input-fields' onChange={formik.handleChange} value = {formik.values.Status} onBlur = {formik.handleBlur} type='text' id='Status' name = 'status'/>
                {formik.touched.status && formik.errors.status ? <div>{formik.errors.status}</div> : null}
                </div>
                
                <button className='add-form-button'>Submit</button>
                <button type='cancel' className='cancel-form-button' onClick={() => navigate('/Welcome')}>Cancel</button>

            </form>
        </div>
    )
}

export default UpdateForm;