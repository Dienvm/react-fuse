import firebaseService from 'app/services/firebaseService'
import { showMessage } from 'app/store/actions/fuse'

export const GET_ORDER = 'GET ORDER'
export const SAVE_ORDER = 'SAVE ORDER'
export const UPDATE_ORDER = 'UPDATE ORDER'

export const getOrder = (orderId) => {
  const request = firebaseService.firestore
    .collection('orders')
    .doc(orderId)
    .get()

  return (dispatch) =>
    request.then((doc) =>
      dispatch({
        type: GET_ORDER,
        payload: doc.exists ? { ...doc.data(), id: doc.id } : {},
      })
    )
}

export const saveOrder = (data) => {
  const request = firebaseService.firestore.collection('orders').add(data)

  return (dispatch) =>
    request.then((response) => {
      dispatch(showMessage({ message: 'Order Saved' }))

      return dispatch({
        type: SAVE_ORDER,
        payload: response.data,
      })
    })
}

export const updateOrder = (orderId, data) => {
  const docRef = firebaseService.firestore
    .collection('orders')
    .doc(orderId)
    .update(data)

  return (dispatch) =>
    docRef.then((response) => {
      dispatch(showMessage({ message: 'Product Updated' }))

      return dispatch({
        type: UPDATE_ORDER,
      })
    })
}
