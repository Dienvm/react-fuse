/**
 * Representation for handle select rows on the table by the click checkbox
 *
 * @param {*} id - the id of item
 * @param {*} selected
 */
export const handleSelectRow = (id, selected) => {
  let newSelected = [...selected]
  const isSelected = selected.some((select) => select === id)

  isSelected
    ? (newSelected = selected.filter((select) => select !== id))
    : newSelected.push(id)

  return newSelected
}
