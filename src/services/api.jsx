import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:3001/academyBlog/v1",
    timeout: 3000,
    httpsAgent: false,
});

export const getPosts = async () => {
    try {
        return await apiClient.get("/");
    } catch (e) {
        return { error: true, message: e.message };
    }
};

export const getPostsByCourse = async (course) => {
    try {
        return await apiClient.get(`/course/${course}`);
    } catch (e) {
        return { error: true, message: e.message };
    }
};

export const getCommentsByPost = async (postId) => {
    try {
        return await apiClient.get(`/${postId}/comments`);
    } catch (e) {
        return { error: true, message: e.message };
    }
};

export const addComment = async (postId, data) => {
    try {
        return await apiClient.post(`/${postId}/addcomment`, data);
    } catch (e) {
        return { error: true, message: e.message };
    }
};

export const addPost = async (data) => {
    try {
        return await apiClient.post("/addPost", data);
    } catch (e) {
        return { error: true, message: e.message };
    }
};

export const updatePost = async (postId, data) => {
    try {
        return await apiClient.put(`/update/${postId}`, data);
    } catch (e) {
        return { error: true, message: e.message };
    }
};

export const deletePost = async (postId) => {
    try {
        return await apiClient.delete(`/delete/${postId}`);
    } catch (e) {
        return { error: true, message: e.message };
    }
};
