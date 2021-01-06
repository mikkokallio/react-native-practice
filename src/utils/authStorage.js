import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const accessToken = await AsyncStorage.getItem(
      `${this.namespace}:token`,
    );

    return accessToken ? JSON.parse(accessToken) : [];
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(
      `${this.namespace}:token`,
      JSON.stringify(accessToken),
    );
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }

}

export default AuthStorage;

//We can add an item to the storage using the AsyncStorage.setItem method. 
//The first argument of the method is the item's key and the second argument its value. 
//The value must be a string, so we need to serialize non-string values as we did with the JSON.stringify method.
// The AsyncStorage.getItem method can be used to get an item from the storage. 
//The argument of the method is the item's key, of which value will be resolved. 
//The AsyncStorage.removeItem method can be used to remove the item with the provided key from the storage.
// Next, implement the methods AuthStorage.getAccessToken, AuthStorage.setAccessToken and AuthStorage.removeAccessToken. 
//Use the namespace variable to give your keys a namespace like we did in the previous example.