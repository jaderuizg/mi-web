<script setup lang="ts">
import { Github, Instagram, Linkedin, Menu } from "lucide-vue-next"
import { RouterView } from "vue-router"
</script>

<template>
  <div class="bg-polka min-h-screen flex flex-col font-sans text-slate-900 antialiased selection:bg-pink-200 selection:text-slate-900">
    <div
      class="sr-only pointer-events-none invisible h-0 w-0 overflow-hidden"
      aria-hidden="true"
    >
      <span
        class="absolute left-0 top-0 -z-10 m-0 p-0 text-[0px] opacity-0"
      >
        tailwind-quota
      </span>
    </div>
    <header class="sticky top-0 z-40 w-full border-b border-black/5 bg-white/85 backdrop-blur-md shadow-sm">
      <div class="container mx-auto flex h-16 items-center justify-between px-4">
        <nav class="hidden md:flex gap-8 font-medium tracking-wide">
          <RouterLink to="/" class="hover:text-pink-600 transition-colors duration-200">Inicio</RouterLink>
          <RouterLink to="/proyectos" class="hover:text-pink-600 transition-colors duration-200">Proyectos</RouterLink>
          <RouterLink to="/contacto" class="hover:text-pink-600 transition-colors duration-200">Contacto</RouterLink>
        </nav>

        <div class="flex items-center gap-4">
          <a href="#" class="transition-colors duration-200 hover:text-pink-600"><Github class="w-5 h-5" /></a>
          <a href="#" class="transition-colors duration-200 hover:text-pink-600"><Linkedin class="w-5 h-5" /></a>
          <a href="#" class="transition-colors duration-200 hover:text-pink-600"><Instagram class="w-5 h-5" /></a>
          <button class="md:hidden rounded-full p-2 transition-colors duration-200 hover:bg-pink-100"><Menu /></button>
        </div>
      </div>
    </header>

    <main class="flex-1 container mx-auto px-4 py-12">
      <RouterView />
    </main>

    <footer class="border-t border-black/5 bg-white/90 py-8">
      <div class="container mx-auto px-4 text-center text-slate-500 text-sm tracking-wide">
        <p>
          © 2026 - Mi pequeño portafolio
          jadeypunto@gmail.com
        </p>
      </div>
    </footer>
  </div>
</template>
<style scoped></style>
