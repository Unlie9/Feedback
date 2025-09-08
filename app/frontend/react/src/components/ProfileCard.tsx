import React from 'react'
import { MapPin, Users, Briefcase, Star, Mail, Phone } from 'lucide-react'
import { User } from '../types'

interface ProfileCardProps {
	user: User
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
	return (
		<div className='bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden'>
			{/* Cover Photo */}
			<div className='h-32 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600'></div>

			{/* Profile Content */}
			<div className='px-8 pb-8'>
				{/* Profile Picture */}
				<div className='relative -mt-16 mb-6'>
					<img
						src={user.avatar}
						alt={user.name}
						className='h-32 w-32 rounded-full border-6 border-white object-cover shadow-lg'
					/>
				</div>

				{/* Basic Info */}
				<div className='mb-8'>
					<h1 className='text-3xl font-bold text-gray-900 mb-2'>{user.name}</h1>
					<p className='text-xl text-gray-600 mb-1'>{user.title}</p>
					<p className='text-lg text-gray-500 mb-3'>{user.company}</p>
					<div className='flex items-center text-gray-500 mb-4'>
						<MapPin className='h-4 w-4 mr-2' />
						<span>{user.location}</span>
					</div>

					<div className='flex items-center space-x-6'>
						<div className='flex items-center text-blue-600'>
							<Users className='h-5 w-5 mr-2' />
							<span className='font-semibold'>
								{user.connections} connections
							</span>
						</div>
						<div className='flex items-center text-green-600'>
							<Star className='h-5 w-5 mr-2' />
							<span className='font-semibold'>
								{user.feedbackCount} feedbacks
							</span>
						</div>
						<button className='px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-200'>
							Edit Profile
						</button>
					</div>
				</div>

				<div className='grid md:grid-cols-2 gap-8'>
					{/* About */}
					<div>
						<h2 className='text-xl font-bold text-gray-900 mb-4'>About</h2>
						<p className='text-gray-700 leading-relaxed mb-6'>{user.about}</p>
					</div>

					{/* Contact */}
					<div>
						<h2 className='text-xl font-bold text-gray-900 mb-4'>Contact</h2>
						<div className='space-y-3'>
							<div className='flex items-center text-gray-600'>
								<Mail className='h-4 w-4 mr-3' />
								<span>sarah.johnson@email.com</span>
							</div>
							<div className='flex items-center text-gray-600'>
								<Phone className='h-4 w-4 mr-3' />
								<span>+1 (555) 123-4567</span>
							</div>
						</div>
					</div>
				</div>

				{/* Experience */}
				<div className='mt-8'>
					<div className='flex items-center mb-6'>
						<Briefcase className='h-6 w-6 text-gray-600 mr-3' />
						<h2 className='text-xl font-bold text-gray-900'>Experience</h2>
					</div>
					<div className='space-y-6'>
						{user.experience?.map((exp, index) => (
							<div
								key={index}
								className='flex space-x-4 p-4 bg-gray-50 rounded-lg'
							>
								<div className='flex-shrink-0'>
									<div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
										<Briefcase className='h-6 w-6 text-blue-600' />
									</div>
								</div>
								<div className='flex-1'>
									<h3 className='text-lg font-semibold text-gray-900'>
										{exp.title}
									</h3>
									<p className='text-gray-600'>{exp.company}</p>
									<p className='text-sm text-gray-500 mt-1'>{exp.duration}</p>
									<p className='text-gray-700 mt-2'>{exp.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Skills */}
				<div className='mt-8'>
					<div className='flex items-center mb-6'>
						<Star className='h-6 w-6 text-gray-600 mr-3' />
						<h2 className='text-xl font-bold text-gray-900'>Skills</h2>
					</div>
					<div className='flex flex-wrap gap-3'>
						{user.skills?.map((skill, index) => (
							<span
								key={index}
								className='px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium hover:bg-blue-100 transition-colors duration-200'
							>
								{skill}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileCard
