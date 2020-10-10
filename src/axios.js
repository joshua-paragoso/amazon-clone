import axios from "axios";

const instance = axios.create({
    
  // the api  (cloud function) url
    // baseURL: 'https://us-central1-challenge-aca94.cloudfunctions.net/api'
  
    //local host link
    baseURL:'http://localhost:5001/challenge-aca94/us-central1/api'
  });
  
  export default instance;