<script lang="ts">
	import ResourcesHeader from './components/ResourcesHeader.svelte';
	import UploadModal from './components/UploadModal.svelte';

	// Modal state
	let showUploadModal: boolean = false;

	function handleUpload() {
		showUploadModal = true;
	}

	function handleModalClose() {
		showUploadModal = false;
	}

	function handleModalSubmit(event: { detail: any }) {
		console.log('Form submitted with data:', event.detail);
		alert('Resource Uploaded Successfully!');
		showUploadModal = false;
	}
</script>

<main class="mx-auto max-w-7xl rounded-lg p-8 shadow-2xl">
	<ResourcesHeader onUpload={handleUpload} />
	<slot />
</main>
<UploadModal show={showUploadModal} on:close={handleModalClose} on:submit={handleModalSubmit} />
