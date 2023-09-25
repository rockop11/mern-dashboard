import axios from "axios";

export const login = async (email, password) => {
    try {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
            email,
            password
        })
        return data
    } catch (err) {
        const errors = err.response.data
        return errors
    }
}

export const register = async (data, file) => {

    const token = JSON.parse(localStorage.getItem("token"))

    const { username, fullName, email, password, tel, isAdmin } = data
    try {
        let formData = new FormData()
        formData.append('username', username)
        formData.append('fullName', fullName)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('image', file)
        formData.append('tel', tel)
        formData.append('isAdmin', isAdmin)

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        }

        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`, formData, config)
        console.log("respuesta post registro", response);

    } catch (err) {
        const errors = err.response.data
        return errors
    }
}


