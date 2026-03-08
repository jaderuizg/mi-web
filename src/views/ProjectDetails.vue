

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '@/data/portfolio'
import { Button } from '@/components/ui/button'

const route = useRoute()
const router = useRouter()

const project = computed(() => 
  projects.find(p => p.slug === route.params.slug)
)

const projectImages = computed(() => {
  if (!project.value) return []
  if (project.value.images?.length) return project.value.images
  return [project.value.image]
})

if (!project.value) router.push('/proyectos')
</script>

<template>
  <article v-if="project" class="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
    <Button variant="ghost" @click="router.back()" class="mb-4">
      Volver a proyectos
    </Button>

    <header class="space-y-4">
      <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">{{ project.title }}</h1>
    </header>

    <div class="space-y-4">
      <img
        v-for="(image, index) in projectImages"
        :key="`${project.id}-image-${index}`"
        :src="image"
        :alt="`${project.title} imagen ${index + 1}`"
        class="block h-auto max-w-full rounded-2xl shadow-2xl"
      />
    </div>

    <div class="grid md:grid-cols-3 gap-12 pt-8">
      <div class="md:col-span-2 space-y-6 text-lg leading-relaxed text-slate-700">
        <p>{{ project.content }}</p>
      
      </div>
    </div>
  </article>
</template>
