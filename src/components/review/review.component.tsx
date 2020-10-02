import React from 'react';
import {IReview} from '../../types';
import './review.css';

interface IReviewProps {
	review: IReview
}

const Review: React.FC<IReviewProps> = ({review}) => {
	return (
		<div className="review-block">
			<div className="review-left">
				<div className="review-user">{review.user}</div>
				<div className="review-text">{review.text}</div>
			</div>
			<div className="review-right">
				{review.rating}/5
			</div>
		</div>
	);
};

export default Review;