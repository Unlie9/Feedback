import React, { useState } from 'react'
import { Star, User, Calendar, Briefcase, Filter } from 'lucide-react'
import { Feedback } from '../types'

interface FeedbackSectionProps {
	feedbacks: Feedback[]
}

const FeedbackSection: React.FC<FeedbackSectionProps> = ({ feedbacks }) => {
	const [selectedCategory, setSelectedCategory] = useState<string>('all')

	const categories = [
		{ value: 'all', label: 'All Feedback' },
		{ value: 'technical', label: 'Technical Skills' },
		{ value: 'communication', label: 'Communication' },
		{ value: 'teamwork', label: 'Teamwork' },
		{ value: 'leadership', label: 'Leadership' },
		{ value: 'problem-solving', label: 'Problem Solving' },
	]

	const filteredFeedbacks =
		selectedCategory === 'all'
			? feedbacks
			: feedbacks.filter(feedback => feedback.category === selectedCategory)

	const averageRating =
		feedbacks.reduce((sum, feedback) => sum + feedback.rating, 0) /
		feedbacks.length

	const getCategoryColor = (category: string) => {
		const colors = {
			technical: 'bg-blue-100 text-blue-800',
			communication: 'bg-green-100 text-green-800',
			teamwork: 'bg-purple-100 text-purple-800',
			leadership: 'bg-orange-100 text-orange-800',
			'problem-solving': 'bg-red-100 text-red-800',
		}
		return (
			colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800'
		)
	}

	const renderStars = (rating: number) => {
		return Array.from({ length: 5 }, (_, index) => (
			<Star
				key={index}
				className={`h-4 w-4 ${
					index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
				}`}
			/>
		))
	}

	return (
		<div className='space-y-6'>
			{/* Feedback Overview */}
			<div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100'>
				<div className='flex items-center justify-between mb-4'>
					<h2 className='text-2xl font-bold text-gray-900'>
						Feedback Overview
					</h2>
					<div className='text-right'>
						<div className='flex items-center space-x-2'>
							<div className='flex'>
								{renderStars(Math.round(averageRating))}
							</div>
							<span className='text-2xl font-bold text-gray-900'>
								{averageRating.toFixed(1)}
							</span>
						</div>
						<p className='text-sm text-gray-600'>
							Based on {feedbacks.length} reviews
						</p>
					</div>
				</div>

				<div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
					{categories.slice(1).map(category => {
						const categoryFeedbacks = feedbacks.filter(
							f => f.category === category.value
						)
						const categoryAvg =
							categoryFeedbacks.length > 0
								? categoryFeedbacks.reduce((sum, f) => sum + f.rating, 0) /
								  categoryFeedbacks.length
								: 0

						return (
							<div key={category.value} className='text-center'>
								<div className='flex justify-center mb-1'>
									{renderStars(Math.round(categoryAvg))}
								</div>
								<p className='text-sm font-medium text-gray-900'>
									{categoryAvg.toFixed(1)}
								</p>
								<p className='text-xs text-gray-600'>{category.label}</p>
							</div>
						)
					})}
				</div>
			</div>

			{/* Filter */}
			<div className='flex items-center space-x-4'>
				<Filter className='h-5 w-5 text-gray-400' />
				<select
					value={selectedCategory}
					onChange={e => setSelectedCategory(e.target.value)}
					className='px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
				>
					{categories.map(category => (
						<option key={category.value} value={category.value}>
							{category.label}
						</option>
					))}
				</select>
				<span className='text-sm text-gray-600'>
					Showing {filteredFeedbacks.length} of {feedbacks.length} reviews
				</span>
			</div>

			{/* Feedback List */}
			<div className='space-y-4'>
				{filteredFeedbacks.map(feedback => (
					<div
						key={feedback.id}
						className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200'
					>
						{/* Header */}
						<div className='flex items-start justify-between mb-4'>
							<div className='flex items-start space-x-4'>
								<img
									src={feedback.fromUser.avatar}
									alt={feedback.fromUser.name}
									className='h-12 w-12 rounded-full object-cover'
								/>
								<div>
									<h3 className='font-semibold text-gray-900'>
										{feedback.fromUser.name}
									</h3>
									<p className='text-sm text-gray-600'>
										{feedback.fromUser.title}
									</p>
									<p className='text-sm text-gray-500'>
										{feedback.fromUser.company}
									</p>
								</div>
							</div>
							<div className='text-right'>
								<div className='flex items-center space-x-1 mb-1'>
									{renderStars(feedback.rating)}
								</div>
								<div className='flex items-center text-xs text-gray-500'>
									<Calendar className='h-3 w-3 mr-1' />
									{feedback.timestamp}
								</div>
							</div>
						</div>

						{/* Project Context */}
						{feedback.projectContext && (
							<div className='flex items-center mb-3 text-sm text-gray-600'>
								<Briefcase className='h-4 w-4 mr-2' />
								<span className='font-medium'>Project:</span>
								<span className='ml-1'>{feedback.projectContext}</span>
							</div>
						)}

						{/* Category Badge */}
						<div className='mb-3'>
							<span
								className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
									feedback.category
								)}`}
							>
								{feedback.category.charAt(0).toUpperCase() +
									feedback.category.slice(1).replace('-', ' ')}
							</span>
						</div>

						{/* Comment */}
						<p className='text-gray-700 leading-relaxed'>{feedback.comment}</p>
					</div>
				))}
			</div>

			{filteredFeedbacks.length === 0 && (
				<div className='text-center py-12'>
					<User className='h-12 w-12 text-gray-400 mx-auto mb-4' />
					<h3 className='text-lg font-medium text-gray-900 mb-2'>
						No feedback found
					</h3>
					<p className='text-gray-600'>
						No feedback matches the selected category.
					</p>
				</div>
			)}
		</div>
	)
}

export default FeedbackSection
