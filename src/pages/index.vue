<script setup lang="ts"></script>
<template>
    <div class="card lg:card-side bg-base-100 shadow-xl min-h-64">
        <MapThai :id="'map1'" class="h-xs w-full" />
        <div class="card-body">
            <h2 class="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Listen</button>
            </div>
        </div>
    </div>

    <div class="card lg:card-side bg-base-100 shadow-xl min-h-64">
        <MapThai :id="'map2'" class="h-xs w-full" />
        <div class="card-body">
            <h2 class="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Listen</button>
            </div>
        </div>
    </div>
</template>
