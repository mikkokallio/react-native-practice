import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
// ...

//Implement a test that ensures that filling the sign in form's username and password fields 
//and pressing the submit button will call the onSubmit handler with correct arguments. 
//The first argument of the handler should be an object representing the form's values. 
//You can ignore the other arguments of the function. 
//Remember that the fireEvent methods can be used for triggering events and a mock function for checking whether the onSubmit handler is called or not.
//You don't have to test any Apollo Client or AsyncStorage related code which is in the useSignIn hook. 
//As in the previous exercise, extract the pure code into its own component and test it in the test.
//Note that Formik's form submissions are asynchronous so expecting the onSubmit function to be called immediately after pressing the submit button won't work. You can get around this issue by making the test function an async function using the async keyword and using the React Native Testing Library's waitFor helper function. The waitFor function can be used to wait for expectations to pass. If the expectations don't pass within a certain period, the function will throw an error. Here is a rough example of how to use it:


describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
      });
    });
  });
});

//You might face the following warning messages: 
//Warning: An update to Formik inside a test was not wrapped in act(...). 
//This happens because fireEvent method calls cause asynchronous calls in Formik's internal logic. 
//You can get rid of these messages by wrapping each of the fireEvent method calls with the act function like this:

await act(async () => {
  // call the fireEvent method here
});