import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../filters';
import moment from 'moment';

test('should setup setTextFilter action object with provided value', () => {
	const text = 'my_test_filter'
	const action = setTextFilter(text);
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text,
	});
});

test('should setup setTextFilter action object without any provided value', () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: '',
	});
});

test('should setup sortByDate action object', () => {
	const action = sortByDate();
	expect(action).toEqual({
		type: 'SORT_BY_DATE',
	});
});
test('should setup sortByAmount action object', () => {
	const action = sortByAmount();
	expect(action).toEqual({
		type: 'SORT_BY_AMOUNT',
	});
});

test('should setup startDate action object', () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0),
	});
});

test('should setup endDate action object', () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0),
	});
});
