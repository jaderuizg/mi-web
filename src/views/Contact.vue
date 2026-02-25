
<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-vue-next'

const formData = ref({ name: '', email: '', message: '' })

const sendForm = () => {
  // Aquí iría tu lógica de TypeScript
  alert(`Gracias ${formData.value.name}, mensaje enviado.`);
  formData.value = { name: '', email: '', message: '' };
}
</script>

<template>
  <div class="max-w-xl mx-auto bg-white p-10 rounded-3xl shadow-sm border">
    <h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
      Hablemos <Send class="text-blue-600" />
    </h2>
    <form @submit.prevent="sendForm" class="space-y-6">
      <div class="space-y-2">
        <label class="text-sm font-semibold ml-1">Nombre</label>
        <input
          v-model="formData.name"
          type="text"
          placeholder="Tu nombre artístico"
          required
          class="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-offset-white transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
        />
      </div>
      <div class="space-y-2">
        <label class="text-sm font-semibold ml-1">Email</label>
        <input
          v-model="formData.email"
          type="email"
          placeholder="hola@ejemplo.com"
          required
          class="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-offset-white transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
        />
      </div>
      <div class="space-y-2">
        <label class="text-sm font-semibold ml-1">Mensaje</label>
        <textarea
          v-model="formData.message"
          rows="5"
          placeholder="¿En qué puedo ayudarte?"
          class="w-full min-h-28 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-offset-white transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
        />
      </div>
      <Button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg">
        Enviar Propuesta
      </Button>
    </form>
  </div>
</template>
