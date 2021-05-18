import React from 'react';

// destructuring to get the key/value pairs from each review iterated through below
const Review = ({ headline, byline, summary_short, link}) => {
    return (
        <div key={headline} className="review">
            <header>
                <a className="review-link" href={link.url}>{headline}</a><br/>
            </header>
            <span className="author">{byline}</span>
            <blockquote>{summary_short}</blockquote>
        </div>
    )
}

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;