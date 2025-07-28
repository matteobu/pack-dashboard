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

	function handleModalSubmit(event: { detail: unknown }) {
		console.log(event);
		alert(
			'✅ Upload Complete*!\n\n*Terms and conditions apply:\n- File exists only in your heart ❤️\n- Database is powered by hopes and dreams 🌟\n- Persistence sold separately 💸\n\n(Blame the deadline, not the developer! ⏰)'
		);

		showUploadModal = false;
	}
</script>

<main class="mx-auto max-w-7xl rounded-lg p-8 shadow-2xl">
	<ResourcesHeader onUpload={handleUpload} />
	<slot />
</main>
<UploadModal show={showUploadModal} on:close={handleModalClose} on:submit={handleModalSubmit} />
