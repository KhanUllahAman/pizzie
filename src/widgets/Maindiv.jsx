import React from 'react'
import Myinputs from './Myinputs'
import Mybutton from './Mybutton'
import { Formik, useFormik } from 'formik'
import * as Yup from "yup"
const Maindiv = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Email is required").email("invalid email address"),
            password: Yup.string().required("Password is required").max(15, "max length is 15").min(4, "min length is 4")
        }),
        onSubmit: (res) => {
            console.log(res)
        }
    })
    return (
        <>
            <div class="form-wrapper">
                <h2>Sign In</h2>
                <form onSubmit={formik.handleSubmit}>
                    <Myinputs myTypes={"Email"} myText={"Email"} myName={"email"} myOnChange={formik.handleChange} myOnBlur={formik.handleBlur} myValues={formik.values.email} />
                    {formik.touched.email && !formik.errors.email ? (
                        <div className='success'>Your email is perfect!</div>
                    ) : null}

                    {formik.touched.email && formik.errors.email ? (
                        <div className='error'>{formik.errors.email}</div>
                    ) : null}
                    <br />
                    <Myinputs myTypes={"Password"} myText={"Password"} myName={"password"} myOnChange={formik.handleChange} myOnBlur={formik.handleBlur} myValues={formik.values.password} />
                    {formik.touched.email && !formik.errors.password ? (
                        <div className='success'>Your password is perfect!</div>
                    ) : null}

                    {formik.touched.password && formik.errors.password ? (
                        <div className='error'>{formik.errors.password}</div>
                    ) : null}
                    <Mybutton Mytext={"Sign In"} />
                    <div class="form-help">
                        <div class="remember-me">
                            <input type="checkbox" id="remember-me" />
                            <label for="remember-me">Remember me</label>
                        </div>
                        <a href="#">Need help?</a>
                    </div>
                </form>
                <p>New to Pizzie? <a href="#">Sign up now</a></p>
                <small>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    <a href="#">Learn more.</a>
                </small>
            </div>
        </>
    )
}

export default Maindiv