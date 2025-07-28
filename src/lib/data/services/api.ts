/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
	DashboardMetrics,
	Resource,
	ContentAccess,
	MostUsedResource,
	CategoryData,
	TimeSeriesData,
	ApiResponse,
	PaginatedResponse
} from '$lib/types';
import { mockData } from '../mock';

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class MockApiService {
	static async getDashboardMetrics(): Promise<ApiResponse<DashboardMetrics>> {
		await delay(500);
		return {
			data: mockData.metrics,
			success: true,
			message: 'Metrics retrieved successfully'
		};
	}

	static async getResources(page = 1, limit = 10): Promise<PaginatedResponse<Resource>> {
		await delay(300);
		const startIndex = (page - 1) * limit;
		const endIndex = startIndex + limit;
		const paginatedData = mockData.resources.slice(startIndex, endIndex);

		return {
			data: paginatedData,
			pagination: {
				page,
				limit,
				total: mockData.resources.length,
				totalPages: Math.ceil(mockData.resources.length / limit)
			}
		};
	}

	static async getMostUsedResources(): Promise<ApiResponse<MostUsedResource[]>> {
		await delay(200);
		return {
			data: mockData.mostUsedResources,
			success: true
		};
	}

	static async getContentAccess(page = 1, limit = 10): Promise<PaginatedResponse<ContentAccess>> {
		await delay(400);
		const startIndex = (page - 1) * limit;
		const endIndex = startIndex + limit;
		const paginatedData = mockData.contentAccess.slice(startIndex, endIndex);

		return {
			data: paginatedData,
			pagination: {
				page,
				limit,
				total: mockData.contentAccess.length,
				totalPages: Math.ceil(mockData.contentAccess.length / limit)
			}
		};
	}

	static async getCategoryData(): Promise<ApiResponse<CategoryData[]>> {
		await delay(250);
		return {
			data: mockData.categoryData,
			success: true
		};
	}

	static async getTimeSeriesData(): Promise<ApiResponse<TimeSeriesData[]>> {
		await delay(350);
		return {
			data: mockData.timeSeriesData,
			success: true
		};
	}

	static async uploadResource(resource: FormData): Promise<ApiResponse<Resource>> {
		await delay(1000); // Simulate file upload time

		// In a real app, you'd process the FormData and create a new resource
		const newResource: Resource = {
			id: String(Date.now()),
			title: resource.get('title') as string,
			description: resource.get('description') as string,
			category: resource.get('category') as any,
			language: resource.get('language') as string,
			provider: resource.get('provider') as string,
			role: resource.get('role') as any,
			type: 'Document',
			path: 'New Upload Path',
			uploadedBy: 'Current User',
			uploadedAt: new Date(),
			viewCount: 0
		};

		return {
			data: newResource,
			success: true,
			message: 'Resource uploaded successfully'
		};
	}
}
