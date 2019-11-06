import React, { useState } from 'react';
import axios from 'axios';
import {
  generateCode
} from '../helpers';
import RatingButtons from '../RatingButtons';

const APIgatewayUrl = 'https://0gfhrjylgj.execute-api.us-east-1.amazonaws.com/dev';

export default () => {
	const [code, setCode] = useState(generateCode(6));
	const [isSubmitting, setIsSubmitting] = useState(false);

	const onRate = async (rating) => {
		setIsSubmitting(true);

		await axios.post(`${APIgatewayUrl}/rating`, {
			rating,
			number: code
		}, {
			ContentType: 'application/json',
			'Access-Control-Allow-Origin': '*'
		});

		setCode(generateCode(6))
		setIsSubmitting(false);
	}
	return (
		<div>
			<h2>Rate this number</h2>
			<h3>{code}</h3>
			<RatingButtons loading={isSubmitting} onRate={onRate} />
		</div>
	);
};