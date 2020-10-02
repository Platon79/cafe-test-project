import React from 'react';
import {IReview} from '../../types';
import Review from '../review';
import ReviewsForm from '../reviews-form';
import './reviews.css';

interface IReviewsProps {
	reviews: IReview[],
	restId: string,
}

const Reviews: React.FC<IReviewsProps> = ({reviews, restId}) => {
	return (
		<div className="reviews-block">
			<div className="reviews-list">
				{reviews.map((review) => (
					<Review review={review} key={review.id} />
				))}
			</div>
			<ReviewsForm restId={restId} />
		</div>
	);
};

export default Reviews;