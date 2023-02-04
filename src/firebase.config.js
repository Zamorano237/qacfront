/** @format */

import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDJWYT3i1xgCJ7nntqHOpaM0kKGDPOc1vk',
  authDomain: 'qhse-academie-and-consulting-c.firebaseapp.com',
  databaseURL:
    'https://qhse-academie-and-consulting-c-default-rtdb.firebaseio.com',
  projectId: 'qhse-academie-and-consulting-c',
  storageBucket: 'qhse-academie-and-consulting-c.appspot.com',
  messagingSenderId: '1027894842371',
  appId: '1:1027894842371:web:3629937fef7613fd8eea36',
  measurementId: 'G-CVZWRNXE4R',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
