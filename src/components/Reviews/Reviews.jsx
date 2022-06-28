import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviewsById } from '..//../service/api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieReviewsById(id)
      .then(reviews => setReviews(reviews.results))
      .catch(error => error.message);
  }, [id]);

  return (
    <ul>
      {reviews.length
        ? reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>Author: {author}</h3> <p>{content}</p>
            </li>
          ))
        : "We don't have any reviews for this movie"}
    </ul>
  );
};
