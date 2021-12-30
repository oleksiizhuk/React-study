import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { validationSignIn as validationSchema } from '../../utils/validation';
import Input from '../../component/Input/Input';
import Button from '../../component/Button/Button';
import styles from './ExampleUseFormik.module.scss';
import { signIn } from '../../store/user/actions';

const ExampleUseFormikView = () => {
  const dispatch = useDispatch();
  const {
    values,
    errors,
    touched,
    isValid,
    dirty,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    status,
  } = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: (val, formikHelpers) => dispatch(signIn(val, formikHelpers))
  });
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        {status?.done && <p className={styles.title}>{status.done}</p>}
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          labelHtmlFor="userName"
          labelText="User name"
          name="userName"
          value={values.userName}
          errors={errors.userName && touched.userName && errors.userName}
        />
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          labelHtmlFor="email"
          labelText="Email"
          name="email"
          value={values.email}
          errors={errors.email && touched.email && errors.email}
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
