<script setup lang="ts">
import Images from 'virtual:images'
import IB from './src/assets/images/b.png'
</script>

<template>
  <div>
    unplugin-vue-images
  </div>

  <img :src="Images.IA">
  <img :src="IA">
  <img :src="IB">
  <img :src="IInnerC">
  <img :src="ID">
</template>
