import React from 'react';

export default function StaffListItem({item}){
	return (
		<li>
			{ item.title.rendered }<br/>{item.acf.position}
		</li>
	)
}
