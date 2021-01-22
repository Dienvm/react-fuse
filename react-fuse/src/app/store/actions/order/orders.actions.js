import { COLLECTIONS } from 'app/helpers'
import firebaseService from 'app/services/firebaseService'

export const GET_ORDERS = 'GET ORDERS'
export const REMOVE_ORDERS = 'REMOVE ORDERS'
export const SET_ORDERS_SEARCH_TEXT = 'SET ORDERS SEARCH TEXT'

export const getOrders = () => {
  const request = firebaseService.firestore.collection(COLLECTIONS.ORDERS).get()

  return (dispatch) =>
    request.then((docs) => {
      const result = []
      docs.forEach((doc) => {
        const data = {
          ...doc.data(),
          id: doc.id,
        }
        result.push(data)
      })

      return dispatch({
        type: GET_ORDERS,
        payload: result,
      })
    })
}

export const removeOrders = (orderIds) => {
  const batch = firebaseService.firestore.batch()

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < orderIds.length; index++) {
    const element = orderIds[index]
    const ref = firebaseService.firestore
      .collection(COLLECTIONS.ORDERS)
      .doc(element)
    batch.delete(ref)
  }

  batch.commit()
  return {
    type: REMOVE_ORDERS,
  }
}

export const setOrdersSearchText = (event) => ({
  type: SET_ORDERS_SEARCH_TEXT,
  searchText: event.target.value,
})
