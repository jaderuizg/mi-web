<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { projects } from '@/data/portfolio'
import { ArrowRight, MousePointer2 } from 'lucide-vue-next'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <div class="min-h-screen">
    <section class="py-20 md:py-28 border-b border-black/5">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center transition-all duration-1000 transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <div>
          <span
            class="inline-flex px-4 py-1 mb-6 bg-white border border-black/10 rounded-full text-xs font-bold uppercase tracking-widest"
          >
            Ilustracion y Diseno
          </span>

          <h1 class="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
            PORTAFOLIO<br />
            <span class="text-slate-400">2026</span>
          </h1>

          <p class="max-w-xl text-lg md:text-2xl text-slate-600 font-light leading-tight mb-8">
            Hola, soy <span class="text-black font-medium">Jade</span>. Estudio Diseno y Tecnologias Creativas en la UPV.
            Aqui puedes ver una seleccion de mis proyectos.
          </p>

          <RouterLink
            to="/proyectos"
            class="inline-flex px-8 py-4 bg-pink-400 text-white rounded-full font-bold hover:bg-pink-600 transition-all items-center gap-2 group"
          >
            Ver mis proyectos
            <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </RouterLink>
        </div>

        <div class="w-full">
          <div class="relative overflow-hidden rounded-3xl border border-black/10 bg-slate-100 aspect-[4/5] md:aspect-[3/4] lg:aspect-square shadow-xl">
            <img
              src="https://api.dicebear.com/7.x/notionists/svg?seed=Jade"
              alt="Retrato de Jade"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="flex justify-between items-end mb-12">
        <h2 class="text-4xl font-bold tracking-tight text-slate-400">
          <span class="text-pink-400">CONTENIDOS</span>
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
