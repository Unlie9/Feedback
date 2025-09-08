export interface User {
	id: string
	name: string
	title: string
	company: string
	location?: string
	avatar: string
	connections: number
	about?: string
	experience?: Experience[]
	skills?: string[]
	feedbackCount?: number
}

export interface Experience {
	title: string
	company: string
	duration: string
	description: string
}

export interface Feedback {
	id: string
	fromUser: {
		id: string
		name: string
		title: string
		company: string
		avatar: string
	}
	toUserId: string
	rating: number
	comment: string
	category:
		| 'technical'
		| 'communication'
		| 'teamwork'
		| 'leadership'
		| 'problem-solving'
	timestamp: string
	projectContext?: string
}

export interface Post {
	id: string
	user: {
		id: string
		name: string
		title: string
		company: string
		avatar: string
	}
	content: string
	image?: string
	timestamp: string
	likes: number
	comments: number
}
