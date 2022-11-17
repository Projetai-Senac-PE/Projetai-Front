import Axios from 'axios';

const Http  = Axios.create({
    baseURL: "https://projetai-quarto-periodo.herokuapp.com",
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
})

export default Http
