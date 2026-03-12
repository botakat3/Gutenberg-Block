import React from 'react';

export default function StaffListItem({ item }) {

	const tools = item.acf?.tools || [];

	return (
	<div className="card mb-3">
		<div className="row g-0 h-100">
			<div className="col-md-4">
				<div className="card-img w-100 h-100" >
					{ item.thumbnail_url && (
						<img src={item.thumbnail_url} alt={item.title.rendered} />
					)}

				</div>

			</div>
			<div className="col-md-8">
				<div className="card-body p-4">
					<h2 className="card-title">{item.title.rendered}</h2>
					<div className="tools-section ">
						<h6>Tools Used</h6>
						<div className="tools-list">
							{item.acf?.tools?.map((tool) => (
								<span key={tool} className="tool-pill">{tool}</span>
							))}
						</div>
					</div>

					<p className="card-text p-3">{item.acf?.project_description}</p>

					<a
						href={item.link}
						className="btn btn-primary rounded-pill w-100 mt-auto"
					>
						View Project
					</a>
				</div>

			</div>
		</div>
	</div>

	);
}
