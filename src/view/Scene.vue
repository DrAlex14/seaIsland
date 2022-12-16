<template>
    <div class="scene" id="scene">
        
    </div>
</template>

<script setup>
import Base3D from '../util/base3D'
import { reactive, onMounted } from 'vue'
const data = reactive({
    Base3D: {}
})
onMounted(() => {
    data.Base3D = new Base3D('#scene')
})

</script>

<style>

</style>