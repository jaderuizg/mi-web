<script setup lang="ts">
import { onMounted, ref } from "vue"
import { ArrowRight, MousePointer2 } from "lucide-vue-next"
import { projects } from "@/data/portfolio"
import { Carousel } from "@/components/ui/carousel"

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <div class="min-h-screen">
    <section class="border-b border-black/5 py-20 md:py-28">
      <div
        class="grid grid-cols-1 items-center gap-10 transition-all duration-1000 transform lg:grid-cols-2 lg:gap-14"
        :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
      >
        <div>
          <span
            class="mb-6 inline-flex rounded-full border border-black/10 bg-white px-4 py-1 text-xs font-bold uppercase tracking-widest"
          >
            Ilustracion y Diseno
          </span>

          <h1 class="mb-6 text-5xl font-black leading-[0.9] tracking-tighter md:text-7xl">
            PORTAFOLIO<br />
            <span class="text-slate-400">2026</span>
          </h1>

          <p class="mb-8 max-w-xl text-lg font-light leading-tight text-slate-600 md:text-2xl">
            Hola, soy <span class="font-medium text-black">Jade</span>. Estudio Diseno y Tecnologias
            Creativas en la UPV. Aqui puedes ver una seleccion de mis proyectos.
          </p>

          <RouterLink
            to="/proyectos"
            class="group inline-flex items-center gap-2 rounded-full bg-pink-400 px-8 py-4 font-bold text-white transition-all hover:bg-pink-600"
          >
            Ver mis proyectos
            <ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </RouterLink>
        </div>

        <div class="w-full">
          <div
            class="relative aspect-[4/5] overflow-hidden rounded-3xl border border-black/10 bg-slate-100 shadow-xl md:aspect-[3/4] lg:aspect-square"
          >
            <img
              src="https://api.dicebear.com/7.x/notionists/svg?seed=Jade"
              alt="Retrato de Jade"
              class="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="mb-12 flex items-end justify-between">
        <h2 class="text-4xl font-bold tracking-tight text-slate-400">
          <span class="text-pink-400">CONTENIDOS</span>
        </h2>
      </div>

      <Carousel :items="projects.slice(0, 4)">
        <template #slide="{ item }">
          <RouterLink
            :to="`/proyectos/${item.slug}`"
            class="group block cursor-pointer"
          >
            <div class="relative mb-6 aspect-video overflow-hidden rounded-3xl bg-slate-100">
              <div
                class="absolute inset-0 z-10 flex items-center justify-center bg-blue-600/0 transition-colors group-hover:bg-blue-600/10"
              >
                <MousePointer2
                  class="h-12 w-12 scale-50 text-white opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100"
                />
              </div>
              <img
                :src="item.image"
                :alt="item.title"
                class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div class="flex items-start justify-between">
              <div>
                <h3 class="text-2xl font-bold uppercase">{{ item.title }}</h3>
                <p class="text-slate-500">{{ item.category }}</p>
              </div>
              <span class="rounded border border-black/20 px-2 py-1 text-xs font-mono italic">2026</span>
            </div>
          </RouterLink>
        </template>
      </Carousel>
    </section>
  </div>
</template>
