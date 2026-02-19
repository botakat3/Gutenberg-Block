<?php
// This file is generated. Do not modify it manually.
return array(
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
			'imageUrl' => array(
				'type' => 'string',
				'default' => 'https://placehold.co/75'
			)
		)
	)
);
