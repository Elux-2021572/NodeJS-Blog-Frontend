import { useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";
import { getPosts as getPostsRequest } from "../../services";

export const usePost = () => {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    const getPosts = useCallback(async () => {
        setIsFetching(true);
        const postsData = await getPostsRequest();
        if (postsData.error) {
            toast.error(postsData.e?.response?.data || 'Error fetching posts');
            return
        }

        setPosts(postsData.data.posts);
        setIsFetching(false);
    }, []);

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return {
        getPosts,
        allPublications: posts,
        isFetching
    };

}