
export const AUTHENTICATE='AUTHENTICATE';
export const LOGOUT='LOGOUT';
export const SIGNUP='SIGNUP'
export const LOGIN='LOGIN'
export const authenticate=(userId,token,role) => {
    const state=localStorage.setItem('stateRetail',JSON.stringify({
        token:token,
        role:role
    }))
    return{
        type:AUTHENTICATE,
        token:token,
        userId:userId,
        role:role
        
    }
}
export const signup = (data,role) => {
    return async dispatch => {
        try{const response=await fetch(`http://welcome-to-kassandra.azurewebsites.net/${role}/signup`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:data
        });
        if(!response.ok){
            let errorId= ((await response.json()).error);
            if(errorId === 'EMAIL_EXISTS'){
                errorId='This email exists already!';
            }
            throw new Error('Error in Authentication');
        }
        const resData=await response.json()
        
        console.log(resData)
        dispatch(authenticate(resData.userId,resData.token,null));
        }catch(err){
                console.log(err)
                throw err
        }
    }
}
export const login = (data) => {
    console.log(data)
    return async dispatch => {
        try{const response=await fetch(`http://welcome-to-kassandra.azurewebsites.net/login`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:data
        });
        if(!response.ok){
            let errorId= ((await response.json()).error);
            throw new Error('Error in Authentication');
        }
        const resData=await response.json()
        
        console.log(resData)
        dispatch(authenticate(resData.userId,resData.token,resData.role));
        }catch(err){
                console.log(err)
                throw err
        }
    }
}
export const logout = (token) => {
    return async dispatch => {
        try{const response=await fetch('http://welcome-to-kassandra.azurewebsites.net/logout',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+token
            },
            
        });
        if(!response.ok){
            let errorId= ((await response.json()).error);
            throw new Error('Error in Authentication');
        }
        const resData=await response.json();
        localStorage.removeItem('stateRetail')
        console.log(resData);
        dispatch(authenticate(null,null,null));
        }catch(err){
                console.log(err)
                throw err
        }
    }
}

// export const GoogleLogin= (idToken,name,email) => {
//     return async dispatch => {
//         try{const response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=AIzaSyBoVQ6gKm1ifU4lNwOmSN2AK_qtVFOomvw',{
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({
//                 postBody:`id_token=${idToken}&providerId=[google.com]`,
//                 requestUri:'urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob',
//                 returnIdpCredential:true,
//                 returnSecureToken:true
//             })
//         });
//         if(!response.ok){
//             let errorId= (await response.json()).error
//             if(errorId === 'EMAIL_NOT_FOUND'){
//                 errorId='This email could not be found!';
//             }else if(errorId === 'INVALID_PASSWORD'){
//                 errorId='This password is not valid'
//             }
//             if(errorId.search('INVALID_CREDENTIAL_OR_PROVIDER_ID') >= 0){
//                 throw new Error('Invalid credentials or provider Id');
//             }else{
//                 throw new Error('Error in Authentication');
//             }
            
//         }
//         const resData=await response.json();
//         console.log(resData);
//         dispatch(authenticate(resData.localId,resData.idToken,resData.email));
//         const expirationDate=new Date(new Date().getTime()+parseInt(resData.expiresIn)*1000)
//         saveDatatoStorage(resData.idToken,resData.localId,resData.email,expirationDate);
//         dispatch(getUserData());
//     }catch(err){
//             console.log(err)
//             throw err
//         }
//     }
// }

// export const FacebookLogin= (idToken,name,email) => {
//     return async dispatch => {
//         try{const response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=AIzaSyBoVQ6gKm1ifU4lNwOmSN2AK_qtVFOomvw',{
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({
//                 postBody:`id_token=${idToken}&providerId="facebook.com"`,
//                 requestUri:'https://e-com-7ef98.firebaseapp.com/__/auth/handler',
//                 returnIdpCredential:true,
//                 returnSecureToken:true
//             })
//         });
//         if(!response.ok){
//             let errorId= (await response.json()).error
//             if(errorId === 'EMAIL_NOT_FOUND'){
//                 errorId='This email could not be found!';
//             }else if(errorId === 'INVALID_PASSWORD'){
//                 errorId='This password is not valid'
//             }
//             throw new Error('Error in Authentication');
//         }
//         const resData=await response.json();
//         console.log(resData);
//         dispatch(authenticate(resData.localId,resData.idToken,resData.email,parseInt(resData.expiresIn)*1000));
//         const expirationDate=new Date(new Date().getTime()+parseInt(resData.expiresIn)*1000)
//         saveDatatoStorage(resData.idToken,resData.localId,resData.email,expirationDate);
//         dispatch(getUserData());
//     }catch(err){
//             console.log(err)
//             throw err
//         }
//     }
// }

// export const login = (email,password) => {
//     return async dispatch => {
//         try{const response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBoVQ6gKm1ifU4lNwOmSN2AK_qtVFOomvw',{
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({
//                 email:email,
//                 password:password,
//                 returnSecureToken:true
//             })
//         });
//         if(!response.ok){
//             let errorId= (await response.json()).error
//             if(errorId === 'EMAIL_NOT_FOUND'){
//                 errorId='This email could not be found!';
//             }else if(errorId === 'INVALID_PASSWORD'){
//                 errorId='This password is not valid'
//             }
//             throw new Error('Error in Authentication');
//         }
//         const resData=await response.json()
//         dispatch(authenticate(resData.localId,resData.idToken,resData.email,parseInt(resData.expiresIn)*1000));
//         const expirationDate=new Date(new Date().getTime()+parseInt(resData.expiresIn)*1000)
//         saveDatatoStorage(resData.idToken,resData.localId,resData.email,expirationDate);
//         dispatch(getUserData());
//     }catch(err){
//             console.log(err)
//             throw err
//         }
//     }
// };
// export const getUserData=()=>{
//     return async (dispatch,getState)=>{
//         const token=getState().auths.token;
//         const userId=getState().auths.userId;
//         try{
//             const response=await fetch(`https://e-com-7ef98.firebaseio.com/users.json?auth=${token}`,{
//             method:'GET',
//             headers:{
//                 'Content-type':'application/json'
//         },
//         });
//         if(!response.ok){
//             throw new Error("Something went wrong!");
//         }
//         const resData=await response.json()
//         let userData;
//         for(const key in resData){
//             if (resData[key].localId === userId)
//              userData={...resData[key],id:key};
//         }
//         console.log(userData)
//         dispatch({type:GET_USER,userData})
//     }catch(err){
//         throw err
//     }
//     }
// };

// export const updateUserData=(id,email,name,telephone,address,avatar)=>{
//     return async (dispatch,getState)=>{
//         const token=getState().auths.token;
//         console.log(avatar);
//         try{
//             const response1=await fetch(`https://e-com-7ef98.firebaseio.com/users/${id}.json?auth=${token}`,{
//             method:'PATCH',
//             headers:{
//                 'Content-type':'application/json'
//         },
//         body:JSON.stringify({
//             email:email,
//             name:name,
//             telephone:telephone,
//             address:address,
//             avatar:avatar
//         })
//         });
//             if(!response1.ok){
//                 throw new Error("Something went wrong!");
//             }
//             const response=await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBoVQ6gKm1ifU4lNwOmSN2AK_qtVFOomvw`,{
//             method:'POST',
//             headers:{
//                 'Content-type':'application/json'
//         },
//         body:JSON.stringify({
//             idToken:token,
//             email:email,
//             returnSecureToken:true
//         })
//         });
//             if(!response.ok){
//                 throw new Error("Something went wrong!");
//             }
//         const resData=await response.json();
//         console.log(resData);
//         dispatch({type:UPDATE_USER,userData:{id,email,name,telephone,address,avatar}})
//     }catch(err){
//         throw err
//     }
//     }
// };

// export const logout=()=>{
//     AsyncStorage.removeItem('userData')
//     return{type:LOGOUT}
// }



