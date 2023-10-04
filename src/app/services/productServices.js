import axios from "axios";

export const createProduct = async (data, files) => {

    const token = JSON.parse(localStorage.getItem("token"))

    const {
        brands,
        category,
        description,
        discount,
        price,
        stock,
        title
    } = data

    try {
        let formData = new FormData();

        formData.append("category", category)
        formData.append("description", description)
        formData.append("discount", discount)
        formData.append("price", price)
        formData.append("stock", stock)
        formData.append("title", title)

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