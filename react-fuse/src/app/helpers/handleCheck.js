/**
 * Representation for handle select rows on the table by the click checkbox
 *
 * @param {*} id - the id of item
 * @param {*} selected
 */
export const handleSelectRow = (id, selected) => {
  const newSelected = [...selected]

  const index = newSelected.indexOf(id)
  index > -1 ? newSelected.splice(index, 1) : newSelected.push(id)

  return newSelected
}
