
import axios from "axios";


// Creating new axios instance
export const instance = axios.create({
    withCredentials: true,
    baseURL: `${
        process.env.NEXT_REACT_APP_WORKING_ENVIRONMENT === "development"
        ? process.env.NEXT_PUBLIC_API_URL
        : process.env.NEXT_PUBLIC_API_URL_PRODUCTION
    }`,

  });



// instance.interceptors.response.use(
//   (response) => {
//     // response
//     console.log("shashank!!");
// },
//   async (error) => {
//     console.log(error,"dfsfsdfsdf")

//     let errorMessage = "";
//     let originalRequest = error.config;

//     if (
//       error.response.status === 401 ||
//       (error.response.status === 403 && !originalRequest._retry)
//     ) {
//       originalRequest._retry = true;
//       try {
//           await instance.post(
//             "/user/refresh",
//             {
//               withCredentials: true,
//             }
//           );
//           return instance(originalRequest); 
//       } catch (error) {
//         return Promise.reject(error);
//       }
//     }

//     switch (Number(error.response.status)) {
//       case 400:
//         errorMessage = error.response.data.message || "Bad Request";
//         break;
//         case 401:
//           errorMessage = error.response.data.message || "Unauthorized Access";
//           break;
  
//       case 404:
//         errorMessage = error.response.data.message || "Resource Not Found";
//         break;

//       case 500:
//         errorMessage = error.response.data.message || "Internal Server Error";
//         break;

//       default:
//         errorMessage =
//           error.response.data.message ||
//           "Sorry, something went wrong. Please try again later.";
//     }
//     return Promise.reject(errorMessage);
//   }
// );


instance.interceptors.request.use((config)=>{
  console.log("nothing relaxed af !!");
  return config;
},(error)=>{
  return Promise.reject(error);
})