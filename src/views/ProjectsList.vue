<script setup lang="ts">
import { projects } from '@/data/portfolio'
</script>

<template>
  <section class="space-y-8">
    <header class="space-y-2">
      <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight font-gaegu text-slate-800">
        PROYECTOS
      </h1>
    </header>

    <div class="grid gap-6 md:grid-cols-2">
      <article
        v-for="project in projects"
        :key="project.id"
        class="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg"
      >
        <div class="aspect-[4/3] w-full overflow-hidden bg-pink-50">
          <img
            :src="project.thumbnail"
            :alt="project.title"
            :class="[
              'block h-full w-full object-center transition-transform duration-500 hover:scale-105',
              project.id === '5' ? 'object-contain bg-white' : 'object-cover'
            ]"
          />
        </div>

        <div class="space-y-3 p-5">
          <h2 class="text-xl font-bold text-slate-900">{{ project.title }}</h2>
          

          <RouterLink
            :to="`/proyectos/${project.slug}`"
            class="inline-flex text-sm font-semibold text-pink-500 transition-colors duration-200 hover:text-pink-700"
          >
            VER
          </RouterLink>
        </div>
      </article>
    </div>
  </section>
</template>
