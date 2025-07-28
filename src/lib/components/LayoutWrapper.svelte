<script lang="ts">
	export let className = '';
</script>

<main class={`mx-auto my-8 max-w-[1200px] px-6 ${className}`}>
	<slot />
</main>
