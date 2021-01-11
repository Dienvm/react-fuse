/**
 * after firebase return data, it's object data, we need use this fucntion help
 *  convert to array, then render on UI as list
 *
 * @param {object} object  - object data need convert to Array
 * @return {array} response - array converted
 */
export const convertObjectToArray = (object: Object) => {
  let response = [];
  response = object
    ? Array.from(Object.keys(object), (id) => ({
      id: id,
      ...object[id],
    }))
    : [];
  return response;
};
