import { Form, Formik, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import * as yup from 'yup';

function Listappointment(props) {
    const history=useHistory();
    const [data, setdata] = useState([]);
    const loadData = () => {
        let localdata = JSON.parse(localStorage.getItem("apt"));

        setdata(localdata);
   }
   const handleDelete = (id)=>{

       let localdata = JSON.parse(localStorage.getItem("apt"));
       let ddata = localdata.filter((l,i)=>l.id !==id );

       localStorage.setItem("apt",JSON.stringify(ddata));

       loadData();
    }
        const handleEdit = (id)=>{
        history.push("/bookappointment",{"id":id})
        
    }
    
    useEffect(() => {
        loadData();
        },
    [])

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
                            <NavLink to={"/bookappointment"} activeClassName={"actbtn"}>Bookappointment</NavLink>
                        </div>
                        <div className='col-6 pb-4'>
                            <NavLink to={"/listappointment"} activeClassName={"actbtn"}>listappointment</NavLink>
                        </div>
                    </div>

                </div>
                {
                    data.map((d, i) => {
                        return (
                            <>
                                <h4>{d.name}</h4>
                                <h4>{d.email}</h4>
                                <h4>{d.phone}</h4>
                                <h4>{d.department}</h4>

                              <button onClick={()=>handleDelete(d.id)}>Delete</button>
                              <button onClick={()=>handleEdit(d.id)}>Edit</button>
                            </>
                        )
                    }
                    )
                }

          </section>
        </main>

    );
}

export default Listappointment;