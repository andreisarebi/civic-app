/* eslint-disable import/no-extraneous-dependencies */
import firebasemock from 'firebase-mock';

const mockauth = new firebasemock.MockAuthentication();
mockauth.onAuthStateChanged = () => undefined; // missing from mock

const mockdatabase = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
const mockstorage = new firebasemock.MockStorage();
const mockmessaging = new firebasemock.MockMessaging();
const mockFirebaseSdk = new firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : mockdatabase),
  // use null if your code does not use AUTHENTICATION
  () => mockauth,
  // use null if your code does not use FIRESTORE
  () => mockfirestore,
  // use null if your code does not use STORAGE
  () => mockstorage,
  // use null if your code does not use MESSAGING
  () => mockmessaging,
);

export default mockFirebaseSdk;
/* eslint-enable import/no-extraneous-dependencies */
