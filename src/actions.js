import request from "superagent";
export const JWT = "JWT";

const baseUrl = "http://localhost:4000";

// export const login = (email, password) => dispatch => {
//   request
//     .post(`${baseUrl}/login`)
//     .send({ email, password })
//     .then(res => {
//       if (res.body.jwt) {
//         const action = user(res.body.jwt);
//         return dispatch(action);
//       } else {
//         alert("hmmm, sign up");
//         //console.log(err)
//       }
//     })
//     .catch(console.error);
// };

export const signUp = (email, pass, name) => dispatch =>  {
    console.log("hello f action signup",email);
    request
    .post(`${baseUrl}/signup`)
    .send({ email, pass, name })
    .then(res => {
        console.log('res',res)
    })
    
}
