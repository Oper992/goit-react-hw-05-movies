import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviewsById } from '../../service/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieReviewsById(id)
      .then(reviews => setReviews(reviews.results))
      .catch(error => error.message);
  }, [id]);

  return (
    <>
      {reviews.length ? (
        reviews.map(({ author, content, id }) => (
          <ul>
            <li key={id}>
              <h3>Author: {author}</h3> <p>{content}</p>
            </li>
          </ul>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};
export default Reviews;
