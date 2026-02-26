

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { projects } from '@/data/portfolio'
import { ArrowRight, Github, Instagram, Linkedin, MousePointer2 } from 'lucide-vue-next'

const isVisible = ref(false)

onMounted(() => {
  // Disparamos la animación al cargar
  setTimeout(() => isVisible.value = true, 100)
})



</script>

<template>
  <div class="min-h-screen">
    <section class="py-20 md:py-32 border-b border-black/5">
      <div 
        class="transition-all duration-1000 transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <div class="flex items-center gap-4 mb-8">
          <div class="w-16 h-16 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-md">
            <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix" alt="Avatar" />
          </div>
          <span class="px-4 py-1 bg-white border border-black/10 rounded-full text-xs font-bold uppercase tracking-widest">
            Disponible para proyectos
          </span>
        </div>

        <h1 class="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-8">
          CREATIVE <br> <span class="text-slate-400">DESIGNER</span>
        </h1>

        <p class="max-w-2xl text-xl md:text-3xl text-slate-600 font-light leading-tight mb-10">
          Hola, soy <span class="text-black font-medium underline decoration-pink-300">Jade</span>. 
          Estudio Diseño y Tecnologias Creativas en la UPV. Este es mi portafolio 
        </p>

        <div class="flex flex-wrap gap-4">
          <button class="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-pink-600 transition-all flex items-center gap-2 group">
            Ver mis trabajos 
            <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <div class="flex gap-2">
            <a href="#" class="p-4 bg-white border border-black/10 rounded-full hover:bg-slate-50 transition-colors">
              <Github class="w-6 h-6" />
            </a>
            <a href="#" class="p-4 bg-white border border-black/10 rounded-full hover:bg-slate-50 transition-colors">
              <Linkedin class="w-6 h-6" />
              </a>
            <a href="#" class="p-4 bg-white border border-black/10 rounded-full hover:bg-slate-50 transition-colors">
              <Instagram class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="flex justify-between items-end mb-12">
        <h2 class="text-4xl font-bold tracking-tight text-slate-400">
          01 <span class="text-black">/ TRABAJOS</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div 
          v-for="(project, index) in projects.slice(0, 4)" 
          :key="project.id"
          class="group cursor-pointer"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div class="relative aspect-video overflow-hidden rounded-3xl bg-slate-100 mb-6">
            <div class="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors z-10 flex items-center justify-center">
               <MousePointer2 class="text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all w-12 h-12" />
            </div>
            <img 
              :src="project.image" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-2xl font-bold uppercase">{{ project.title }}</h3>
              <p class="text-slate-500">{{ project.category }}</p>
            </div>
            <span class="text-xs font-mono border border-black/20 px-2 py-1 rounded italic">2026</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>