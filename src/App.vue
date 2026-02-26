<script setup lang="ts">
import { RouterView } from 'vue-router';
import { Menu, Github, Linkedin, Instagram } from 'lucide-vue-next'


</script>

<template>


  <div class="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
    <header class="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-md">
      <div class="container mx-auto flex h-16 items-center justify-between px-4">
        <RouterLink to="/" class="text-xl font-bold tracking-tight hover:text-pink-600 transition-colors">
          PORTAFOLIO.
        </RouterLink>
        
        <nav class="hidden md:flex gap-8 font-medium">
          <RouterLink to="/" class="hover:text-pink-300 transition-colors">Inicio</RouterLink>
          <RouterLink to="/proyectos" class="hover:text-pink-300 transition-colors">Proyectos</RouterLink>
          <RouterLink to="/contacto" class="hover:text-pink-300 transition-colors">Contacto</RouterLink>
        </nav>

        <div class="flex items-center gap-4">
          <a href="#"><Github class="w-5 h-5 hover:text-pink-600" /></a>
          <a href="#"><Linkedin class="w-5 h-5 hover:text-pink-600" /></a>
           <a href="#"><Instagram class="w-5 h-5 hover:text-pink-600" /></a>
          <button class="md:hidden"><Menu /></button>
        </div>
      </div>
    </header>

    <main class="flex-1 container mx-auto px-4 py-12">
      <RouterView />
    </main>

    <footer class="border-t bg-white py-8">
      <div class="container mx-auto px-4 text-center text-slate-500 text-sm">
        <p>© 2026 - Mi pequeño portfolio
                    jadeypunto@gmail.com
           </p>
      </div>
    </footer>
  </div>



</template>




<style scoped>

</style>
