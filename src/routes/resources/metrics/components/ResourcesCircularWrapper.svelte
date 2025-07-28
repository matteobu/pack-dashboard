<script>
	import CircularProgress from '../../../../lib/components/Charts/CircularProgress.svelte';
	import { mockData } from '$lib/data/mock';
	import { getActiveUsersPercentage, getUtilizedResourcesPercentage } from '../../utils/helpers';
	const { resources, users } = mockData;
	const percentageOfUtilizedResources = getUtilizedResourcesPercentage(resources);
	const activeUsers = getActiveUsersPercentage(users);
</script>

<div class="grid grid-cols-2 gap-6">
	<CircularProgress
		percentage={activeUsers}
		label="Active Users<br />Access Rate"
		color="#60A5FA"
	/>
	<CircularProgress
		percentage={percentageOfUtilizedResources}
		label="Resources<br />Utilized"
		color="#FB923C"
	/>
</div>
