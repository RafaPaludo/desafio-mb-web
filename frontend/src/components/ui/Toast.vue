<template>
  <div class="toast-container" v-if="store.active">
    <Button
      class="toast-close"
      variant="outline"
      @click="store.active = !store.active"
    >
      x
    </Button>

    <span class="toast-title">
      {{store.title}}
    </span>

    <span v-if="store.message">{{ store.message }}</span>
  </div>
</template>

<script setup>
import Button from '@/components/ui/Button.vue';

import { toastStore } from '@/store/toastStore';

const store = toastStore;
</script>

<style scoped lang="scss">
.toast-container {
  min-width: 300px;
  position: absolute;
  bottom: 5rem;
  background-color: var(--white);
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: rgba(11, 11, 11, 0.08) 0px 0px 1px, rgba(11, 11, 11, 0.06) 0px 0px 2px, rgba(11, 11, 11, 0.04) 0px 4px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.2rem;
}

.toast-title {
  font-weight: 700;
}

.toast-close {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  width: 20px;
  height: 20px;
  padding: 0;
  line-height: 0;
  border: none;
  font-size: 1.5rem;
}
</style>