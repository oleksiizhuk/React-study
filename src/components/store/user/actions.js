import { SET_USER } from './types';

export const setUser = (user) => ({ type: SET_USER, user });

export const signIn = ({
  userName, age, email, password 
}, formikHelpers) => {
  const {
    setStatus, setSubmitting, setFieldError, setErrors
  } = formikHelpers;
  return (dispatch) => {
    setSubmitting(true);
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        userName,
        age,
        email,
        passwordConfirm: email,
        password
      }),
      redirect: 'follow'
    };
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    fetch(`${proxy}http://localhost:3001/auth/signIn`, requestOptions)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          res.json().then((user) => {
            setSubmitting(false);
            dispatch(setUser(user));
          });
        } else {
          setFieldError({ email: 'error' });
          setStatus({ email: 'error' });
          setErrors({ email: 'this email already exists' });
        }
      }).catch(() => {
      })
      .finally(() => {
        setSubmitting(false);
      });
  };
};

export const getSignIn = (values, formikHelpers) => {
  const {
    userName, age, email, password
  } = values;
  const { setStatus, setSubmitting } = formikHelpers;
  return (dispatch) => {
    setSubmitting(true);
    fetch('http://localhost:3001/auth/signIn?'
      + `${userName ? `userName=${userName}` : ''}`
      + `${age ? `&age=${age}` : ''}`
      + `${email ? `&email=${email}` : ''}`
      + `${password ? `&password=${password}` : ''}`
      + `${password ? `&passwordConfirm=${password}` : ''}`)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          res.json().then((user) => {
            setSubmitting(false);
            dispatch(setUser(user));
          });
        } else {
          setStatus({ email: 'test' });
        }
      }).catch(() => {
      })
      .finally(() => {
        setSubmitting(false);
      });
  };
};
