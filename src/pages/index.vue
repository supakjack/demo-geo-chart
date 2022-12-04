<script setup lang="ts">
const vehicleMaker = ref<Group[]>([])
function handleSubmit(value: Group[]) {
    vehicleMaker.value = []
    setTimeout(() => {
        vehicleMaker.value = value
    }, 1000)
    console.log(vehicleMaker.value)
}
</script>

<template>
    <IndexToolbar @click:submit="handleSubmit" />
    <IndexCard :vehicle-maker="vehicleMaker" class="z-0" />
</template>
