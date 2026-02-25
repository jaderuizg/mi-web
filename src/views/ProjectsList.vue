<script setup lang="ts">
import { projects } from '@/data/portfolio'
</script>

<template>
  <section class="space-y-8">
    <header class="space-y-2">
      <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight">Trabajos</h1>
      <p class="text-slate-600">Selección de proyectos recientes.</p>
    </header>

    <div class="grid gap-6 md:grid-cols-2">
      <article
        v-for="project in projects"
        :key="project.id"
        class="overflow-hidden rounded-2xl border bg-white shadow-sm"
      >
        <img
          :src="project.thumbnail"
          :alt="project.title"
          class="h-52 w-full object-cover"
        />

        <div class="space-y-3 p-5">
          <p class="text-sm font-semibold text-blue-700">{{ project.category }}</p>
          <h2 class="text-xl font-bold">{{ project.title }}</h2>
          <p class="text-sm text-slate-600">{{ project.description }}</p>

          <RouterLink
            :to="`/proyectos/${project.slug}`"
            class="inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            Ver detalle
          </RouterLink>
        </div>
      </article>
    </div>
  </section>
</template>
