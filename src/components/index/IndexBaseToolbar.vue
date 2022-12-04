<template>
    <div class="flex justify-between mt-4 mb-4">
        <div class="flex items-start gap-4">
            <slot name="category" />
        </div>
        <div class="flex items-start gap-4 justify-end">
            <div class="flex flex-col w-xs">
                <slot name="searchbar" />
                <div class="mt-1 flex gap-1 flex-wrap">
                    <slot name="tag" />
                </div>
            </div>
            <slot name="submit" />
        </div>
    </div>
</template>
