<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '@/data/portfolio'
import { Button } from '@/components/ui/button'

const route = useRoute()
const router = useRouter()

const slug = computed(() => {
  const param = route.params.slug
  return Array.isArray(param) ? param[0] : param ?? ''
})

const project = computed(() => projects.find(p => p.slug === slug.value))

const projectImages = computed(() => {
  if (!project.value) return []
  if (project.value.images?.length) return project.value.images
  return [project.value.image]
})

if (!project.value) router.push('/proyectos')
</script>

<template>
  <article v-if="project" class="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
    <Button
      variant="ghost"
      @click="router.back()"
      class="mb-4 inline-flex items-center justify-center gap-2 rounded-full bg-pink-400 px-8 py-4 font-bold text-white shadow-lg shadow-pink-200/60 transition-all duration-200 hover:-translate-y-0.5 hover:bg-pink-600"
    >
      Volver a proyectos
    </Button>

    <header class="space-y-4">
      <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
        {{ project.title }}
      </h1>
    </header>

    <div class="space-y-4">
      <div
        v-for="(image, index) in projectImages"
        :key="`${project.id}-image-${index}`"
        class="group relative inline-block max-w-full overflow-hidden rounded-2xl shadow-2xl"
      >
        <img
          :src="image"
          :alt="`${project.title} imagen ${index + 1}`"
          :class="[
            'block h-auto max-w-full transition-transform duration-500 group-hover:scale-105',
            project.imageFits?.[index] ?? 'object-cover'
          ]"
        />
        <div
          class="absolute inset-0 flex items-end bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <div class="w-full p-6 text-white">
            <p class="text-xl font-semibold">
              {{ project.imageDescriptions?.[index] ?? 'Descripcion de la imagen' }}
            </p>
          </div>
        </div>
      </div>
    </div>

    
   
  </article>
</template>
