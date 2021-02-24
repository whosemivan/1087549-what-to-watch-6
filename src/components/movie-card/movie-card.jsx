import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const MovieCard = (props) => {
  const {film, onmouseover, onmouseout} = props;
  const {name, posterImage} = film;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={onmouseover} onMouseOut={onmouseout}>
      <div className="small-movie-card__image">
        <img src={posterImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to="/films/:id">{name}</Link>
      </h3>
    </article>
  );
};


export default MovieCard;

MovieCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
  }).isRequired,
  onmouseover: PropTypes.func.isRequired,
  onmouseout: PropTypes.func.isRequired,
};
