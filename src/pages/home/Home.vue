<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue"
import { projects } from "@/data/portfolio"
import { ArrowRight, MousePointer2 } from "lucide-vue-next"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel } from "@/components/ui/carousel"
import type { CarouselApi } from "@/components/ui/carousel"

const isVisible = ref(false)
const carouselApi = ref<CarouselApi | null>(null)
let autoplayId: ReturnType<typeof setInterval> | null = null

function onCarouselInit(api: CarouselApi) {
  carouselApi.value = api
}

function startAutoplay() {
  if (autoplayId) return
  autoplayId = setInterval(() => {
    carouselApi.value?.scrollNext()
  }, 2800)
}

onMounted(() => {
  setTimeout(() => (isVisible.value = true), 100)
  startAutoplay()
})

onBeforeUnmount(() => {
  if (!autoplayId) return
  clearInterval(autoplayId)
  autoplayId = null
})
</script>

<template>
  <div class="min-h-screen">
    <section class="border-b border-black/5 min-h-[85vh] py-6 md:py-12 flex items-start md:items-center">
      <div
        class="grid grid-cols-1 items-center gap-10 transition-all duration-1000 transform lg:grid-cols-2 lg:gap-14"
        :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
      >
        <div class="space-y-2">
          <h1
            class="mb-6 max-w-[12ch] text-6xl font-black leading-[0.9] tracking-tighter text-center sm:text-7xl md:text-8xl lg:text-8xl md:text-left md:max-w-none font-helvetica drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
          >
            <span class="font-signature">PORTAFOLIO</span><br />
            <span class="font-signature text-pink-400">JADE RUIZ</span>
          </h1>

          <div class="flex flex-col items-center gap-4 md:items-start">
            <RouterLink
              to="/proyectos"
              class="group inline-flex items-center justify-center gap-2 rounded-full bg-pink-400 px-8 py-4 font-bold text-white shadow-lg shadow-pink-200/60 transition-all duration-200 hover:-translate-y-0.5 hover:bg-pink-600"
            >
              Ver mis proyectos
              <ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </RouterLink>

            <RouterLink
              to="/profesional"
              class="group inline-flex items-center justify-center gap-2 rounded-full bg-pink-400 px-8 py-4 font-bold text-white shadow-lg shadow-pink-200/60 transition-all duration-200 hover:-translate-y-0.5 hover:bg-pink-600"
            >
              Sobre mi
              <ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </RouterLink>
          </div>
        </div>

        <div class="w-full">
          <div class="bg-polka relative aspect-auto overflow-hidden shadow-xl md:aspect-square lg:aspect-square">
            <img src="/imagenes/portafolio/Jade.jpg" class="block h-auto max-w-full" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="mb-12 flex items-end justify-between">
        <h2 class="text-4xl font-bold tracking-tight text-slate-400 font-gaegu">
          <span class="text-pink-400">CONTENIDOS</span>
        </h2>
      </div>

      <Carousel
        class="mx-auto w-full max-w-4xl"
        :items="projects.slice(0, 6)"
        :opts="{ align: 'start', loop: true }"
        @init-api="onCarouselInit"
      >
        <template #slide="{ item }">
          <RouterLink :to="`/proyectos/${item.slug ?? ''}`" class="group block">
            <Card class="overflow-hidden rounded-3xl border-black/10 py-0 ">
              <CardContent class="p-0">
                <div class="bg-polka relative aspect-4/3 overflow-hidden">
                  <div class="absolute inset-0 z-10 flex items-center justify-center bg-blue-600/0 transition-colors group-hover:bg-pink-600">
                    <MousePointer2 class="h-12 w-12 scale-50 text-white opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100" />
                  </div>
                  <img
                    :src="item.image"
                    :alt="item.title"
                    class="block h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </CardContent>
            </Card>
          </RouterLink>
        </template>
      </Carousel>
    </section>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "Gaegu-Regular";
  src: url("../../assets/fonts/Gaegu-Regular.ttf") format("truetype");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

.font-signature {
  font-family: "Gaegu-Regular", sans-serif;
  font-weight: 400;
  letter-spacing: 0.01em;
}
</style>
