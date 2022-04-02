import { useState } from 'react';
import { HiOutlineMail, HiOutlineKey, HiOutlineUser } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { useMutation } from 'react-query';
import * as yup from 'yup';
import TextInput from './TextInput';
import { signup } from '../utils/apiClient';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const initialValues = {
    email: '',
    password: '',
    username: '',
    firstName: '',
    lastName: '',
  };

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const {
    mutate: handleSignup,
    data,
    isLoading,
  } = useMutation(signup, {
    onSuccess: (data) => {
      toast.success(`User registered`);
      navigate(`/profile`);
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const registerSchema = yup.object().shape({
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
    username: yup.string().lowercase().required('Username is required'),
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
  });

  const handleSubmit = (values) => {
    handleSignup(values);
  };

  return (
    <div className="mt-16">
      <div className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 h-1 max-w-md mx-auto"></div>
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md  text-gray-700">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold mb-1">Create your account</h2>
          <div>
            Have an account?{' '}
            <Link to="/signin" className="text-skin-inverted hover:underline">
              Sign in
            </Link>
          </div>
        </div>

        <Formik
          validationSchema={registerSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({
            handleSubmit,
            handleChange,
            loading,
            values,
            errors,
            setFieldValue,
            isValid,
            dirty,
          }) => {
            return (
              <Form noValidate onSubmit={handleSubmit}>
                <TextInput
                  labelName="First name"
                  inputType="text"
                  placeholderText="Bruce"
                  icon={<HiOutlineUser />}
                  name="firstName"
                  value={values.firstName}
                  error={errors.firstName}
                  handleChange={handleChange}
                />

                <TextInput
                  labelName="Last name"
                  inputType="text"
                  placeholderText="Wayne"
                  name="lastName"
                  icon={<HiOutlineUser />}
                  value={values.lastName}
                  error={errors.lastName}
                  handleChange={handleChange}
                />

                <TextInput
                  labelName="Username"
                  inputType="text"
                  placeholderText="batman"
                  name="username"
                  icon={<HiOutlineUser />}
                  value={values.username}
                  error={errors.username}
                  handleChange={handleChange}
                />

                <TextInput
                  labelName="Email address"
                  inputType="email"
                  placeholderText="name@example.com"
                  name="email"
                  icon={<HiOutlineMail />}
                  value={values.email}
                  error={errors.email}
                  handleChange={handleChange}
                />

                <TextInput
                  labelName="Password"
                  inputType={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholderText="Your password"
                  icon={<HiOutlineKey />}
                  value={values.password}
                  error={errors.password}
                  handleChange={handleChange}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  isPasswordInput
                />

                <button
                  className={`bg-skin-button-accent hover:bg-skin-button-accent-hover w-full py-2.5 rounded-md text-skin-base mt-4 shadow ${
                    (isLoading || !isValid || !dirty) &&
                    'opacity-70 cursor-not-allowed'
                  }`}
                  disabled={isLoading || !isValid || !dirty}
                >
                  {isLoading ? 'Please wait...' : 'Create your account'}
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
