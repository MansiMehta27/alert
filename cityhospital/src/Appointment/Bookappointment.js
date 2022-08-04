import { Form, Formik, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import Inputbox from '../Componets/Input/Inputbox';

function Bookappointment(props) {
     const[update, setUpdate] = useState(false)
    const history = useHistory();
    
    const handleInsert = (values) =>{

        let iData ={
            id : Math.floor(Math.random()* 1000),
            ...values
        }
        let appoinData = JSON.parse(localStorage.getItem("apt"));

            if(appoinData === null){
                localStorage.setItem("apt", JSON.stringify([iData]))
            }else{
                appoinData.push(iData)
                localStorage.setItem("apt", JSON.stringify(appoinData))
            }
        history.push("/listappointment");
    }
    const handleUpdateDate = (values) => {
        let localData = JSON.parse(localStorage.getItem("apt"));
        let uData = localData.map((l) => {
            if(l.id === values.id){
                return values
            }else{
                return l
            }
        })
        localStorage.setItem("apt", JSON.stringify(uData));
        setUpdate(false);
        formik.resetForm();
        history.push("/listappointment");
    }

    let schema = yup.object().shape({
        name: yup.string().required("please enter name"),
        email: yup.string().email("please enter valid email").required("please enter email"),
        phone: yup.number().required("please enter number"),
        date: yup.string().required("please select date"),
        department: yup.string().required("please select department"),
        message: yup.string().required("please select message")
    });
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            if(update){
                handleUpdateDate(values)
            }else{
                handleInsert(values)
            }
        },
    });

    useEffect(()=>{
        if(props.location.state){
            let localData = JSON.parse(localStorage.getItem("apt"));
            let dData = localData.filter((l)=>l.id === props.location.state.id);
            formik.setValues(dData[0]);
            setUpdate(true)
        }
    },[])

    const{handleSubmit, errors, handleChange, touched, handleBlur, values}=formik; 

    return (
        <main id="main">
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <div className='row text-center'>
                        <div className='col-6 pb-4'>
                        <NavLink to={"/bookappointment"} activeClassName={"actbtn"}>BookAppointment</NavLink>
                        </div>
                        <div className='col-6 pb-4'>
                        <NavLink to={"/listappointment"} activeClassName={"actbtn"}>ListAppointment</NavLink>
                        </div>
                    </div>
                    <Formik values={formik}>
                        <Form onSubmit={handleSubmit} className="php-email-form">
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <Inputbox
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                        data-rule="minlen:4"
                                        data-msg="Please enter at least 4 chars"
                                        error={Boolean(errors.name && touched.name)}
                                        errorMessage={errors.name}
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur} 
                                        />
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <Inputbox
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        error={Boolean(errors.email && touched.email)}
                                        errorMessage={errors.email}
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        />
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <Inputbox
                                        type="tel"
                                        className="form-control"
                                        name="phone"
                                        id="phone"
                                        maxLength={10}
                                        placeholder="Your Phone"
                                        error={Boolean(errors.phone && touched.phone)}
                                        errorMessage={errors.phone}
                                        value={values.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 form-group mt-3">
                                    <Inputbox
                                        type="datetime"
                                        name="date"
                                        className="form-control datepicker"
                                        id="date"
                                        placeholder="Appointment Date"
                                        error={Boolean(errors.date && touched.date)}
                                        errorMessage={errors.date}
                                        value={values.date}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        />
                                </div>
                                <div className="col-md-4 form-group mt-3">
                                    <Inputbox
                                        type="select"
                                        name="department" 
                                        id="department" 
                                        className="form-select" 
                                        error={Boolean(errors.department && touched.department)}
                                        errorMessage={errors.department}
                                        value={values.department}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        >
                                        <option value>Select Department</option>
                                        <option value="Department 1">Department 1</option>
                                        <option value="Department 2">Department 2</option>
                                        <option value="Department 3">Department 3</option>
                                    </Inputbox>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <Inputbox
                                    type="textarea"
                                    className="form-control"
                                    name="message" rows={5}
                                    placeholder="Message (Optional)"
                                    defaultValue={""}
                                    error={Boolean(errors.message && touched.message)}
                                    errorMessage={errors.message}
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    />
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            </div>
                            {
                                update ?(
                                    <div className="text-center">
                                        <button type='submit'>Update An Appointment</button>
                                    </div>
                                )
                                :
                                (
                                    <div className="text-center">
                                        <button type='submit'>Make An Appointment</button>
                                    </div>
                                )
                            }
                        </Form>
                    </Formik>
                </div>
            </section>
        </main>

    );
}

export default Bookappointment;