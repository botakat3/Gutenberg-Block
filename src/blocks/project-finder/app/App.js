import React, {useState, useEffect, useRef} from 'react';
import ProjectList from "./components/ProjectList";

export default function App(props){
	//variable     , method      =            default value
	let [project, setProject] = useState([]);
	let [filterKeyword, setFilterKeyword] = useState('');
	let [filteredProject, setFilteredProject] = useState([]);
	let [sortOrder, setSortOrder] = useState('asc');
	let [selectedTools, setSelectedTools] = useState([]);
	let [showToolDropdown, setShowToolDropdown] = useState(false);


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



	//Filtering

	//Search filter
	function doFilter(keyword){
		const filteredProject = project.filter(person => person.title.rendered.toLowerCase().includes(keyword.toLowerCase()));

		setFilterKeyword(keyword);
		setFilteredProject(filteredProject);
	};

	//Sort by filter
	function doSort(order){
		const sorted = [...filteredProject].sort((a,b) => {
			const titleA = a.title.rendered.toLowerCase();
			const titleB = b.title.rendered.toLowerCase();

			if(order === "asc"){
				return titleA.localeCompare(titleB);
			}else{
				return titleB.localeCompare(titleA);
			}
		});

		setSortOrder(order);
		setFilteredProject(sorted);
	}

	//Tools filter
	const allTools = [...new Set(
		project.flatMap(item => item.acf?.tools || [])
	)];

	function handleToolChange(tool) {
		let updatedTools;

		if (selectedTools.includes(tool)) {
			updatedTools = selectedTools.filter(t => t !== tool);
		} else {
			updatedTools = [...selectedTools, tool];
		}

		setSelectedTools(updatedTools);

		if (updatedTools.length === 0) {
			setFilteredProject(project);
			return;
		}

		const filtered = project.filter(item => {
			const tools = item.acf?.tools || [];
			return updatedTools.some(selectedTool => tools.includes(selectedTool));
		});

		setFilteredProject(filtered);
	}

// for dropdown event
	const dropdownRef = useRef(null);
	useEffect(() => {
		function handleClickOutside(event) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setShowToolDropdown(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);


	return (
		<div>
			<h2>Explore my latest projects!</h2>
			<div className="search">
				<label className="input-group-lg input-group mb-5 mt-5 shadow rounded-pill">
					<input type="text"
						   value={filterKeyword}
						   onChange={e => doFilter(e.target.value)}
						   className="placeholder-sm form-control rounded-pill d-flex flex-column justify-content-center "
						   id="searchTermForm" placeholder="Start searching here"/>

				</label>
			</div>
			<div className="d-flex justify-content-between align-items-center mb-2">
				<div className="mb-4 position-relative" ref={dropdownRef}>
					<button
						type="button"
						className="btn btn-outline-secondary rounded-pill"
						onClick={() => setShowToolDropdown(!showToolDropdown)}
					>
						Filter by Tools
						{selectedTools.length > 0 ? ` (${selectedTools.length})` : ''}
					</button>

					{showToolDropdown && (
						<div className="dropdown-menu show p-3 shadow border-0 rounded-4 mt-2">
							{allTools.map(tool => (
								<div className="form-check mb-2" key={tool}>
									<input
										className="form-check-input"
										type="checkbox"
										id={tool}
										checked={selectedTools.includes(tool)}
										onChange={() => handleToolChange(tool)}
									/>
									<label className="form-check-label" htmlFor={tool}>
										{tool}
									</label>
								</div>
							))}

							{selectedTools.length > 0 && (
								<button
									type="button"
									className="btn btn-sm btn-link text-decoration-none px-0 mt-2"
									onClick={() => {
										setSelectedTools([]);
										setFilteredProject(project);
									}}
								>
									Clear filters
								</button>
							)}
						</div>
					)}
				</div>

				<select
					className="form-select w-auto rounded-pill "
					value={sortOrder}
					onChange={(e) => doSort(e.target.value)}
				>
					<option value="asc">Sort A → Z</option>
					<option value="desc">Sort Z → A</option>
				</select>
			</div>

			<ProjectList items={filteredProject}/>
		</div>
	)
}
