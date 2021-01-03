import React from 'react';
import { Text, View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik';
import * as yup from 'yup';

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

const onSubmit = (values) => {
  console.log(values);
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput style={styles.field} name="username" placeholder="Username" />
      <FormikTextInput style={styles.field} name="password" placeholder="Password" secureTextEntry />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text style={styles.button}>Log in</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = values => {
    //const mass = parseFloat(values.mass);
    //const height = parseFloat(values.height);

    //if (!isNaN(mass) && !isNaN(height) && height !== 0) {
    //  console.log(`Your body mass index is: ${getBodyMassIndex(mass, height)}`);
    //}
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;