<script setup lang="ts">
import { X } from 'lucide-vue-next'

// Formulário de criar/editar tarefa, ainda ESTÁTICO e não usado em nenhuma tela.
// Sua missão: props (task a editar, ou nada para criar), v-model em cada campo,
// emit('submit', dados) e emit('close'), e montar com v-if na TasksView.
// Dica de regras: na criação o status só pode ser Todo ou In Progress.
</script>

<template>
  <!-- Fundo escuro. TODO(Vue): @click.self="emit('close')" -->
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
    <form class="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
      <header class="mb-5 flex items-center justify-between">
        <!-- TODO(Vue): título dinâmico ("Nova tarefa" ou "Editar tarefa") -->
        <h2 class="text-xl font-semibold text-ink">Nova tarefa</h2>
        <button
          type="button"
          aria-label="Fechar"
          class="rounded-md p-1 text-slate-400 hover:bg-slate-100"
        >
          <X class="size-5" />
        </button>
      </header>

      <div class="flex flex-col gap-4">
        <label class="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
          Título
          <input
            type="text"
            placeholder="Ex.: Hi-Fidelity Design"
            class="rounded-lg border border-slate-300 px-3 py-2 font-normal outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </label>

        <label class="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
          Descrição
          <textarea
            rows="3"
            placeholder="Descreva a tarefa"
            class="resize-none rounded-lg border border-slate-300 px-3 py-2 font-normal outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          ></textarea>
        </label>

        <div class="grid gap-4 sm:grid-cols-2">
          <label class="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
            Categoria
            <!-- TODO(Vue): opções com v-for vindas da API -->
            <select
              class="rounded-lg border border-slate-300 bg-white px-3 py-2 font-normal outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            >
              <option value="ui-design">UI Design</option>
              <option value="front-end">Front End</option>
              <option value="back-end">Back End</option>
              <option value="ux-design">UX Design</option>
            </select>
          </label>

          <label class="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
            Prioridade
            <select
              class="rounded-lg border border-slate-300 bg-white px-3 py-2 font-normal outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            >
              <option value="high">High</option>
              <option value="normal">Normal</option>
              <option value="low">Low</option>
            </select>
          </label>

          <label class="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
            Data de entrega
            <input
              type="date"
              class="rounded-lg border border-slate-300 px-3 py-2 font-normal outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
          </label>

          <label class="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
            Status
            <select
              class="rounded-lg border border-slate-300 bg-white px-3 py-2 font-normal outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            >
              <option value="todo">Todo</option>
              <option value="in_progress">In Progress</option>
            </select>
          </label>
        </div>

        <!-- TODO(Vue): mostrar erros de validação vindos da API (campo "errors") -->
        <p class="hidden rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">Mensagem de erro</p>
      </div>

      <footer class="mt-6 flex justify-end gap-3">
        <button
          type="button"
          class="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
        >
          Cancelar
        </button>
        <button
          type="submit"
          class="rounded-lg bg-brand px-5 py-2 text-sm font-medium text-white hover:bg-brand/90"
        >
          Salvar
        </button>
      </footer>
    </form>
  </div>
</template>
