// $lib/types.ts

// Core User Types
export interface User {
	id: string;
	name: string;
	email?: string;
	avatar?: string;
	role: UserRole;
	lastActiveDate?: Date;
	stillActive: boolean;
	totalResourcesAccessed?: number;
	completedResources?: number;
	currentlyAccessingResource?: string | null;
	department?: string;
	joinedDate?: Date;
}

export type UserRole = 'Admin' | 'Mentor' | 'Coach' | 'Mentee' | 'Coachee' | 'User';

// Resource Types
export interface Resource {
	id: string;
	title: string;
	description: string;
	category: ResourceCategory;
	language: string;
	provider: string;
	role: UserRole;
	type: ResourceType;
	path: string;
	uploadedBy: string;
	uploadedAt: Date;
	viewCountByYear: number;
	viewCountByMonth: number;
	filePath?: string;
	trending: 'up' | 'down' | 'stable';
	trendingNumber: number;
	resourcesUploaded: number;
	completionRate: number;
	uniqueAccess: number;
	hasBeenUtilized: boolean;
}

export type ResourceType = 'Video' | 'Document' | 'Lesson' | 'Archive';
export type ResourceCategory =
	| 'Conflict Resolution'
	| 'Productivity'
	| 'Teamwork'
	| 'Leadership'
	| 'Communication'
	| 'Team Building'
	| 'Personal Development'
	| 'Wellness'
	| 'Other';

// Dashboard Metrics Types
export interface DashboardMetrics {
	activeUsersAccessRate: MetricValue;
	resourcesUtilized: MetricValue;
	completionRate: MetricValue;
	uniqueAccesses: MetricValue;
	resourcesUploaded: MetricValue;
}

export interface MetricValue {
	value: number;
	percentage?: number;
	change: number;
	label: string;
	total?: number;
}

// Chart Data Types
export interface CategoryData {
	category: string;
	percentage: number;
	value: number;
	color: string;
}

export interface TimeSeriesData {
	date: string; // or Date
	uploaded: number;
	usage: number;
}

// Content Access Types
export interface ContentAccess {
	id: string;
	user: User;
	accessedContent: string;
	openedOn: Date;
	closedOn?: Date;
	provider: string;
	providerType: 'Pack' | 'Mentor' | 'External';
}

// Upload Form Types
export interface UploadResourceForm {
	title: string;
	description: string;
	category: ResourceCategory;
	language: string;
	provider: string;
	role: UserRole;
	file?: File;
}

// Most Used Resources
export interface MostUsedResource {
	id: string;
	title: string;
	category: ResourceCategory;
	viewCountByYear: number;
	viewCountByMonth: number;
	trending: 'up' | 'down' | 'stable';
}

// Filter and Search Types
export interface ResourceFilters {
	provider?: string;
	category?: ResourceCategory;
	language?: string;
	role?: UserRole;
	type?: ResourceType;
	dateFrom?: Date;
	dateTo?: Date;
}

export interface SearchParams {
	query: string;
	filters: ResourceFilters;
}

// API Response Types
export interface ApiResponse<T> {
	data: T;
	success: boolean;
	message?: string;
}

export interface PaginatedResponse<T> {
	data: T[];
	pagination: {
		page: number;
		limit: number;
		total: number;
		totalPages: number;
	};
}

// Navigation Types
export type NavigationTab = 'All' | 'Videos' | 'Documents' | 'Lessons' | 'Archive';

export interface NavigationState {
	activeTab: NavigationTab;
	searchQuery: string;
	filters: ResourceFilters;
}

// Component Props Types
export interface DashboardProps {
	metrics: DashboardMetrics;
	categoryData: CategoryData[];
	timeSeriesData: TimeSeriesData[];
	mostUsedResources: MostUsedResource[];
	recentAccess: ContentAccess[];
}

export interface MetricCardProps {
	title: string;
	value: MetricValue;
	icon?: string;
	color?: 'blue' | 'orange' | 'gray';
}

export interface ChartProps {
	data: unknown[];
	title?: string;
	height?: number;
	width?: number;
}

// Form Validation Types
export interface FormErrors {
	[key: string]: string | undefined;
}

export interface UploadState {
	isUploading: boolean;
	progress: number;
	error?: string;
	success?: boolean;
}

// Store Types (for Svelte stores)
export interface AppState {
	user: User | null;
	resources: Resource[];
	metrics: DashboardMetrics | null;
	navigation: NavigationState;
	loading: boolean;
	error: string | null;
}
