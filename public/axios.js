import axios from 'axios'

export default defineNuxtPlugin(() => {
  const instance = axios.create({
    baseURL: '119.205.235.57:8080/docs', // FastAPI 서버의 URL
  })

  return {
    provide: {
      axios: instance
    }
  }
})