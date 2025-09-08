import React, { useState } from 'react'
import { Image, X } from 'lucide-react'
import { User } from '../types'

interface CreatePostProps {
	onNewPost: (content: string, image?: string) => void
	currentUser: User
}

const CreatePost: React.FC<CreatePostProps> = ({ onNewPost, currentUser }) => {
	const [content, setContent] = useState('')
	const [isExpanded, setIsExpanded] = useState(false)
	const [selectedImage, setSelectedImage] = useState<string | null>(null)

	const handleSubmit = () => {
		if (content.trim()) {
			onNewPost(content, selectedImage || undefined)
			setContent('')
			setSelectedImage(null)
			setIsExpanded(false)
		}
	}

	const sampleImages = [
		'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
		'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
		'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
	]

	return (
		<div className='bg-white rounded-xl shadow-sm border border-gray-200 p-6'>
			<div className='flex space-x-4'>
				<img
					src={currentUser.avatar}
					alt={currentUser.name}
					className='h-12 w-12 rounded-full object-cover'
				/>
				<div className='flex-1'>
					<textarea
						value={content}
						onChange={e => setContent(e.target.value)}
						onFocus={() => setIsExpanded(true)}
						placeholder='Share your thoughts with your network...'
						className='w-full p-4 bg-gray-50 rounded-lg border-none resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200'
						rows={isExpanded ? 4 : 3}
					/>

					{selectedImage && (
						<div className='mt-4 relative inline-block'>
							<img
								src={selectedImage}
								alt='Selected'
								className='max-w-xs rounded-lg'
							/>
							<button
								onClick={() => setSelectedImage(null)}
								className='absolute top-2 right-2 p-1 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all duration-200'
							>
								<X className='h-4 w-4' />
							</button>
						</div>
					)}

					{isExpanded && (
						<div className='mt-4 space-y-4'>
							<div className='flex items-center'>
								<button
									onClick={() =>
										setSelectedImage(
											sampleImages[
												Math.floor(Math.random() * sampleImages.length)
											]
										)
									}
									className='flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200'
								>
									<Image className='h-5 w-5' />
									<span className='text-sm'>Photo</span>
								</button>
							</div>

							<div className='flex justify-end space-x-3'>
								<button
									onClick={() => {
										setIsExpanded(false)
										setContent('')
										setSelectedImage(null)
									}}
									className='px-6 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200'
								>
									Cancel
								</button>
								<button
									onClick={handleSubmit}
									disabled={!content.trim()}
									className='px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200'
								>
									Post
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default CreatePost
