// eslint-disable-next-line import/prefer-default-export
export const removeProperties = (object, ...keys) =>
  Object.entries(object).reduce(
    (prev, [key, value]) => ({
      ...prev,
      ...(!keys.includes(key) && { [key]: value }),
    }),
    {}
  )
