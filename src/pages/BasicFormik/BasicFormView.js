import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import Label from '../../component/Label/Label';
import ValidationErrorText from '../../component/ValidationErrorText/ValidationErrorText';
import Button from '../../component/Button/Button';
import { signIn } from '../../store/user/actions';
import styles from './scss/basicFormik.module.scss';

const BasicFormView = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          userName: '',
          email: '',
          age: null,
          password: ''
        }}
        validationSchema={Yup.object({
          userName: Yup.string()
            .min(4, 'Must be at least 4 characters long')
            .max(32, 'Must be 32 characters or less')
            .trim()
            .required('Required'),
          age: Yup.number()
            .positive('Must be positive')
            .integer('Must be integer')
            .required('Required'),
          email: Yup.string()
            .email()
            .trim()
            .required('Required'),
          password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .max(32, 'Password must be no more than 32 characters')
            .matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'Is not in correct format')
            .required('Required'),
        })}
        onSubmit={(values, formikHelpers) => {
          dispatch(signIn(values, formikHelpers));
        }}
      >
        {({
          errors, touched, isValid, dirty, handleSubmit, isSubmitting
        }) => (
          <Form className={styles.form}>
            <div className={styles.inputContainer}>
              <div className={styles.inputContainerInner}>
                <Label htmlFor="userName" text="User name" />
                <Field
                  id="userName"
                  name="userName"
                  placeholder="Your Name*"
                  className={styles.input}
                />
                {errors.userName && touched.userName && <ValidationErrorText error={errors.userName} />}
              </div>
            </div>

            <div className={styles.inputContainer}>
              <div className={styles.inputContainerInner}>
                <Label htmlFor="age" text="Age" />
                <Field
                  id="age"
                  name="age"
                  placeholder="17*"
                  type="text"
                  className={styles.input}
                />
                {errors.age && touched.age && <ValidationErrorText error={errors.age} />}
              </div>
            </div>

            <div className={styles.inputContainer}>
              <div className={styles.inputContainerInner}>
                <Label htmlFor="email" text="Email" />
                <Field
                  id="email"
                  name="email"
                  placeholder="jane@acme.com*"
                  type="email"
                  className={styles.input}
                />
                {errors.email && touched.email && <ValidationErrorText error={errors.email} />}
              </div>
            </div>

            <div className={styles.inputContainer}>
              <div className={styles.inputContainerInner}>
                <Label htmlFor="password" text="Password" />
                <Field
                  id="password"
                  name="password"
                  placeholder="your password"
                  type="password"
                  className={styles.input}
                />
                {errors.password && touched.password && <ValidationErrorText error={errors.password} />}
              </div>
            </div>

            <Button
              type="submit"
              disabled={!isValid || !dirty || isSubmitting}
              onClick={handleSubmit}
              title="Submit"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BasicFormView;
