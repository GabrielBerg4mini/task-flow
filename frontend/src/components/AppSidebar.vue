<script setup lang="ts">
import {
  LayoutDashboard,
  Clock,
  FileText,
  ClipboardList,
  Filter,
  Receipt,
  Map,
  CalendarDays,
  Briefcase,
} from 'lucide-vue-next'

// Exemplo de v-for sobre dados estáticos. Cada ícone é um componente Vue,
// renderizado dinamicamente com <component :is="...">.
// Só "Dashboard" fica ativo: os outros itens são decorativos (fora do escopo do MVP).
const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Time Tracking', icon: Clock, active: false },
  { label: 'Documents', icon: FileText, active: false },
  { label: 'Tasks', icon: ClipboardList, active: false },
  { label: 'Lead pipeline', icon: Filter, active: false },
  { label: 'Invoices', icon: Receipt, active: false },
  { label: 'Map', icon: Map, active: false },
  { label: 'Schedule', icon: CalendarDays, active: false },
  { label: 'Projects', icon: Briefcase, active: false },
]
</script>

<template>
  <aside class="hidden w-64 shrink-0 rounded-3xl bg-white p-5 shadow-sm lg:block">
    <p class="mb-8 text-3xl tracking-tight text-brand">
      <span class="font-light">Task</span><span class="font-bold">Flow</span>
    </p>

    <nav class="flex flex-col gap-1">
      <a
        v-for="item in navItems"
        :key="item.label"
        href="#"
        class="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium"
        :class="item.active ? 'bg-brand text-white' : 'text-slate-500 hover:bg-slate-50'"
      >
        <component :is="item.icon" class="size-5" />
        {{ item.label }}
      </a>
    </nav>
  </aside>
</template>
