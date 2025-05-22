import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePost } from "../../shared/hooks/usePost"; 
import { PostCard } from "../../components/post/postCard"; 
import { Box, Typography, CircularProgress } from "@mui/material"; 

export const CoursePost = () => {
  const navigate = useNavigate();
  const { course } = useParams();
  const { 
    getPostsByCourse, 
    allPosts: publications, 
    isFetching 
  } = usePost(); 

  const navigateToPublicationHandler = (id) => {
    navigate(`/post/${id}`); 
  };

  useEffect(() => {
    if (course) {
      getPostsByCourse(course); 
    }
  }, [course, getPostsByCourse]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {course === 'Technology' && 'Tecnología'}
        {course === 'Workshop' && 'Taller'}
        {course === 'Supervised Practice' && 'Práctica Supervisada'}
      </Typography>
      
      {isFetching ? (
        <Box display="flex" justifyContent="center" p={4}>
          <CircularProgress />
        </Box>
      ) : publications.length > 0 ? (
        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 3
          }}
        >
          {publications.map((publication) => (
            <PostCard
              key={publication.pid} 
              title={publication.title}
              description={publication.description}
              course={publication.course}
              dateCreated={publication.date} 
              id={publication.pid}
              navigateToPublicationHandler={navigateToPublicationHandler}
              showDescription={false} 
            />
          ))}
        </Box>
      ) : (
        <Typography variant="body1" color="text.secondary" textAlign="center">
          No hay publicaciones para este curso.
        </Typography>
      )}
    </Box>
  );
};