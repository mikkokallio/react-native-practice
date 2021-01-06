import React from 'react';
import { Text, View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({
  field: {
    marginTop: 10,
    marginHorizontal: 10,
    padding: 4,
    borderWidth: 1,
    borderColor: "#787878",
    borderRadius: 6,
    color: "#20232a",
  },
  button: {
    marginTop: 10,
    marginHorizontal: 10,
    padding: 4,
    backgroundColor: 'blue',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: "#787878",
    borderRadius: 6,
  },
});

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput style={styles.field} name="username" placeholder="Username" />
      <FormikTextInput style={styles.field} name="password" placeholder="Password" secureTextEntry />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <View><Text style={styles.button}>Log in</Text></View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log(values);

    try {
      const { data } = await signIn({ username, password });
      console.log('Data is: ', data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;