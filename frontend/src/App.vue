<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
</script>

<template>
  <div class="flex min-h-screen gap-4 p-4">
    <AppSidebar />

    <main class="min-w-0 flex-1 rounded-3xl bg-white p-6 shadow-sm">
      <!-- A view da rota atual é renderizada aqui (veja src/router/index.ts) -->
      <RouterView />
    </main>
  </div>
</template>
