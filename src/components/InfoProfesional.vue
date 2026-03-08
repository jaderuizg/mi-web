
<template>
  <div class="info-container">
    <h1>Informacion Profesional</h1>
    <p>Hola soy Jade Ruiz, estudiante de Diseño y Tecnologias Creativas de la UPV y este es mi portafolio de 2º. </p>

    <RouterLink
      to="/"
      class="inline-flex items-center gap-2 rounded-full bg-pink-400 px-8 py-4 font-bold text-white transition-all hover:bg-pink-600"
    >
      Volver al inicio
    </RouterLink>
  </div>
</template>

<style scoped>
.info-container {
  padding: 20px;
  text-align: center;
}

p {
  margin-bottom: 32px;
}
</style>
