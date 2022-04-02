import { useState } from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { HiOutlineMail, HiOutlineKey } from 'react-icons/hi';
import TextInput from './TextInput';

const Signin = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const [showPassword, setShowPassword] = useState(false);

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email('Email must be a valid email')
      .lowercase()
      .required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters long')
      .max(50, 'Passwod must not exceed 60 characters')
      .required('Password is required'),
  });

  const handleSubmit = (values) => {
    console.log('Login', values);
  };

  return (
    <div className="mt-16">
      <div className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 h-1 max-w-md mx-auto"></div>
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md  text-gray-700">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold mb-1">Sign in</h2>
          <div>
            Don't have an account?{' '}
            <Link to="/signup" className="text-skin-inverted hover:underline">
              Sign up
            </Link>
          </div>
        </div>

        <Formik
          validationSchema={loginSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            errors,
            setFieldValue,
            loading,
            isValid,
            dirty,
          }) => {
            return (
              <Form noValidate onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <TextInput
                    labelName="Email address"
                    inputType="text"
                    placeholderText="name@example.com"
                    handleChange={handleChange}
                    icon={<HiOutlineMail />}
                    name="email"
                    value={values.email}
                    error={errors.email}
                  />

                  <TextInput
                    labelName="Password"
                    inputType={showPassword ? 'text' : 'password'}
                    placeholderText="Your password"
                    icon={<HiOutlineKey />}
                    name="password"
                    value={values.password}
                    error={errors.password}
                    handleChange={handleChange}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    isPasswordInput
                  />

                  <button
                    className={`bg-skin-button-accent hover:bg-skin-button-accent-hover w-full py-2.5 rounded-md text-skin-base mt-4 shadow ${
                      (loading || !isValid || !dirty) &&
                      'opacity-70 cursor-not-allowed'
                    }`}
                    disabled={loading || !isValid || !dirty}
                  >
                    Continue
                  </button>

                  <button className="w-full py-2 rounded-md mt-4 border-2 border-yellow-200 shadow font-bold transition duration-200 hover:scale-105">
                    Login as guest
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Signin;
