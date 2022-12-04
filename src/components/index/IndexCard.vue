<script setup lang="ts">
const prop = defineProps<{
    vehicleMaker: Group[]
}>()
</script>

<template>
    <div class="card lg:card-side bg-base-100 shadow-xl min-h-64">
        <MapThai
            class="h-xs w-full max-w-4xl"
            id="520119"
            group="All,โคมเลขคู่"
            last-command="ปิด"
            last-status="ปิด"
            current-time="2022-12-03 09:10:04"
            v-if="prop.vehicleMaker.length"
            :vehicleMaker="prop.vehicleMaker"
        />
        <div class="card-body">
            <h2 class="card-title">Demo แผนที่</h2>
            <p>ลองค้นหาจากเมนูด้านบน</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">มีคำถาาม ?</button>
            </div>
        </div>
    </div>
</template>
