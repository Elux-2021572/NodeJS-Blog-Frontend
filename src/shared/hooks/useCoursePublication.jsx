import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import { getPostByCourse as getPostByCourseRequest } from "../../services";

export const usePostByCourse = () => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const getPostsByCourse = useCallback(async (course) => {
    setIsFetching(true);

    const response = await getPostByCourseRequest(course);

    if (response.error) {
      toast.error(response.message || "Error fetching posts");
      setIsFetching(false);
      return;
    }

    setPosts(response.data.posts);
    setIsFetching(false);
  }, []);

  return {
    getPostsByCourse,
    posts,
    isFetching,
  };
};
