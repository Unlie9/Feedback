import React, { useState } from 'react'
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import PostCard from './components/PostCard'
import CreatePost from './components/CreatePost'
import FeedbackSection from './components/FeedbackSection'
import { User, Post, Feedback } from './types'

function App() {
	const [activeTab, setActiveTab] = useState<'posts' | 'feedback'>('posts')

	const [currentUser] = useState<User>({
		id: '1',
		name: 'Sarah Johnson',
		title: 'Senior Software Engineer',
		company: 'TechCorp Inc.',
		location: 'San Francisco, CA',
		avatar:
			'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
		connections: 486,
		feedbackCount: 12,
		about:
			'Passionate software engineer with 8+ years of experience building scalable web applications. Love working with React, Node.js, and cloud technologies.',
		experience: [
			{
				title: 'Senior Software Engineer',
				company: 'TechCorp Inc.',
				duration: '2020 - Present',
				description:
					'Lead frontend development team, architect scalable solutions',
			},
			{
				title: 'Software Engineer',
				company: 'StartupXYZ',
				duration: '2018 - 2020',
				description: 'Full-stack development, React and Node.js applications',
			},
		],
		skills: ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'GraphQL'],
	})

	const [feedbacks] = useState<Feedback[]>([
		{
			id: '1',
			fromUser: {
				id: '2',
				name: 'Michael Chen',
				title: 'Tech Lead',
				company: 'InnovateLab',
				avatar:
					'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
			},
			toUserId: '1',
			rating: 5,
			comment:
				'Sarah is an exceptional developer with strong technical skills. She delivered our React project ahead of schedule and with excellent code quality. Her attention to detail and problem-solving abilities are outstanding.',
			category: 'technical',
			timestamp: '2 weeks ago',
			projectContext: 'E-commerce Dashboard Redesign',
		},
		{
			id: '2',
			fromUser: {
				id: '3',
				name: 'Emily Rodriguez',
				title: 'Product Manager',
				company: 'DesignCo',
				avatar:
					'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
			},
			toUserId: '1',
			rating: 5,
			comment:
				'Working with Sarah was a pleasure. She communicates complex technical concepts clearly and always keeps stakeholders informed. Great collaboration skills!',
			category: 'communication',
			timestamp: '1 month ago',
			projectContext: 'Mobile App Development',
		},
		{
			id: '3',
			fromUser: {
				id: '4',
				name: 'David Kim',
				title: 'Senior Developer',
				company: 'CodeCraft',
				avatar:
					'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
			},
			toUserId: '1',
			rating: 4,
			comment:
				"Sarah is a reliable team player who always delivers quality work. She helped mentor junior developers and contributed significantly to our team's success.",
			category: 'teamwork',
			timestamp: '2 months ago',
			projectContext: 'API Integration Project',
		},
		{
			id: '4',
			fromUser: {
				id: '5',
				name: 'Lisa Wang',
				title: 'Engineering Manager',
				company: 'TechFlow',
				avatar:
					'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
			},
			toUserId: '1',
			rating: 5,
			comment:
				'Sarah demonstrated excellent leadership during our critical project. She coordinated the team effectively and made key technical decisions that led to project success.',
			category: 'leadership',
			timestamp: '3 months ago',
			projectContext: 'System Migration',
		},
	])

	const [posts, setPosts] = useState<Post[]>([
		{
			id: '1',
			user: {
				id: '1',
				name: 'Sarah Johnson',
				title: 'Senior Software Engineer',
				company: 'TechCorp Inc.',
				avatar:
					'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
			},
			content:
				'Excited to share that I just completed a major project using React and TypeScript! The new dashboard is now live and helping our team be more productive. 🚀',
			timestamp: '2h',
			likes: 24,
			comments: 8,
			image:
				'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
		},
		{
			id: '2',
			user: {
				id: '1',
				name: 'Sarah Johnson',
				title: 'Senior Software Engineer',
				company: 'TechCorp Inc.',
				avatar:
					'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
			},
			content:
				'Reflecting on my journey in tech. From junior developer to senior engineer, every challenge has been a learning opportunity. Grateful for this amazing career path!',
			timestamp: '1d',
			likes: 42,
			comments: 15,
		},
	])

	const handleLike = (postId: string) => {
		setPosts(
			posts.map(post =>
				post.id === postId ? { ...post, likes: post.likes + 1 } : post
			)
		)
	}

	const handleNewPost = (content: string, image?: string) => {
		const newPost: Post = {
			id: Date.now().toString(),
			user: {
				id: currentUser.id,
				name: currentUser.name,
				title: currentUser.title,
				company: currentUser.company,
				avatar: currentUser.avatar,
			},
			content,
			image,
			timestamp: 'now',
			likes: 0,
			comments: 0,
		}
		setPosts([newPost, ...posts])
	}

	return (
		<div className='min-h-screen bg-gray-50'>
			<Header currentUser={currentUser} />

			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12'>
				<div className='space-y-8'>
					{/* Profile Section */}
					<ProfileCard user={currentUser} />

					{/* Tab Navigation */}
					<div className='bg-white rounded-xl shadow-sm border border-gray-200'>
						<div className='flex border-b border-gray-200'>
							<button
								onClick={() => setActiveTab('posts')}
								className={`flex-1 px-6 py-4 text-center font-medium transition-all duration-200 ${
									activeTab === 'posts'
										? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
										: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
								}`}
							>
								My Posts ({posts.length})
							</button>
							<button
								onClick={() => setActiveTab('feedback')}
								className={`flex-1 px-6 py-4 text-center font-medium transition-all duration-200 ${
									activeTab === 'feedback'
										? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
										: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
								}`}
							>
								Received Feedbacks ({feedbacks.length})
							</button>
						</div>

						<div className='p-6'>
							{activeTab === 'posts' && (
								<div className='space-y-6'>
									<CreatePost
										onNewPost={handleNewPost}
										currentUser={currentUser}
									/>
									<div className='space-y-6'>
										{posts.map(post => (
											<PostCard key={post.id} post={post} onLike={handleLike} />
										))}
									</div>
								</div>
							)}

							{activeTab === 'feedback' && (
								<FeedbackSection feedbacks={feedbacks} />
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
