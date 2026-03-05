<?php
// This file is generated. Do not modify it manually.
return array(
	'project-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'kb/project-block',
		'version' => '0.1.0',
		'title' => 'Project Block',
		'category' => 'design',
		'icon' => 'project-block',
		'description' => 'Add your projects!',
		'keywords' => array(
			'project',
			'add'
		),
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			)
		),
		'textdomain' => 'high-pulp-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'project' => array(
				'type' => 'string',
				'source' => 'text',
				'selector' => '.project'
			),
			'overview' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.overview'
			),
			'buttonUrl' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => '.button',
				'attribute' => 'href'
			),
			'imageUrl' => array(
				'type' => 'string',
				'default' => 'https://placehold.co/75'
			),
			'tools' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'buttonColor' => array(
				'type' => 'string'
			),
			'modeColor' => array(
				'type' => 'string'
			),
			'layoutFlip' => array(
				'type' => 'boolean',
				'default' => false
			),
			'themeMode' => array(
				'type' => 'string',
				'default' => 'light'
			)
		)
	),
	'staff-finder' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'tk/staff-finder',
		'version' => '0.1.0',
		'title' => 'Staff finder',
		'category' => 'design',
		'icon' => 'id',
		'description' => 'Searchable staff list.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'high-pulp-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'staff-list' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'tk/staff-list',
		'version' => '0.1.0',
		'title' => 'List',
		'category' => 'design',
		'icon' => 'id',
		'description' => 'A list of staff members.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'high-pulp-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'cardColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'headingColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			)
		)
	),
	'testimonial' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'tk/testimonial',
		'version' => '0.1.0',
		'title' => 'Testimonial',
		'category' => 'design',
		'icon' => 'testimonial',
		'description' => 'add some extra pulpy testimonials!',
		'keywords' => array(
			'reviews',
			'wctc'
		),
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'high-pulp-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'author' => array(
				'type' => 'string',
				'source' => 'text',
				'selector' => '.author'
			),
			'location' => array(
				'type' => 'string',
				'source' => 'text',
				'selector' => '.location'
			),
			'quote' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.quote'
			),
			'stars' => array(
				'type' => 'number',
				'default' => 5
			),
			'imgUrl' => array(
				'type' => 'string',
				'default' => 'https://placehold.co/75'
			),
			'backgroundColorClass' => array(
				'type' => 'string'
			),
			'borderColor' => array(
				'type' => 'string'
			),
			'textColor' => array(
				'type' => 'string'
			)
		)
	)
);
