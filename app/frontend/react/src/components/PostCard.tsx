import React, { useState } from 'react'
import { Heart, MessageCircle, Share, MoreHorizontal, Send } from 'lucide-react'
import { Post } from '../types'

interface PostCardProps {
	post: Post
	onLike: (postId: string) => void
}

const PostCard: React.FC<PostCardProps> = ({ post, onLike }) => {
	const [isLiked, setIsLiked] = useState(false)
	const [showComments, setShowComments] = useState(false)
	const [comment, setComment] = useState('')

	const handleLike = () => {
		setIsLiked(!isLiked)
		onLike(post.id)
	}

	const handleComment = () => {
		if (comment.trim()) {
			setComment('')
			// Handle comment submission
		}
	}

	return (
		<div className='bg-white rounded-xl shadow-sm border border-gray-200'>
			{/* Header */}
			<div className='p-6 pb-4'>
				<div className='flex items-start justify-between'>
					<div className='flex items-start space-x-3'>
						<img
							src={post.user.avatar}
							alt={post.user.name}
							className='h-12 w-12 rounded-full object-cover'
						/>
						<div>
							<h3 className='font-semibold text-gray-900'>{post.user.name}</h3>
							<p className='text-sm text-gray-600'>
								{post.user.title} at {post.user.company}
							</p>
							<p className='text-xs text-gray-500 mt-1'>{post.timestamp} ago</p>
						</div>
					</div>
					<button className='text-gray-400 hover:text-gray-600 transition-colors duration-200'>
						<MoreHorizontal className='h-5 w-5' />
					</button>
				</div>
			</div>

			{/* Content */}
			<div className='px-6 pb-4'>
				<p className='text-gray-900 whitespace-pre-wrap'>{post.content}</p>
			</div>

			{/* Image */}
			{post.image && (
				<div className='px-6 pb-4'>
					<img
						src={post.image}
						alt='Post content'
						className='w-full rounded-lg object-cover max-h-96'
					/>
				</div>
			)}

			{/* Stats */}
			<div className='px-6 py-2 border-t border-gray-100'>
				<div className='flex items-center justify-between text-sm text-gray-500'>
					<span>{post.likes} likes</span>
					<div className='flex space-x-4'>
						<span>{post.comments} comments</span>
						<span>2 shares</span>
					</div>
				</div>
			</div>

			{/* Actions */}
			<div className='px-6 py-3 border-t border-gray-100'>
				<div className='flex items-center justify-around'>
					<button
						onClick={handleLike}
						className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
							isLiked
								? 'text-red-600 bg-red-50 hover:bg-red-100'
								: 'text-gray-600 hover:bg-gray-100'
						}`}
					>
						<Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
						<span className='text-sm font-medium'>Like</span>
					</button>

					<button
						onClick={() => setShowComments(!showComments)}
						className='flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-200'
					>
						<MessageCircle className='h-5 w-5' />
						<span className='text-sm font-medium'>Comment</span>
					</button>

					<button className='flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-200'>
						<Share className='h-5 w-5' />
						<span className='text-sm font-medium'>Share</span>
					</button>
				</div>
			</div>

			{/* Comments */}
			{showComments && (
				<div className='px-6 py-4 border-t border-gray-100 bg-gray-50'>
					<div className='flex space-x-3'>
						<img
							src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
							alt='Your avatar'
							className='h-8 w-8 rounded-full object-cover'
						/>
						<div className='flex-1 flex space-x-2'>
							<input
								type='text'
								value={comment}
								onChange={e => setComment(e.target.value)}
								placeholder='Add a comment...'
								className='flex-1 px-4 py-2 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
								onKeyPress={e => e.key === 'Enter' && handleComment()}
							/>
							<button
								onClick={handleComment}
								className='p-2 text-blue-600 hover:text-blue-700 transition-colors duration-200'
							>
								<Send className='h-4 w-4' />
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default PostCard
