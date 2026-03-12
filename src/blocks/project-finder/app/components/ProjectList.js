import React from 'react';
import ProjectItem from "./ProjectItem.js";

export default function ProjectList({ items }){
	return (
		<div className="row row-cols-1 row-cols-md-1 g-4">
			<div className="col">
				{items.map(item => (
					<ProjectItem key={item.id} item={item}/>
				))}
			</div>

		</div>
	)
}
