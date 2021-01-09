import React from 'react';
import { Text, View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput'

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

export default SignInForm;