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
    marker?: Group[]
}>()

const genarateId = computed<string>(() => nanoid())
onMounted(() => {
    const map = L.map(prop.id || genarateId.value).setView(
        [12.611077, 99.895801],
        10
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

    L.marker([13.32916, 459.865551], { icon: customIcon })
        .addTo(map)
        .bindPopup(customLabel)

    console.log(prop.marker)

    prop.marker
        ?.filter((marker) => marker.img && marker.la && marker.long)
        .map((marker) => {
            console.log(marker)

            L.marker([marker.la || 0, marker.long || 0], {
                icon: L.icon({
                    iconUrl: marker.img || '',
                    iconSize: [32, 32],
                    iconAnchor: [20, 0]
                })
            })
                .addTo(map)
                .bindPopup(customLabel)
        })
})
</script>
<template>
    <div :id="id || genarateId"></div>
</template>
