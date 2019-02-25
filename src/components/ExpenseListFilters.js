import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../redux/actions/filters';
import { sortByAmount, sortByDate } from '../redux/actions/filters';

const ExpenseListFilters = ({ filters, dispatch }) => (
	<div>
		<input type='text' value={filters.text} onChange={(e) => {
			dispatch(setTextFilter(e.target.value));
		}}/>
		<select defaultValue={filters.sortBy} onChange={(e) => {
			e.target.value == 'amount' ? dispatch(sortByAmount()) : dispatch(sortByDate())
		}}>
			<option value='date'>Date</option>
			<option value='amount'>Amount</option>
		</select>
	</div>
);

const mapStateToProps = (state) => {
	return {
		filters: state.filters,
	};
};

export default connect(mapStateToProps)(ExpenseListFilters);
