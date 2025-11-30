import { Field, Formik } from 'formik';
import React from 'react';

const initialValues = {
    name: '',
    email: '',
    password: ''
}

const Register = () => {
    return (
        <div>
            <h1>Registration</h1>
            <Formik initialValues={initialValues}>
                {() => <form>
                    <div>
                        <Field type="text" name="name" placeholder="Your Name:" />
                    </div>
                    <div>
                        <Field type="email" name="email" placeholder="Your Email:" />
                    </div>
                    <div>
                        <Field type="password" name="password" placeholder="Your Password:" />
                    </div>
                    <button type="submit">Register</button> 
                </form>}
            </Formik>
        </div>
    );
}

export default Register;
