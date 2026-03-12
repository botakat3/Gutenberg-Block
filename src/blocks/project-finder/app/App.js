import React, {useState, useEffect} from 'react';
import ProjectList from "./components/ProjectList";

export default function App(props){
	//variable     , method      =            default value
	let [project, setProject] = useState([]);
	let [filterKeyword, setFilterKeyword] = useState('');
	let [filteredProject, setFilteredProject] = useState([]);

	useEffect(() => {
		// get all the staff from the api
		// TODO: Add pagination if there's way more staff than 2 lol
		fetch('/wp-json/wp/v2/project?orderby=title&order=asc')
			.then(response => response.json())
			.then(data => {
				//store the data in staff
				setProject(data);
				setFilteredProject(data);
			})

	}, []); // <-- this defines all dependencies from when this will run. Empty means it will run once when the page loads.


	//filtering
	function doFilter(keyword){
		const filteredProject = project.filter(person => person.title.rendered.toLowerCase().includes(keyword.toLowerCase()));

		setFilterKeyword(keyword);
		setFilteredProject(filteredProject);
	};

	return (
		<div>
			<h2>My Projects</h2>
			<div className="">
				<label className="input-group-lg input-group mb-5 mt-5 shadow rounded-pill">
					<input type="text"
						   value={filterKeyword}
						   onChange={e => doFilter(e.target.value)}
						   className="placeholder-sm form-control rounded-pill d-flex flex-column justify-content-center "
						   id="searchTermForm" placeholder="Start searching here"/>

				</label>
			</div>
			<ProjectList items={filteredProject}/>
		</div>
	)
}
