import React from 'react';
import './Welcome.css'
import './AddForm.css';
import axios from 'axios';
import { useFormik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';


function UpdateForm () {
    const navigate = useNavigate();
    const location = useLocation();
    const validate = values => {
        const errors = {}

        if (!values.description) {
            errors.description = 'Required'
        }
        if (!values.completionDate) {
            errors.completionDate = 'Required'
        }
        if (!values.isDone) {
            errors.isDone = 'Required'
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            id: '',
            description: '',
            completionDate: '',
            isDone: ''
        },
        validate,
        onSubmit: values =>
            axios ({
                method: "PUT",
                url: `http://localhost:8080/users/Admin/items/${values.id}`,
                data: values,
                headers: {
                    Authorization: 'Basic ' + window.btoa('user' + ':' + '1234')
                  }
            }).then(response => {
                console.log(response);
                navigate('/welcome')
            }).catch(err => {console.log(err)})
    })
    return (
        // <div>
        //     <h1>Any Updates? Keep Productiv!</h1>
        //     <form className='location-form' onSubmit={formik.handleSubmit}>
        //         <div>
        //         <label htmlFor='description'> Description </label>
        //         <input className='input-fields' onChange={formik.handleChange} value = {formik.values.description} onBlur = {formik.handleBlur} type='text' id='description' name = 'description'/>
        //         {formik.touched.description && formik.errors.description ? <div>{formik.errors.description}</div> : null}
        //         </div>
        //         <div>
        //         <label htmlFor='date'> Date </label>
        //         <input className='input-fields' onChange={formik.handleChange} value = {formik.values.completionDate} onBlur = {formik.handleBlur} type='text' id='completionDate' name = 'completionDate'/>
        //         {formik.touched.completionDate && formik.errors.completionDate ? <div>{formik.errors.completionDate}</div> : null}
        //         </div>
        //         <div>
        //         <label htmlFor='isDone'> Status </label>
        //         <select className='input-fields' onChange={formik.handleChange} value = {formik.values.isDone} onBlur = {formik.handleBlur} type='text' id='isDone' name = 'isDone'>
        //         <option value="complete">Complete</option>
        //         <option value="incomplete">Incomplete</option>
        //         </select> // Add: "Entry successfully added" as a pop-up/alert in JS. On submit.
        //         {formik.touched.isDone && formik.errors.isDone ? <div>{formik.errors.isDone}</div> : null}
        //         </div>
        //         <button type='submit' className='add-form-button'>Submit</button>
        //         <button type='cancel' className='cancel-form-button' onClick={() => navigate('/welcome')}>Cancel</button>
        //     </form>
        // </div>

        <div>
            <h1>Any Updates? Keep Productiv!</h1>
            <form className='location-form' onSubmit={formik.handleSubmit}>
                <div>

                <label htmlFor='id'> Number </label>
                <input className='input-fields' onChange={formik.handleChange} value = {formik.values.id} onBlur = {formik.handleBlur} type='text' id='id' name = 'id'/>
                {formik.touched.id && formik.errors.id ? <div>{formik.errors.id}</div> : null}

                </div>

                <div>
                <label htmlFor='description'> Description </label>
                <input className='input-fields' onChange={formik.handleChange} value = {formik.values.description} onBlur = {formik.handleBlur} type='text' id='Description' name = 'description'/>
                </div>
                {formik.touched.description && formik.errors.description ? <div>{formik.errors.description}</div> : null}
                <div>
                <label htmlFor='date'> Date </label>
                <input className='input-fields' onChange={formik.handleChange} value = {formik.values.completionDate} onBlur = {formik.handleBlur} type='text' id='completionDate' name = 'completionDate'/>
                {formik.touched.completionDate && formik.errors.completionDate ? <div>{formik.errors.completionDate}</div> : null}

                <label htmlFor='status'> Status </label>
                <select className='input-fields' onChange={formik.handleChange} value = {formik.values.isDone} onBlur = {formik.handleBlur} type='text' id='isDone' name = 'isDone'>
                <option value="complete">Complete</option>
                <option value="incomplete">Incomplete</option>
                {formik.touched.isDone && formik.errors.isDone ? <div>{formik.errors.isDone}</div> : null}
                </select>
        
                {/* <label htmlFor='status'> Status </label>
                <input className='input-fields' onChange={formik.handleChange} value = {formik.values.isDone} onBlur = {formik.handleBlur} type='text' id='Status' name = 'status'/>
                {formik.touched.isDone && formik.errors.isDone ? <div>{formik.errors.isDone}</div> : null} */}
                </div>
                
                <button type = 'submit' className='add-form-button' /* onClick={() => navigate('/welcome')} */ >Submit</button>
                <button type='cancel' className='cancel-form-button' onClick={() => navigate('/welcome')}>Cancel</button>

            </form>
        </div>
    )
}

export default UpdateForm;