import type { ContentAccess } from '$lib/types';
import { mockUsers } from './users';

export const mockContentAccess: ContentAccess[] = [
	{
		id: '1',
		user: mockUsers[0], // Jane Doe
		accessedContent: 'Conflict Resolution',
		openedOn: new Date('2025-01-27T11:55:00'),
		closedOn: new Date('2025-01-27T12:55:00'),
		provider: 'Pack',
		providerType: 'Pack'
	},
	{
		id: '2',
		user: mockUsers[0], // Jane Doe
		accessedContent: 'How to stay motivated',
		openedOn: new Date('2025-01-27T14:30:00'),
		closedOn: undefined,
		provider: 'Pack',
		providerType: 'Pack'
	},
	{
		id: '3',
		user: mockUsers[1], // Sarah Wilson
		accessedContent: 'How to lead new teams',
		openedOn: new Date('2025-01-28T10:30:00'),
		closedOn: new Date('2025-01-28T11:15:00'),
		provider: 'Pack',
		providerType: 'Pack'
	},
	{
		id: '4',
		user: mockUsers[1], // Sarah Wilson
		accessedContent: 'Negotiation Skills for Managers',
		openedOn: new Date('2025-01-28T15:20:00'),
		closedOn: new Date('2025-01-28T16:45:00'),
		provider: 'Pack',
		providerType: 'Pack'
	},
	{
		id: '5',
		user: mockUsers[3], // Mike Johnson
		accessedContent: 'The secret to giving great feedback',
		openedOn: new Date('2025-01-25T09:45:00'),
		closedOn: new Date('2025-01-25T10:30:00'),
		provider: 'External',
		providerType: 'External'
	},
	{
		id: '6',
		user: mockUsers[4], // Dr. Lisa Martinez
		accessedContent: 'Building Emotional Intelligence',
		openedOn: new Date('2025-01-27T13:15:00'),
		closedOn: undefined,
		provider: 'External',
		providerType: 'External'
	},
	{
		id: '7',
		user: mockUsers[5], // David Chen
		accessedContent: 'Project Management Fundamentals',
		openedOn: new Date('2025-01-28T09:00:00'),
		closedOn: undefined,
		provider: 'Pack',
		providerType: 'Pack'
	},
	{
		id: '8',
		user: mockUsers[5], // David Chen
		accessedContent: 'Effective Time Management',
		openedOn: new Date('2025-01-27T16:30:00'),
		closedOn: new Date('2025-01-27T17:45:00'),
		provider: 'Pack',
		providerType: 'Pack'
	},
	{
		id: '9',
		user: mockUsers[7], // Maria Rodriguez
		accessedContent: 'Stress Management Techniques',
		openedOn: new Date('2025-01-27T11:20:00'),
		closedOn: undefined,
		provider: 'External',
		providerType: 'External'
	},
	{
		id: '10',
		user: mockUsers[7], // Maria Rodriguez
		accessedContent: 'Mindfulness for Busy Professionals',
		openedOn: new Date('2025-01-26T14:00:00'),
		closedOn: new Date('2025-01-26T15:30:00'),
		provider: 'External',
		providerType: 'External'
	},
	{
		id: '11',
		user: mockUsers[8], // Robert Kim
		accessedContent: 'Cross-Cultural Communication',
		openedOn: new Date('2025-01-28T08:45:00'),
		closedOn: undefined,
		provider: 'External',
		providerType: 'External'
	},
	{
		id: '12',
		user: mockUsers[8], // Robert Kim
		accessedContent: 'Negotiation Skills for Managers',
		openedOn: new Date('2025-01-27T10:15:00'),
		closedOn: new Date('2025-01-27T12:00:00'),
		provider: 'Pack',
		providerType: 'Pack'
	},
	{
		id: '13',
		user: mockUsers[9], // Admin User
		accessedContent: 'How to deal with conflict in a work environment',
		openedOn: new Date('2025-01-28T07:30:00'),
		closedOn: new Date('2025-01-28T08:45:00'),
		provider: 'Pack',
		providerType: 'Pack'
	},
	{
		id: '14',
		user: mockUsers[10], // Jennifer Walsh
		accessedContent: 'Project Management Fundamentals',
		openedOn: new Date('2025-01-26T13:20:00'),
		closedOn: new Date('2025-01-26T15:10:00'),
		provider: 'Pack',
		providerType: 'Pack'
	},
	{
		id: '15',
		user: mockUsers[12], // Michael Chang
		accessedContent: 'Building High-Performance Teams',
		openedOn: new Date('2025-01-24T10:00:00'),
		closedOn: undefined,
		provider: 'Pack',
		providerType: 'Pack'
	},
	{
		id: '16',
		user: mockUsers[12], // Michael Chang
		accessedContent: 'How to lead new teams',
		openedOn: new Date('2025-01-23T14:45:00'),
		closedOn: new Date('2025-01-23T16:20:00'),
		provider: 'Pack',
		providerType: 'Pack'
	},
	{
		id: '17',
		user: mockUsers[14], // Laura Johnson
		accessedContent: 'Career Development Planning',
		openedOn: new Date('2025-01-25T11:30:00'),
		closedOn: undefined,
		provider: 'External',
		providerType: 'External'
	},
	{
		id: '18',
		user: mockUsers[14], // Laura Johnson
		accessedContent: 'How to stay motivated',
		openedOn: new Date('2025-01-24T15:15:00'),
		closedOn: new Date('2025-01-24T16:00:00'),
		provider: 'Pack',
		providerType: 'Pack'
	},
	{
		id: '19',
		user: mockUsers[2], // John Smith (inactive user - older access)
		accessedContent: 'Digital Communication Etiquette',
		openedOn: new Date('2024-10-14T09:30:00'),
		closedOn: new Date('2024-10-14T10:45:00'),
		provider: 'Pack',
		providerType: 'Pack'
	},
	{
		id: '20',
		user: mockUsers[6], // Alex Thompson (inactive user - older access)
		accessedContent: 'Remote Team Collaboration Tips',
		openedOn: new Date('2024-11-19T16:20:00'),
		closedOn: new Date('2024-11-19T17:30:00'),
		provider: 'Pack',
		providerType: 'Pack'
	}
];
