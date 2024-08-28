import React from 'react'
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

function Sidebar() {
  	return (
		<div className='border-r border-slate-500 p-4 flex flex-col h-full w-full sm:w-64 md:w-80 lg:w-96'>
			<SearchInput />
			<div className='divider px-3'></div>
			<div className='flex-1 overflow-y-auto'>
				<Conversations />
			</div>
			<LogoutButton />
		</div>
	);
};

export default Sidebar;
