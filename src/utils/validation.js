import * as Yup from 'yup';

// export const isEmail = (email) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
export const isValidName = (name) => /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/gm.test(name);
export const isPhone = (phone) => /[0-9]{7}/.test(phone);
export const isValidPassword = (value) => (/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(value));

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

export const validateSignUp = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'isRequired';
  } else if (!isValidName(values.firstName)) {
    errors.firstName = 'invalidFirstName';
  }

  if (!values.lastName) {
    errors.lastName = 'isRequired';
  } else if (!isValidName(values.lastName)) {
    errors.lastName = 'invalidLastName';
  }

  if (!values.phone) {
    errors.phone = 'isRequired';
  } else if (values.phone.length !== 7) {
    errors.phone = 'invalidPhoneNumber';
  } else if (!isPhone(values.phone)) {
    errors.phone = 'invalidPhoneNumber';
  }

  if (!values.password) {
    errors.password = 'isRequired';
  } else if (!isValidPassword(values.password)) {
    errors.password = 'passwordMustMatchGuidelines';
  }

  if (!values.repeatPassword) {
    errors.repeatPassword = 'isRequired';
  } else if (!values.password || values.password !== values.repeatPassword) {
    errors.repeatPassword = 'passwordsDontMatch';
  }

  return errors;
};

validateSignUp();
