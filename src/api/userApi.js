import axios from 'axios';

const registerUrl = "https://mern-ecommerce-fullstack.herokuapp.com/api/user/register";
const loginUrl = "https://mern-ecommerce-fullstack.herokuapp.com/api/user/login"
const updateUrl = "https://mern-ecommerce-fullstack.herokuapp.com/api/user/update"
const getUsersUrl = "https://mern-ecommerce-fullstack.herokuapp.com/api/user/get_all_users"
const deleteUrl = "https://mern-ecommerce-fullstack.herokuapp.com/api/user/delete/"





export const createUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.post(registerUrl,data);
            resolve(result.data)
        } catch (error) {
            reject(error)
        }
    })
}

export const loginUser=(loginData) =>{
    return new Promise(async(resolve,reject)=>{
        try {
            const result = await axios.post(loginUrl,loginData)
            resolve(result.data);
        } catch (error) {
            reject(error)
        }
    })
}

export const updateUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.patch(updateUrl,data);
            resolve(result.data)
        } catch (error) {
            reject(error)
        }
    })
}


export const totalUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.get(getUsersUrl);
            resolve(result.data)
        } catch (error) {
            reject(error)
        }
    })
}


export const deleteselectedUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.delete(deleteUrl+id);
            resolve(result.data)
        } catch (error) {
            reject(error)
        }
    })
}
