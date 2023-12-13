import React, { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalFooter } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as yup from "yup";

const Signup = () => {
    const [show, setShow] = React.useState(false);
    // const [firstName, setfirstName] = React.useState("");
    // const [middleName, setMiddleName] = React.useState("");
    // const [lastName, setLastName] = React.useState("");
    // const [phoneNumber, setPhoneNumber] = React.useState("");
    // const [dob, setDob] = React.useState("");
    // const [userEmail, setUserEmail] = React.useState("");
    // const [userPassword, setUserPassword] = React.useState("");
    const [data, setData] = useState([]);


    const formik = useFormik({
        initialValues: {
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            password: "",
            dob: ""
        },
        validationSchema: yup.object({
            firstName: yup.string().max(15, "Must be 15 character or less").required("requrired"),
            middleName: yup.string().max(15, "Must be 15 character or less"),
            lastName: yup.string().max(15, "Must be 15 character or less"),
            email: yup.string().email("not a valid email").required("required"),
            phoneNumber: yup.number().required("required"),
            password: yup.string().required("require"),
            dob: yup.string().required("required")
        }),
        onSubmit: (values) => {
            handleSubmit(values)
        }
    })

    const handleClose = () => {
        setShow(false);
    }

    const handleOpen = () => {
        setShow(true);
    }
    const handleSubmit = (values) => {
        // if (firstName === "" || userEmail === "" || userPassword === "") {
        //     toastErr()
        //     return;
        // }
        // else 
        console.log(values);
        const { firstName, middleName, lastName, email, phoneNumber, password, dob } = values;
        axios.post("http://localhost:3001/api/addData", { firstName: firstName, middleName: middleName, lastName: lastName, email: email, phoneNumber: phoneNumber, password: password, dob: dob })
            .then(() => {
                console.log("data sent sucessfully", { values });
                toastSuccess()
                formik.handleReset()
            })
            .catch((err) => {
                throw err
            })
        // setShow(false);
    }

    // const toastErr = () => {
    //     toast.error("Enter the required details!", {
    //         position: toast.POSITION.TOP_RIGHT
    //     });
    // };
    const toastSuccess = () => {
        toast.success("Signedup Succesfull", {
            position: toast.POSITION.TOP_RIGHT
        })
    }
    useEffect(() => {
        // Fetch data from the server
        axios.get('http://localhost:3001/api/fetchData')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div >
            <Button className='btn btn-primary' onClick={handleOpen}>
                Signup
            </Button>

            <Modal show={show} onHide={handleClose} animation={true} >
                <Modal.Header closeButton>
                    <Modal.Title style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "100%" }}>
                        <div style={{ background: "#9c27b0", borderRadius: "50%", height: "40px", width: "40px", textAlign: "center" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="16" fill="white" className="bi bi-lock" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                            </svg>
                        </div>
                        <div>
                            Signup
                        </div>
                    </Modal.Title>
                </Modal.Header>
                {/* 
                <ModalBody>
                    <Form>

                        <Form.Group className='mb-3' controlId="formBasicEmail">
                            <Form.Label >Email:</Form.Label>
                            <Form.Control type='email' name="userEmail" placeholder='email@example.com' value={userEmail} onChange={(e) => { setUserEmail(e.target.value) }} />
                            <Form.Text className='text-muted'>
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control type='text' name="firstName" placeholder='first name' value={firstName} onChange={(e) => { setfirstName(e.target.value) }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicMiddleName">
                            <Form.Label>MiddleName</Form.Label>
                            <Form.Control type='text' name="middleName" placeholder='middle name' value={middleName} onChange={(e) => { setMiddleName(e.target.value) }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Label>LastName</Form.Label>
                            <Form.Control type='text' name="lastName" placeholder='last name' value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                        </Form.Group>

                        <Form.Group className='mab-3' controlId='formBasicNumber'>
                            <Form.Label>Number</Form.Label>
                            <Form.Control type='text' name='phoneNumber' placeholder='number' maxLength={10} value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicDOB'>
                            <Form.Label>DOB</Form.Label>
                            <Form.Control type='date' name='dob' placeholder='Date of birth' value={dob} onChange={(e) => { setDob(e.target.value) }} />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                            <Form.Label>User Password</Form.Label>
                            <Form.Control type='password' name="userEmail" placeholder='Your Password' value={userPassword} onChange={(e) => { setUserPassword(e.target.value) }} />
                            <Form.Text className='text-muted'>
                                We'll never share your passwor with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </ModalBody> */}


                <ModalBody>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group className='mb-3' controlId="formBasicEmail">
                            <Form.Label >Email:</Form.Label>
                            <Form.Control type='email' name="email" placeholder='email@example.com' value={formik.values.email} onChange={formik.handleChange} onBlur={() => { formik.setFieldTouched("email") }} />
                            {
                                formik.touched.email &&
                                    formik.errors.email ? formik.errors.email : null
                            }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control type='text' name="firstName" placeholder='first name' value={formik.values.firstName} onChange={formik.handleChange} onBlur={() => { formik.setFieldTouched("firstName") }} />
                            {
                                formik.touched.firstName &&
                                    formik.errors.firstName ? formik.errors.firstName : null
                            }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicMiddleName">
                            <Form.Label>MiddleName</Form.Label>
                            <Form.Control type='text' name="middleName" placeholder='middle name' value={formik.values.middleName} onChange={formik.handleChange} onBlur={() => { formik.setFieldTouched("middleName") }} />
                            {
                                formik.touched.middleName &&
                                    formik.errors.middleName ? formik.errors.middleName : null
                            }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Label>LastName</Form.Label>
                            <Form.Control type='text' name="lastName" placeholder='last name' value={formik.values.lastName} onChange={formik.handleChange} onBlur={() => { formik.setFieldTouched("lastName") }} />
                            {
                                formik.touched.lastName &&
                                    formik.errors.lastName ? formik.errors.lastName : null
                            }
                        </Form.Group>

                        <Form.Group className='mab-3' controlId='formBasicNumber'>
                            <Form.Label>Number</Form.Label>
                            <Form.Control type='number' name='phoneNumber' placeholder='number' value={formik.values.phoneNumber} onChange={formik.handleChange} onBlur={() => { formik.setFieldTouched("phoneNumber") }} />
                            {
                                formik.touched.phoneNumber &&
                                    formik.errors.phoneNumber ? formik.errors.phoneNumber : null
                            }
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicDOB'>
                            <Form.Label>DOB</Form.Label>
                            <Form.Control type='date' name='dob' placeholder='Date of birth' value={formik.values.dob} onChange={formik.handleChange} onBlur={() => { formik.setFieldTouched("dob") }} />
                            {
                                formik.touched.dob &&
                                    formik.errors.dob ? formik.errors.dob : null
                            }
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' name="password" placeholder='Your Password' value={formik.values.password} onChange={formik.handleChange} onBlur={() => { formik.setFieldTouched("password") }} />
                            {
                                formik.touched.password &&
                                    formik.errors.password ? formik.errors.password : null
                            }
                        </Form.Group>
                        <Form.Text className='text-muted'>
                            We'll never share your data with anyone else.
                        </Form.Text>

                        <ModalFooter style={{ display: "flex" }}>
                            <Button className="btn btn-secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button type='submit' className="btn btn-primary">
                                Submit
                            </Button>
                        </ModalFooter>
                    </Form>
                </ModalBody>
            </Modal>
            <ToastContainer />
        </div>
    );
}

export default Signup;