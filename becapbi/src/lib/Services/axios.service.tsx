import axios from "axios";

interface LoginResponse {
  token : string;
}

const axiosPostulacionInstance = axios.create({
  baseURL: "http://sispos.dev.umss.net/api",
  headers:{"Content-Type" : "application/json"},
});

export const AxiosServiceCiclo = () =>{
  return axiosPostulacionInstance.get('postulacion/ciclo-formulario');
}


export const AxiosServiceLogin = (data: { username: string; password: string }) => {
  return axiosPostulacionInstance
    .post<LoginResponse>('postulante/login', data)
    .then(response => {
      const authToken = response.data.token;
      console.log("token de autentificación: ", authToken);
      setAuthToken(authToken);
      return response;
    })
    .catch(error => {
      console.log("Estamos dentro del servicio de login", error);
      throw error;
    });
};

const setAuthToken = (authToken: string | null) =>{
  if(authToken){
    axiosPostulacionInstance.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
  }else{
    delete axiosPostulacionInstance.defaults.headers.common['Authorization'];
  }
}
