import type { CategoryData, Resource, User } from '$lib/types';

export function formatDate(date: Date): string {
	return (
		date.toLocaleDateString('en-US', {
			month: '2-digit',
			day: '2-digit',
			year: 'numeric'
		}) +
		' ' +
		date.toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false
		})
	);
}

// HELPERS FOR MOCKED DATA
// RESOURCES
export const getMostUsedByYear = (mockResources: Resource[], count: number = 5) =>
	[...mockResources]
		.filter((resource) => resource.hasBeenUtilized)
		.sort((a, b) => b.viewCountByYear - a.viewCountByYear)
		.slice(0, count);

export const getMostUsedByMonth = (mockResources: Resource[], count: number = 5) =>
	[...mockResources]
		.filter((resource) => resource.hasBeenUtilized)
		.sort((a, b) => b.viewCountByMonth - a.viewCountByMonth)
		.slice(0, count);

export const getByCompletionRate = (mockResources: Resource[], count: number = 10) =>
	[...mockResources].sort((a, b) => b.completionRate - a.completionRate).slice(0, count);

export const getUtilizedResourcesPercentage = (mockResources: Resource[]): number => {
	const utilized = mockResources.filter((resource) => resource.hasBeenUtilized);
	return Math.round((utilized.length / mockResources.length) * 100);
};

export const getTotalUploadedResources = (mockResources: Resource[]): number => {
	return mockResources.reduce((a, c) => {
		return a + c.resourcesUploaded;
	}, 0);
};

export const getCompletionRateResources = (mockResources: Resource[]): number => {
	return mockResources.reduce((a, c) => {
		return Math.floor(a + c.completionRate) / mockResources.length;
	}, 0);
};

export const getUniqueAccessResources = (mockResources: Resource[]): number => {
	return mockResources.reduce((a, c) => {
		return Math.floor(a + c.uniqueAccess);
	}, 0);
};

export const extractCategoryData = (resources: Resource[]): CategoryData[] => {
	const categoryCounts = resources.reduce(
		(acc, resource) => {
			acc[resource.category] = (acc[resource.category] || 0) + 1;
			return acc;
		},
		{} as Record<string, number>
	);

	const totalResources = resources.length;
	const colors = ['#FF8A65', '#FFB74D', '#FFCC80', '#FFAB91', '#FFCC80', '#FFE0B2', '#FFF3E0'];

	return Object.entries(categoryCounts)
		.map(([category, count], index) => {
			const percentage = Math.round((count / totalResources) * 100);
			return {
				category,
				percentage,
				value: percentage,
				color: colors[index % colors.length]
			};
		})
		.sort((a, b) => b.percentage - a.percentage); // Sort by percentage descending
};

// USERS
export const getActiveUsersPercentage = (users: User[]): number => {
	const activeUsers = users.filter((user) => user.stillActive);
	return Math.round((activeUsers.length / users.length) * 100);
};
