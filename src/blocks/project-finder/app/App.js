import React, { useState, useEffect, useRef } from 'react';
import ProjectList from "./components/ProjectList";

export default function App() {
	const [project, setProject] = useState([]);
	const [filteredProject, setFilteredProject] = useState([]);
	const [loading, setLoading] = useState(true);

	const [filterKeyword, setFilterKeyword] = useState('');
	const [sortOrder, setSortOrder] = useState('asc');
	const [selectedTools, setSelectedTools] = useState([]);
	const [showToolDropdown, setShowToolDropdown] = useState(false);

	const dropdownRef = useRef(null);

	useEffect(() => {
		fetch('/wp-json/wp/v2/project?orderby=title&order=asc')
			.then(response => response.json())
			.then(data => {
				setProject(data);
				setFilteredProject(data);
				setLoading(false);
			})
			.catch(error => {
				console.error('Fetch error:', error);
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		function handleClickOutside(event) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setShowToolDropdown(false);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	function applyFilters(keyword, tools, order) {
		let updatedProjects = [...project];

		if (keyword.trim() !== '') {
			updatedProjects = updatedProjects.filter(item =>
				item.title.rendered.toLowerCase().includes(keyword.toLowerCase())
			);
		}

		if (tools.length > 0) {
			updatedProjects = updatedProjects.filter(item => {
				const projectTools = item.acf?.tools || [];
				return tools.some(tool => projectTools.includes(tool));
			});
		}

		updatedProjects.sort((a, b) => {
			const titleA = a.title.rendered.toLowerCase();
			const titleB = b.title.rendered.toLowerCase();

			if (order === 'asc') {
				return titleA.localeCompare(titleB);
			}
			return titleB.localeCompare(titleA);
		});

		setFilteredProject(updatedProjects);
	}

	function doSearch(keyword) {
		setFilterKeyword(keyword);
		applyFilters(keyword, selectedTools, sortOrder);
	}

	function doSort(order) {
		setSortOrder(order);
		applyFilters(filterKeyword, selectedTools, order);
	}

	function handleToolChange(tool) {
		let updatedTools;

		if (selectedTools.includes(tool)) {
			updatedTools = selectedTools.filter(t => t !== tool);
		} else {
			updatedTools = [...selectedTools, tool];
		}

		setSelectedTools(updatedTools);
		applyFilters(filterKeyword, updatedTools, sortOrder);
	}

	const allTools = [...new Set(
		project.flatMap(item => item.acf?.tools || [])
	)];

	return (
		<div>
			<h2>My Projects</h2>

			<div className="d-flex justify-content-between align-items-center mb-4">
				<div ref={dropdownRef} className="position-relative">
					<button
						type="button"
						className="btn btn-outline-dark rounded-pill"
						onClick={() => setShowToolDropdown(!showToolDropdown)}
					>
						Filter Tools
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
						</div>
					)}
				</div>

				<select
					className="form-select w-auto rounded-pill"
					value={sortOrder}
					onChange={(e) => doSort(e.target.value)}
				>
					<option value="asc">Sort A → Z</option>
					<option value="desc">Sort Z → A</option>
				</select>
			</div>

			<div className="mb-4">
				<input
					type="text"
					value={filterKeyword}
					onChange={(e) => doSearch(e.target.value)}
					className="form-control rounded-pill"
					placeholder="Search projects"
				/>
			</div>

			<ProjectList items={filteredProject} loading={loading} />
		</div>
	);
}
