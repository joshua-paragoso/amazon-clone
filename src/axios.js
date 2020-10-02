import axios from "axios";

const instance = axios.create({
    
  // the api  (cloud function) url
    baseURL: 'https://us-central1-challenge-aca94.cloudfunctions.net/api'
  });
  
  export default instance;

  //local host link
  //http://localhost:5001/challenge-aca94/us-central1/api