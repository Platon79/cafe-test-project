import React, {FormEvent, useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {addReview} from '../../redux/ac/restaurants.action';
import { createId } from 'utils';
import './reviews-form.css';

type TProps = {
	restId: string,
}

const mapDispatchToProps = {
	addNewReview: addReview,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ReviewsForm: React.FC<PropsFromRedux & TProps> = ({addNewReview, restId}) => {
	const [name, setName] = useState<string>('');
	const [text, setText] = useState<string>('');
	const [rating, setRating] = useState<string>('0');

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addNewReview({
			restId,
			review: {
				id: createId(),
				user: name,
				text,
				rating: +rating,
			},
		});
	};

	return (
		<div className="review-form">
			<h4>Leave your review:</h4>

			<form onSubmit={submitHandler}>
				<input
					type="text"
					value={name}
					required
					placeholder="Enter your name"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
				/>
				<textarea
					placeholder="Your review"
					value={text}
					onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
				>
				</textarea>
				<input
					type="number"
					max="5"
					value={rating}
					placeholder="Score"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRating(e.target.value)}
				/>
				<input type="submit" value="Publish Review" />
			</form>
		</div>
	);
};

export default connector(ReviewsForm);