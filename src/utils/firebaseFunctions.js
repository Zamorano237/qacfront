/** @format */

import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from 'firebase/firestore';
import { firestore } from '../firebase.config';

// Saving new Item
export const saveProductItem = async (data) => {
  await setDoc(doc(firestore, 'productItems', `${Date.now()}`), data, {
    merge: true,
  });
};

export const savePostItem = async (data) => {
  await setDoc(doc(firestore, 'postItems', `${Date.now()}`), data, {
    merge: true,
  });
};

// getall product items
export const getAllProductItems = async () => {
  const items = await getDocs(
    query(collection(firestore, 'productItems'), orderBy('id', 'desc'))
  );

  return items.docs.map((doc) => doc.data());
};

export const getAllPostItems = async () => {
  const items = await getDocs(
    query(collection(firestore, 'postItems'), orderBy('id', 'desc'))
  );

  return items.docs.map((doc) => doc.data());
};
