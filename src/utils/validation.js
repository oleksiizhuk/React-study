import * as Yup from 'yup';

export const validationSignIn = Yup.object({
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
});

export const validationSignUp = Yup.object({
  userName: Yup.string()
    .min(4, 'Must be at least 4 characters long')
    .required('Required'),
  age: Yup.number()
    .required('Required'),
  email: Yup.string()
    .required('Required'),
  password: Yup.string()
    .matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'Is not in correct format')
    .required('Required'),
});
