import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { validationSignIn as validationSchema } from '../../../utils/validation';
import Input from '../../elements/Input/Input';
import Button from '../../elements/Button/Button';
import styles from './ExampleUseFormik.module.scss';
import { signIn } from '../../store/user/actions';

const ExampleUseFormikView = () => {
  const dispatch = useDispatch();
  const {
    values, handleBlur, handleChange, errors, touched, isValid, dirty, handleSubmit, isSubmitting
  } = useFormik({
    initialValues: {
      userName: '',
      email: '',
      age: null,
      password: ''
    },
    validationSchema,
    onSubmit: (val, formikHelpers) => dispatch(signIn(val, formikHelpers))
  });

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <Input
          labelHtmlFor="userName"
          labelText="User name"
          name="userName"
          onChange={handleChange}
          value={values.userName}
          onBlur={handleBlur}
          errors={errors.userName && touched.userName && errors.userName}
        />
        <Input
          labelHtmlFor="email"
          labelText="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.email && touched.email && errors.email}
        />
        <Input
          labelHtmlFor="age"
          labelText="Age"
          name="age"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.age && touched.age && errors.age}
        />
        <Input
          labelHtmlFor="password"
          labelText="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.password && touched.password && errors.password}
        />
        <Button
          type="submit"
          disabled={!isValid || !dirty || isSubmitting}
          onClick={handleSubmit}
          title="Submit"
        />
      </div>
    </div>
  );
};

export default ExampleUseFormikView;
