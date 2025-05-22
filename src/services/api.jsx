import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:3001/academyBlog/v1",
    timeout:3000,
    httpsAgent: false,
})

export const getPosts = async () => {
    try {
        return await apiClient.get("/posts/");
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getPostByCourse = async (course) => {
    try {
        return await apiClient.get(`/posts/course/${course}`);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getPostById = async (id) => {
    try {
        return await apiClient.get(`/posts/${id}`);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const addcomment = async (id, comment) => {
    try {
        return await apiClient.put(`/comments/${id}/addcomment`, comment);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}