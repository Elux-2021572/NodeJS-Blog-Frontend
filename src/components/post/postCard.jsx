import React from "react";
import PropTypes from "prop-types";

export const PostCard = ({ 
  title, 
  description, 
  course, 
  dateCreated, 
  id, 
  navigateToPublicationHandler,
  showDescription = false 
}) => {
  const handleNavigate = () => {
    navigateToPublicationHandler(id);
  };

  return (
    <div 
      onClick={handleNavigate} 
      className={`post-card ${showDescription ? 'with-description' : ''}`}
    >
      <h3>{title}</h3>
      <p>{new Date(dateCreated).toLocaleDateString()}</p>
      <p><strong>{course}</strong></p>
      {showDescription && <p className="description">{description}</p>}
    </div>
  );
};

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  course: PropTypes.string.isRequired,
  dateCreated: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired,
  id: PropTypes.string.isRequired,
  navigateToPublicationHandler: PropTypes.func.isRequired,
  showDescription: PropTypes.bool
};

PostCard.defaultProps = {
  showDescription: false
};