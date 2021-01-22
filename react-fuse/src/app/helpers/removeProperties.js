export const removeProperties = (object, ...keys) =>
  Object.entries(object).reduce(
    (prev, [key, value]) => ({
      ...prev,
      ...(!keys.includes(key) && { [key]: value }),
    }),
    {}
  )
