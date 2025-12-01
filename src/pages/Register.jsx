import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import I18nContext from "../contexts/I18nContext";

const initialValues = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be > 1")
    .max(15, "Name must be < 15")
    .required("Name is required"),
  email: Yup.string().email().required(),
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "Password incorrect"
    )
    .required(),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password")])
    .required(),
});

const Register = () => {
  const { currentTexts } = useContext(I18nContext);

  const submitHandler = (values) => {
    console.log(values);
  };

  return (
    <div>
      <h1>{currentTexts.registration}</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <div>
              <Field type="text" name="name" placeholder="Your Name:" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div>
              <Field type="email" name="email" placeholder="Your Email:" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <Field
                type="password"
                name="password"
                placeholder="Your Password:"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <div>
              <Field
                type="password"
                name="repeatPassword"
                placeholder="Repeat Your Password:"
              />
              <ErrorMessage
                name="repeatPassword"
                component="div"
                className="error"
              />
            </div>
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
