<script setup lang="ts">
import {
  Search,
  SlidersHorizontal,
  Plus,
  Ellipsis,
  Flag,
  CircleCheck,
  Pencil,
  Trash2,
} from 'lucide-vue-next'

// Esta view está TODA estática (HTML + Tailwind), só com os dados de exemplo da referência.
// Sua missão é transformar em uma tela dinâmica: store, service, componentes, v-for, v-model...
</script>

<template>
  <div>
    <!-- Cabeçalho: título + busca -->
    <header class="flex flex-wrap items-center justify-between gap-4">
      <h1 class="text-2xl font-semibold text-ink">All Tasks</h1>

      <!-- TODO(Vue): v-model neste input para a busca por título (com debounce via composable) -->
      <label
        class="flex w-full max-w-md items-center gap-3 rounded-lg border border-slate-300 px-4 py-2.5 sm:w-auto sm:min-w-80"
      >
        <Search class="size-5 text-slate-400" />
        <input
          type="search"
          placeholder="Search"
          class="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
        />
        <SlidersHorizontal class="size-5 text-slate-400" />
      </label>
    </header>

    <!-- Abas (decorativas no MVP) + filtro por categoria -->
    <div class="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200">
      <nav class="flex gap-8 text-sm">
        <a href="#" class="-mb-px border-b-2 border-ink pb-3 font-medium text-ink">Overview</a>
        <a href="#" class="pb-3 text-slate-400">Backlog</a>
        <a href="#" class="pb-3 text-slate-400">Timeline</a>
        <a href="#" class="pb-3 text-slate-400">Calendar</a>
      </nav>

      <!-- TODO(Vue): v-model + v-for nas opções, vindas de GET /api/v1/categories -->
      <select
        class="mb-3 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-600"
      >
        <option value="">Todas as categorias</option>
        <option value="ui-design">UI Design</option>
        <option value="front-end">Front End</option>
        <option value="back-end">Back End</option>
        <option value="ux-design">UX Design</option>
      </select>
    </div>

    <!-- TODO(Vue): estados de carregamento e erro (v-if / v-else-if) -->
    <p class="mt-6 hidden text-sm text-slate-500">Carregando tarefas...</p>
    <p class="mt-6 hidden rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
      Não foi possível carregar as tarefas.
    </p>

    <!-- Quadro com as 3 colunas -->
    <div class="mt-6 grid items-start gap-5 md:grid-cols-3">
      <!-- TODO(Vue): as 3 colunas viram <TaskColumn> (props: title, tasks) dentro de um v-for -->
      <section class="rounded-2xl bg-canvas p-4">
        <header class="mb-4 flex items-center justify-between">
          <h2 class="text-lg font-semibold text-ink">
            Todo <span class="font-normal text-slate-400">(2)</span>
          </h2>
          <!-- TODO(Vue): @click abre o formulário de nova tarefa -->
          <button
            type="button"
            aria-label="Adicionar tarefa"
            class="rounded-md p-1.5 text-slate-500 hover:bg-white"
          >
            <Plus class="size-5" />
          </button>
        </header>

        <div class="flex flex-col gap-4">
          <!-- TODO(Vue): este bloco inteiro vira <TaskCard :task="task" />, dentro de um v-for -->
          <article class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div class="flex items-start justify-between">
              <span
                class="rounded-full border border-slate-300 px-2.5 py-0.5 text-xs text-slate-600"
                >UI Design</span
              >

              <div class="relative">
                <button
                  type="button"
                  aria-label="Opções da tarefa"
                  class="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  <Ellipsis class="size-5" />
                </button>
                <!-- TODO(Vue): remover "hidden" e controlar com v-if / ref (menu aberto ou fechado) -->
                <ul
                  class="absolute right-0 top-9 z-10 hidden w-36 rounded-xl border border-slate-200 bg-white py-1 shadow-lg"
                >
                  <li>
                    <button
                      type="button"
                      class="flex w-full items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <Pencil class="size-4" /> Editar
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="flex w-full items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <Trash2 class="size-4" /> Excluir
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <h3 class="mt-3 text-base font-semibold text-ink">Hi-Fidelity Design</h3>
            <p class="mt-1 text-sm text-muted">
              Required high fidelity website for company profile page
            </p>

            <div class="mt-3 flex items-center gap-2">
              <span class="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
                >Tue, Oct 9</span
              >
              <span
                class="inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium bg-red-50 text-red-600"
              >
                <Flag class="size-3.5" /> High
              </span>
            </div>

            <div class="mt-4 flex items-center justify-between text-sm">
              <span class="text-slate-700">Progress</span>
              <span class="text-slate-700">20%</span>
            </div>
            <div class="mt-2 h-1.5 rounded-full bg-slate-100">
              <!-- TODO(Vue): a largura vira :style="{ width: task.progress + '%' }" -->
              <div class="h-full rounded-full bg-brand" style="width: 20%"></div>
            </div>
          </article>
          <article class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div class="flex items-start justify-between">
              <span
                class="rounded-full border border-slate-300 px-2.5 py-0.5 text-xs text-slate-600"
                >UX Design</span
              >

              <div class="relative">
                <button
                  type="button"
                  aria-label="Opções da tarefa"
                  class="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  <Ellipsis class="size-5" />
                </button>
                <!-- TODO(Vue): remover "hidden" e controlar com v-if / ref (menu aberto ou fechado) -->
                <ul
                  class="absolute right-0 top-9 z-10 hidden w-36 rounded-xl border border-slate-200 bg-white py-1 shadow-lg"
                >
                  <li>
                    <button
                      type="button"
                      class="flex w-full items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <Pencil class="size-4" /> Editar
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="flex w-full items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <Trash2 class="size-4" /> Excluir
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <h3 class="mt-3 text-base font-semibold text-ink">Wireframes</h3>
            <p class="mt-1 text-sm text-muted">
              Required low fidelity wireframe for company profile page
            </p>

            <div class="mt-3 flex items-center gap-2">
              <span class="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
                >Tue, Oct 9</span
              >
              <span
                class="inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium bg-brand-soft text-brand"
              >
                <Flag class="size-3.5" /> Normal
              </span>
            </div>

            <div class="mt-4 flex items-center justify-between text-sm">
              <span class="text-slate-700">Progress</span>
              <span class="text-slate-700">10%</span>
            </div>
            <div class="mt-2 h-1.5 rounded-full bg-slate-100">
              <!-- TODO(Vue): a largura vira :style="{ width: task.progress + '%' }" -->
              <div class="h-full rounded-full bg-brand" style="width: 10%"></div>
            </div>
          </article>
        </div>

        <!-- TODO(Vue): remover "hidden" e mostrar com v-if quando a coluna estiver vazia -->
        <p class="hidden py-8 text-center text-sm text-slate-400">Nenhuma tarefa aqui.</p>
      </section>
      <section class="rounded-2xl bg-canvas p-4">
        <header class="mb-4 flex items-center justify-between">
          <h2 class="text-lg font-semibold text-ink">
            In Progress <span class="font-normal text-slate-400">(1)</span>
          </h2>
          <!-- TODO(Vue): @click abre o formulário de nova tarefa -->
          <button
            type="button"
            aria-label="Adicionar tarefa"
            class="rounded-md p-1.5 text-slate-500 hover:bg-white"
          >
            <Plus class="size-5" />
          </button>
        </header>

        <div class="flex flex-col gap-4">
          <article class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div class="flex items-start justify-between">
              <span
                class="rounded-full border border-slate-300 px-2.5 py-0.5 text-xs text-slate-600"
                >UI Design</span
              >

              <div class="relative">
                <button
                  type="button"
                  aria-label="Opções da tarefa"
                  class="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  <Ellipsis class="size-5" />
                </button>
                <!-- TODO(Vue): remover "hidden" e controlar com v-if / ref (menu aberto ou fechado) -->
                <ul
                  class="absolute right-0 top-9 z-10 hidden w-36 rounded-xl border border-slate-200 bg-white py-1 shadow-lg"
                >
                  <li>
                    <button
                      type="button"
                      class="flex w-full items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <Pencil class="size-4" /> Editar
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="flex w-full items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <Trash2 class="size-4" /> Excluir
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <h3 class="mt-3 text-base font-semibold text-ink">Onboarding Flow</h3>
            <p class="mt-1 text-sm text-muted">
              Required high fidelity onboarding for company profile page
            </p>

            <div class="mt-3 flex items-center gap-2">
              <span class="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
                >Wed, Oct 10</span
              >
              <span
                class="inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium bg-brand-soft text-brand"
              >
                <Flag class="size-3.5" /> Normal
              </span>
            </div>

            <div class="mt-4 flex items-center justify-between text-sm">
              <span class="text-slate-700">Progress</span>
              <span class="text-slate-700">50%</span>
            </div>
            <div class="mt-2 h-1.5 rounded-full bg-slate-100">
              <!-- TODO(Vue): a largura vira :style="{ width: task.progress + '%' }" -->
              <div class="h-full rounded-full bg-brand" style="width: 50%"></div>
            </div>
          </article>
        </div>

        <!-- TODO(Vue): remover "hidden" e mostrar com v-if quando a coluna estiver vazia -->
        <p class="hidden py-8 text-center text-sm text-slate-400">Nenhuma tarefa aqui.</p>
      </section>
      <section class="rounded-2xl bg-canvas p-4">
        <header class="mb-4 flex items-center justify-between">
          <h2 class="text-lg font-semibold text-ink">
            Completed <span class="font-normal text-slate-400">(2)</span>
          </h2>
          <!-- TODO(Vue): @click abre o formulário de nova tarefa -->
          <button
            type="button"
            aria-label="Adicionar tarefa"
            class="rounded-md p-1.5 text-slate-500 hover:bg-white"
          >
            <Plus class="size-5" />
          </button>
        </header>

        <div class="flex flex-col gap-4">
          <article class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div class="flex items-start justify-between">
              <span
                class="rounded-full border border-slate-300 px-2.5 py-0.5 text-xs text-slate-600"
                >UI Design</span
              >

              <div class="relative">
                <button
                  type="button"
                  aria-label="Opções da tarefa"
                  class="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  <Ellipsis class="size-5" />
                </button>
                <!-- TODO(Vue): remover "hidden" e controlar com v-if / ref (menu aberto ou fechado) -->
                <ul
                  class="absolute right-0 top-9 z-10 hidden w-36 rounded-xl border border-slate-200 bg-white py-1 shadow-lg"
                >
                  <li>
                    <button
                      type="button"
                      class="flex w-full items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <Pencil class="size-4" /> Editar
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="flex w-full items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <Trash2 class="size-4" /> Excluir
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <h3 class="mt-3 text-base font-semibold text-ink">Client Page Design</h3>
            <p class="mt-1 text-sm text-muted">
              Required high fidelity client page for company profile page
            </p>

            <div class="mt-3 flex items-center gap-2">
              <span class="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
                >Wed, Oct 10</span
              >
              <span
                class="inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium bg-emerald-50 text-emerald-600"
              >
                <Flag class="size-3.5" /> Low
              </span>
            </div>

            <div class="mt-4 flex items-center justify-between text-sm">
              <span class="text-slate-700">Progress</span>
              <span class="inline-flex items-center gap-1 font-medium text-brand"
                >Done <CircleCheck class="size-4"
              /></span>
            </div>
            <div class="mt-2 h-1.5 rounded-full bg-slate-100">
              <!-- TODO(Vue): a largura vira :style="{ width: task.progress + '%' }" -->
              <div class="h-full rounded-full bg-brand" style="width: 100%"></div>
            </div>
          </article>
          <article class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div class="flex items-start justify-between">
              <span
                class="rounded-full border border-slate-300 px-2.5 py-0.5 text-xs text-slate-600"
                >UI Design</span
              >

              <div class="relative">
                <button
                  type="button"
                  aria-label="Opções da tarefa"
                  class="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  <Ellipsis class="size-5" />
                </button>
                <!-- TODO(Vue): remover "hidden" e controlar com v-if / ref (menu aberto ou fechado) -->
                <ul
                  class="absolute right-0 top-9 z-10 hidden w-36 rounded-xl border border-slate-200 bg-white py-1 shadow-lg"
                >
                  <li>
                    <button
                      type="button"
                      class="flex w-full items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <Pencil class="size-4" /> Editar
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="flex w-full items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <Trash2 class="size-4" /> Excluir
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <h3 class="mt-3 text-base font-semibold text-ink">Cart Page</h3>
            <p class="mt-1 text-sm text-muted">
              Required high fidelity cart page for company profile page
            </p>

            <div class="mt-3 flex items-center gap-2">
              <span class="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
                >Wed, Oct 10</span
              >
              <span
                class="inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium bg-red-50 text-red-600"
              >
                <Flag class="size-3.5" /> High
              </span>
            </div>

            <div class="mt-4 flex items-center justify-between text-sm">
              <span class="text-slate-700">Progress</span>
              <span class="inline-flex items-center gap-1 font-medium text-brand"
                >Done <CircleCheck class="size-4"
              /></span>
            </div>
            <div class="mt-2 h-1.5 rounded-full bg-slate-100">
              <!-- TODO(Vue): a largura vira :style="{ width: task.progress + '%' }" -->
              <div class="h-full rounded-full bg-brand" style="width: 100%"></div>
            </div>
          </article>
        </div>

        <!-- TODO(Vue): remover "hidden" e mostrar com v-if quando a coluna estiver vazia -->
        <p class="hidden py-8 text-center text-sm text-slate-400">Nenhuma tarefa aqui.</p>
      </section>
    </div>
  </div>
</template>
