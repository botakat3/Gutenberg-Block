import React from 'react';
import StaffListItem from "./StaffListItem";

export default function StaffList({ items }){
	return (
		<ul>
			{items.map(item => (
				<StaffListItem key={item.id} item={item} />
				))}
		</ul>
	)
}
