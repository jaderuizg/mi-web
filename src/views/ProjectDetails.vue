

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '@/data/portfolio'
import { Button } from '@/components/ui/button'
import { ChevronLeft, Calendar, Tag } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

const project = computed(() => 
  projects.find(p => p.slug === route.params.slug)
)

if (!project.value) router.push('/proyectos')
</script>

<template>
  <article v-if="project" class="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
    <Button variant="ghost" @click="router.back()" class="mb-4">
      <ChevronLeft class="mr-2 h-4 w-4" /> Volver a trabajos
    </Button>

    <header class="space-y-4">
      <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">{{ project.title }}</h1>
      <div class="flex flex-wrap gap-4 text-slate-500 italic">
        <span class="flex items-center gap-1"><Tag class="w-4 h-4" /> {{ project.category }}</span>
        <span class="flex items-center gap-1"><Calendar class="w-4 h-4" /> 2026</span>
      </div>
    </header>

    <img :src="project.image" class="w-full aspect-video object-cover rounded-2xl shadow-2xl" />

    <div class="grid md:grid-cols-3 gap-12 pt-8">
      <div class="md:col-span-2 space-y-6 text-lg leading-relaxed text-slate-700">
        <p>{{ project.content }}</p>
      </div>
      
      <div class="space-y-6">
        <h3 class="font-bold text-xl">Tecnologías</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="tag in project.tags" :key="tag" 
                class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </article>
</template>