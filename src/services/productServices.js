import axios from "axios";

export const createProduct = async (data, files) => {
    try {
        const token = JSON.parse(localStorage.getItem("token"))

        const {
            brands,
            category,
            description,
            discount,
            price,
            stock,
            title,
            condition
        } = data

        let formData = new FormData();

        formData.append("category", category)
        formData.append("description", description)
        formData.append("discount", discount)
        formData.append("price", price)
        formData.append("stock", stock)
        formData.append("title", title)
        formData.append("condition", condition)

        for (const brand of brands) {
            formData.append("brands[]", brand)
        }

        for (const image of files) {
            formData.append("images", image)
        }

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        }

        const response = await axios.post(`
            ${process.env.NEXT_PUBLIC_API_PRODUCTS_URL}/create-product`,
            formData,
            config,
        )
        return response

    } catch (err) {
        const errors = err.response.data
        return errors
    }
}

export const deleteProduct = async (id) => {
    try {
        const response = axios.delete(`${process.env.NEXT_PUBLIC_API_PRODUCTS_URL}/delete-product/${id}`)

        return response
    } catch (err) {
        console.log("ERROR", err);
    }

}