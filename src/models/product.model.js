import { db } from '../config/firebase.js';
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';

const productsCollection = collection(db, 'products');

// Método para buscar una figurita por su ID
export async function getProductById(id) {
  const productDoc = await getDoc(doc(productsCollection, id));
  if (productDoc.exists()) {
    return { id: productDoc.id, ...productDoc.data() };
  } else {
    return null;
  }
};

// Método para obtener todas las figuritas
export async function getAllProducts() {
  const querySnapshot = await getDocs(productsCollection);
  const products = [];
  querySnapshot.forEach((documento) => {
    products.push({ id: documento.id, ...documento.data() });
  });
  return products;
};

// Método para guardar una nueva figurita
export async function saveProduct(product) {
  const docRef = await addDoc(productsCollection, product);
  return docRef.id; 
};

// Método para eliminar una figurita
export async function deleteProduct(id) {
  await deleteDoc(doc(productsCollection, id));
};