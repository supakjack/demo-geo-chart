<script setup lang="ts">
defineProps<{
    slug: string
}>()
</script>
<template>
    <div class="badge badge-primary gap-2 cursor-pointer">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-4 h-4 stroke-current"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
            ></path>
        </svg>
        {{ slug }}
    </div>
</template>
