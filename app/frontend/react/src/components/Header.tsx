import React, { useState } from 'react'
import { Search, User, Settings, LogOut } from 'lucide-react'
import { User as UserType } from '../types'

interface HeaderProps {
	currentUser: UserType
}

const Header: React.FC<HeaderProps> = ({ currentUser }) => {
	const [searchQuery, setSearchQuery] = useState('')

	return (
		<header className='fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b border-gray-200'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					{/* Logo */}
					<div className='flex items-center'>
						<div className='bg-blue-600 text-white rounded-lg p-2'>
							<User className='h-6 w-6' />
						</div>
						<span className='ml-3 text-xl font-bold text-gray-900'>
							Profile
						</span>
					</div>

					{/* Search */}
					<div className='flex-1 max-w-lg mx-8'>
						<div className='relative'>
							<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
							<input
								type='text'
								placeholder='Search...'
								value={searchQuery}
								onChange={e => setSearchQuery(e.target.value)}
								className='w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200'
							/>
						</div>
					</div>

					{/* Profile Menu */}
					<div className='flex items-center space-x-4'>
						<button className='p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-all duration-200'>
							<Settings className='h-5 w-5' />
						</button>
						<button className='p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded-lg transition-all duration-200'>
							<LogOut className='h-5 w-5' />
						</button>
						<img
							src={currentUser.avatar}
							alt={currentUser.name}
							className='h-8 w-8 rounded-full object-cover border-2 border-gray-200'
						/>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
