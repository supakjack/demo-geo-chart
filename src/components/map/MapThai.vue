<script setup lang="ts">
import { useLeaflet } from '@/composables'
import { nanoid } from 'nanoid'
import streetLamp from '@/assets/image/street-lamp.svg'
const { L } = useLeaflet()

const prop = defineProps<{
    id?: string
    group: string
    currentTime: string
    lastCommand: string
    lastStatus: string
    vehicleMaker: Group[]
}>()

const genarateId = computed<string>(() => nanoid())
onMounted(() => {
    const map = L.map(prop.id || genarateId.value).setView(
        [12.605443, 99.950003],
        5
    )
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map)
    const customIcon = L.icon({
        iconUrl: streetLamp,
        iconSize: [32, 32],
        iconAnchor: [20, 0]
    })
    const customLabel =
        "<div class='flex flex-col'>" +
        '<div>' +
        'กลุ่ม : ' +
        prop.group +
        '</div>' +
        '<div>' +
        'เลขหลอด :' +
        prop.id +
        '</div>' +
        '<div>' +
        'เวลาการทำงานล่าสุด :' +
        prop.currentTime +
        '</div>' +
        '<div>' +
        'คำสั่งล่าสุด : ' +
        prop.lastCommand +
        '</div>' +
        '<div>' +
        'สถานะล่าสุด : ' +
        prop.lastStatus +
        '</div>' +
        '<div>' +
        'เลขครุภัณฑ์ : ' +
        prop.id +
        '</div>' +
        '<div>' +
        'รหัสเสา : ' +
        prop.id +
        '</div>' +
        '</div>' +
        "<div class='flex flex-row'>" +
        '<div>' +
        "<button type='button' class='btn btn-success'>คำสั่งเปิด</button>" +
        '</div>' +
        '<div>' +
        "<button type='button' class='btn btn-secondary'>คำสั่งปิด</button>" +
        '</div>' +
        '<div>' +
        "<button type='button' class='btn btn-primary'>อ่านข้อมูลปัจจุบัน</button>" +
        '</div>' +
        '<div>' +
        "<button type='button' class='btn btn-ghost'>ปิด</button>" +
        '</div>' +
        '</div>'

    prop.vehicleMaker.map((vm) => {
        L.marker([vm.location![0], vm.location![1]], {
            icon: L.icon({
                iconUrl: vm.icon || '',
                iconSize: [32, 32],
                iconAnchor: [20, 0]
            })
        })
            .addTo(map)
            .bindPopup(customLabel)
    })
    // const bikeMarker = L.marker([12.605005, 99.949972], {
    //     icon: prop.vehicleMaker
    // })
    //     .addTo(map)
    //     .bindPopup(customLabel)
    // const motoMarker = L.marker([18.365663, 103.639907], {
    //     icon: prop.vehicleMaker
    // })
    //     .addTo(map)
    //     .bindPopup(customLabel)
})
</script>
<template>
    <div :id="id || genarateId"></div>
</template>
