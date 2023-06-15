export const useData = async (str: String) => {
  const conf = useRuntimeConfig()
  const url = `${conf.public.apiBase}/data/${str}`
  const data = await $fetch<any>(url).catch((error) => error.data)
  console.log(`weatherData@data/${str}`, data)

  if(!data) return null
  else return data

  // const { wind, temperature, humidity } = data
  // return {
  //   wind,
  //   temperature,
  //   humidity,
  // }
}