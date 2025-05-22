import { useState, useCallback, useEffect } from 'react';
import toast from 'react-hot-toast';
import { getPosts as getPostsRequest, getPostByCourse as getPostByCourseRequest, getPostById as getPostByIdRequest, addcomment } from '../../services';

export const usePost = () => {
    const [posts, setPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    const getPosts = useCallback(async () => {
        setIsFetching(true);
        try {
            const response = await getPostsRequest();
            if (response.error) {
                throw new Error(response.message || 'Error fetching posts');
            }
            setPosts(response.data.posts);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsFetching(false);
        }
    }, []);

    const getPostsByCourse = useCallback(async (course) => {
        setIsFetching(true);
        try {
            const response = await getPostByCourseRequest(course);
            if (response.error) {
                throw new Error(response.message || `Error fetching ${course} posts`);
            }
            setPosts(response.data.posts);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsFetching(false);
        }
    }, []);

    const getPostById = useCallback(async (id) => {
        setIsFetching(true);
        try {
            const response = await getPostByIdRequest(id);
            if (response.error) {
                throw new Error(response.message || 'Error fetching post');
            }
            setCurrentPost(response.data.post);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsFetching(false);
        }
    }, []);

    const commentOnPost = useCallback(async (id, comment) => {
        setIsFetching(true);
        try {
            const response = await addcomment(id, comment);
            if (response.error) {
                throw new Error(response.message || 'Error adding comment');
            }
            setCurrentPost(response.data.post);
            setPosts(prev => prev.map(post => 
                post._id === id ? response.data.post : post
            ));
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsFetching(false);
        }
    }, []);

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return {
        allPosts: posts,
        currentPost,
        isFetching,
        
        getPosts,
        getPostsByCourse,
        getPostById,
        commentOnPost
    };
};