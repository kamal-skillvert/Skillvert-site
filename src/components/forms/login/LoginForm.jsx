import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Modal, ModalBody, ModalFooter } from 'react-bootstrap';
import "./style.css";
import { useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
    const [show, setShow] = React.useState(false);
    const [userEmail, setUserEmail] = React.useState("");
    const [userPassword, setUserPassword] = React.useState("");
    // eslint-disable-next-line
    const [data, setData] = useState([]);

    const toastErr = () => {
        toast.error("Enter the required details!", {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    const toastSuccess = () => {
        toast.success("Logged in Succesfull", {
            position: toast.POSITION.TOP_RIGHT
        })
    }
    const handleClose = () => {
        setShow(false);
    }

    const handleOpen = () => {
        setShow(true);
    }

    const handleSubmit = (e) => {
        if (userEmail === "" || userPassword === "") {
            toastErr()
            return;
        }
        else {
            axios.post("http://localhost:3001/api/addData", { userEmail: userEmail, userPassword: userPassword })
                .then(() => {
                    console.log("data sent sucessfully", { userEmail, userPassword });
                    toastSuccess()
                })
                .catch((err) => {
                    throw err
                })
            setUserEmail("");
            setUserPassword("");
        }
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
        <div>
            <Button className='btn btn-primary' onClick={handleOpen}>
                Login
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

                <ModalBody>
                    <Form>
                        <Form.Group className='mb-3' controlId="formBasicEmail">
                            <Form.Label >Email :</Form.Label>
                            <Form.Control type='email' name="userEmail" placeholder='email@example.com' required value={userEmail} onChange={(e) => { setUserEmail(e.target.value) }} />
                            <Form.Text className='text-muted'>
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                            <Form.Label>Password :</Form.Label>
                            <Form.Control type='password' name="userEmail" placeholder='Your Password' required value={userPassword} onChange={(e) => { setUserPassword(e.target.value) }} />
                            <Form.Text className='text-muted'>
                                We'll never share your passwor with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </ModalBody>

                <ModalFooter>
                    <Button className="btn btn-secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleSubmit} className="btn btn-primary">
                        Submit
                    </Button>
                </ModalFooter>
            </Modal>
            <ToastContainer />
        </div>
    );
}

export default LoginForm;