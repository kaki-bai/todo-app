import axios from 'axios'

const apiClient = axios.create(
  {
      baseURL: 'http://localhost:8080'
  }
);

export const retrieveHelloWorldBean 
    = () => apiClient.get('/hello-world-bean')

// export const retrieveHelloWorldBean 
//     = () => axios.get('http://localhost:8080/hello-world-bean')
