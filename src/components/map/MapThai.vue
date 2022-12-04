<script setup lang="ts">
import { useLeaflet } from '@/composables'
import { nanoid } from 'nanoid'
const { L } = useLeaflet()

const prop = defineProps<{
    id?: string
}>()

const genarateId = computed<string>(() => nanoid())
onMounted(() => {
    const map = L.map(prop.id || genarateId.value).setView([13.32916, 459.865551], 13)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map)
    const customLabel =
        "<div class='artboard artboard-horizontal phone - 1'></div>" +
        "Marker" +
        "<div class='btn-group btn-group-vertical lg:btn-group-horizontal'>" +
        "<button type='button' class='btn btn-success'>คำสั่งเปิด</button>" +
        "<button type='button' class='btn btn-secondary'>คำสั่งปิด</button>" +
        "<button type='button' class='btn btn-primary'>อ่านข้อมูลปัจจุบัน</button>" +
        "<button type='button' class='btn btn-ghost'>ปิด</button>" +
        "</div>" +
        "</div>"

    const marker = L.marker([13.32916, 459.865551]).addTo(map).bindPopup(customLabel);
})
</script>
<template>
    <div :id="id || genarateId"></div>
</template>
