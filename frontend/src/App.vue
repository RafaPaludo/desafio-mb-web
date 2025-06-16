<template>
  <main>
    <PageRegistration />
    <Toast />
  </main>
</template>

<script setup>
import PageRegistration from '@/views/PageRegistration.vue';
import Toast from '@/components/ui/Toast.vue';
</script>

<style lang="scss">
main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  position: relative;
}
</style>
