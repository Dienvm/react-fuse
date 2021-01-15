import firebaseService from 'app/services/firebaseService';

export const GET_PRODUCTS = 'GET PRODUCTS';
export const SET_PRODUCTS_SEARCH_TEXT = 'SET PRODUCTS SEARCH TEXT';
export const REMOVE_PRODUCTS = 'REMOVE PRODUCTS';

export const getProducts = () => {
  const request = firebaseService.firestore.collection('products').get();

  return (dispatch) =>
    request.then((docs) => {
      const result = [];
      docs.forEach((doc) => {
        const data = {
          ...doc.data(),
          id: doc.id,
        };
        result.push(data);
      });

      return dispatch({
        type: GET_PRODUCTS,
        payload: result,
      });
    });
};

export const removeProducts = (productIds) => {
  const batch = firebaseService.firestore.batch();

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < productIds.length; index++) {
    const element = productIds[index];
    const ref = firebaseService.firestore.collection('products').doc(element);
    batch.delete(ref);
  }

  batch.commit();
  return {
    type: REMOVE_PRODUCTS,
  };
};

export const setProductsSearchText = (value) => {
  return {
    type: SET_PRODUCTS_SEARCH_TEXT,
    searchText: value,
  };
};
