import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
	const readableDate = moment(createdAt);
	return (
		<div>
			<Link to={`/edit/${id}`}>
			<h3>{description}</h3>
			</Link>
			<p>{`${amount/100}`} - {readableDate.toString().substr(0,15)}</p>
	  	</div>
	);
};

export default ExpenseListItem;
