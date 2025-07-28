import type { TimeSeriesData } from '$lib/types';

export const mockTimeSeriesData: TimeSeriesData[] = [
	// January 2024 - Different starting patterns
	{ date: '2024-01-10', uploaded: 8, usage: 12 },
	{ date: '2024-01-20', uploaded: 15, usage: 8 },
	{ date: '2024-01-30', uploaded: 12, usage: 18 },

	// February 2024 - Usage catches up
	{ date: '2024-02-10', uploaded: 22, usage: 25 },
	{ date: '2024-02-20', uploaded: 28, usage: 31 },
	{ date: '2024-02-28', uploaded: 19, usage: 28 },

	// March 2024 - Upload surge, usage lags
	{ date: '2024-03-10', uploaded: 45, usage: 22 },
	{ date: '2024-03-20', uploaded: 52, usage: 35 },
	{ date: '2024-03-30', uploaded: 38, usage: 48 },

	// April 2024 - Upload drops, usage stays high
	{ date: '2024-04-10', uploaded: 25, usage: 52 },
	{ date: '2024-04-20', uploaded: 18, usage: 46 },
	{ date: '2024-04-30', uploaded: 31, usage: 41 },

	// May 2024 - Both recover differently  
	{ date: '2024-05-10', uploaded: 41, usage: 38 },
	{ date: '2024-05-20', uploaded: 58, usage: 29 },
	{ date: '2024-05-30', uploaded: 46, usage: 55 },

	// June 2024 - Usage spikes while uploads dip
	{ date: '2024-06-10', uploaded: 32, usage: 68 },
	{ date: '2024-06-20', uploaded: 28, usage: 72 },
	{ date: '2024-06-30', uploaded: 44, usage: 59 },

	// July 2024 - Summer: uploads steady, usage drops
	{ date: '2024-07-10', uploaded: 48, usage: 41 },
	{ date: '2024-07-20', uploaded: 51, usage: 28 },
	{ date: '2024-07-30', uploaded: 47, usage: 35 },

	// August 2024 - Crossover patterns
	{ date: '2024-08-10', uploaded: 39, usage: 63 },
	{ date: '2024-08-20', uploaded: 67, usage: 44 },
	{ date: '2024-08-30', uploaded: 71, usage: 52 },

	// September 2024 - Back to school: different impacts
	{ date: '2024-09-10', uploaded: 83, usage: 38 },
	{ date: '2024-09-20', uploaded: 76, usage: 67 },
	{ date: '2024-09-30', uploaded: 64, usage: 84 },

	// October 2024 - Usage leads growth
	{ date: '2024-10-10', uploaded: 55, usage: 92 },
	{ date: '2024-10-20', uploaded: 73, usage: 97 },
	{ date: '2024-10-30', uploaded: 81, usage: 74 },

	// November 2024 - Opposite holiday effects
	{ date: '2024-11-10', uploaded: 94, usage: 58 },
	{ date: '2024-11-20', uploaded: 67, usage: 89 },
	{ date: '2024-11-30', uploaded: 108, usage: 71 },

	// December 2024 - Year-end divergence
	{ date: '2024-12-10', uploaded: 89, usage: 105 },
	{ date: '2024-12-20', uploaded: 125, usage: 43 },
	{ date: '2024-12-30', uploaded: 76, usage: 98 }
];