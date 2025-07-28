<script lang="ts">
	import type { UploadResourceForm } from '$lib/types';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let show: boolean = false;

	let uploadForm: UploadResourceForm = {
		title: '',
		description: '',
		category: 'Conflict Resolution',
		language: 'English',
		provider: 'Pack',
		role: 'Mentor'
	};

	function closeModal() {
		// Reset form
		uploadForm = {
			title: '',
			description: '',
			category: 'Conflict Resolution',
			language: 'English',
			provider: 'Pack',
			role: 'Mentor'
		};
		dispatch('close');
	}

	function submitUpload() {
		dispatch('submit', uploadForm);
		closeModal();
	}
</script>

{#if show}
	<div
		class="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-500/50 p-4"
	>
		<div class="relative mx-auto w-full max-w-2xl rounded-lg bg-white shadow-xl">
			<div class="p-6">
				<div class="mb-6 flex items-center justify-between">
					<h3 class="text-xl font-semibold text-gray-900">Upload Resource</h3>
					<button
						aria-label="close modal"
						on:click={closeModal}
						class="p-1 text-gray-400 hover:text-gray-600"
					>
						<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							></path>
						</svg>
					</button>
				</div>

				<form on:submit|preventDefault={submitUpload} class="space-y-5">
					<div>
						<input
							type="text"
							placeholder="Title*"
							bind:value={uploadForm.title}
							class="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
							required
						/>
					</div>

					<div>
						<textarea
							placeholder="Description*"
							bind:value={uploadForm.description}
							rows="4"
							class="w-full resize-none rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
							required
						></textarea>
					</div>

					<div>
						<select
							bind:value={uploadForm.category}
							class="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
						>
							<option value="Conflict Resolution">Conflict Resolution</option>
							<option value="Leadership">Leadership</option>
							<option value="Communication">Communication</option>
							<option value="Personal Development">Personal Development</option>
							<option value="Wellness">Wellness</option>
							<option value="Productivity">Productivity</option>
							<option value="Teamwork">Teamwork</option>
						</select>
					</div>

					<div>
						<select
							bind:value={uploadForm.language}
							class="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
						>
							<option value="English">English</option>
							<option value="Spanish">Spanish</option>
							<option value="French">French</option>
						</select>
					</div>

					<div>
						<select
							bind:value={uploadForm.provider}
							class="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
						>
							<option value="Pack">Pack</option>
							<option value="External">External</option>
						</select>
					</div>

					<div>
						<select
							bind:value={uploadForm.role}
							class="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
						>
							<option value="Mentor">Mentor / Coach</option>
							<option value="Coachee">Mentee / Coachee</option>
						</select>
					</div>

					<div>
						<div class="flex items-center">
							<input
								type="text"
								placeholder="No file selected*"
								readonly
								class="flex-1 rounded-l-md border border-gray-300 bg-gray-50 px-4 py-3 text-sm"
							/>
							<button
								type="button"
								class="rounded-r-md border border-l-0 border-gray-300 bg-white px-6 py-3 text-sm transition-colors hover:bg-gray-50"
							>
								Select file
							</button>
						</div>
					</div>

					<div class="flex justify-end pt-4">
						<button
							type="submit"
							class="rounded-md bg-orange-500 px-8 py-3 font-medium text-white transition-colors hover:bg-orange-600"
						>
							Upload
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
{/if}
