import React from 'react';
export default function ProjectItem({ item, loading }) {
	return (
		<div className="col">
			<div className="card mb-3 h-100">
				<div className="row g-0 h-100">
					<div className="col-md-4">
						<div className="card-img w-100 h-100">
							{loading ? (
								<div className="project-image skeleton skeleton-img"></div>
							) : (
								<img
									src={item.thumbnail_url}
									className="project-image img-fluid"
									alt={item.title.rendered}
								/>
							)}
						</div>
					</div>

					<div className="col-md-8">
						<div className="card-body p-4 d-flex flex-column h-100">
							{loading ? (
								<div className="skeleton skeleton-title mb-3"></div>
							) : (
								<h2 className="card-title">{item.title.rendered}</h2>
							)}
							<div className="tools-section p-3">
								{loading ? (
									<>
										<div className="skeleton skeleton-subtitle mb-3"></div>
										<div className="tools-list d-flex flex-wrap gap-2">
											<span className="skeleton skeleton-pill"></span>
											<span className="skeleton skeleton-pill"></span>
											<span className="skeleton skeleton-pill"></span>
										</div>
									</>
								) : (
									<>
										<h6>Tools Used</h6>
										<div className="tools-list">
											{(item.acf?.tools || []).map((tool) => (
												<span key={tool} className="tool-pill">
													{tool}
												</span>
											))}
										</div>
									</>
								)}
							</div>

							{loading ? (
								<>
									<div className="skeleton skeleton-text mb-2"></div>
									<div className="skeleton skeleton-text mb-2"></div>
									<div className="skeleton skeleton-text short mb-4"></div>
								</>
							) : (
								<p className="card-text p-3">{item.acf?.project_description}</p>
							)}


							<div className="mt-auto">
								{loading ? (
									<div className="skeleton skeleton-button w-100"></div>
								) : (
									<a
										href={item.link}
										className="btn btn-primary rounded-pill w-100"
									>
										View Project
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
