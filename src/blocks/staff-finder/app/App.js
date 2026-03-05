import React, {useState, useEffect} from 'react';
import StaffList from "./components/StaffList";

export default function App(props){
	//variable     , method      =            default value
	let [staff, setStaff] = useState([]);
	let [filterKeyword, setFilterKeyword] = useState('');
	let [filteredStaff, setFilteredStaff] = useState([]);

	useEffect(() => {
		// get all the staff from the api
		// TODO: Add pagination if there's way more staff than 2 lol
		fetch('/wp-json/wp/v2/staff?orderby=title&order=asc')
			.then(response => response.json())
			.then(data => {
				//store the data in staff
				setStaff(data);
				setFilteredStaff(data);
		})

	}, []); // <-- this defines all dependencies from when this will run. Empty means it will run once when the page loads.


	//filtering
	function doFilter(keyword){
		const filteredStaff = staff.filter(person => person.title.rendered.toLowerCase().includes(keyword.toLowerCase()));

		setFilterKeyword(keyword);
		setFilteredStaff(filteredStaff);
	};

	return (
		<div>
			<h2>Staff List</h2>
			<label>
				Filter:
				<input type="text"
					   value={filterKeyword}
					   onChange={e => doFilter(e.target.value)}
					   />
			</label>
			<StaffList items={filteredStaff} />
		</div>
	)
}
