<template>
  <section class="resources-section py-5" data-aos="fade-up">
    <div class="text-center mb-5">
      <h2 class="display-5 fw-bold text-gradient-green">Recursos Gratuitos</h2>
      <p class="text-muted lead">Material de apoyo que complementa tus cursos y prácticas.</p>
    </div>

    <div class="row g-4">
      <div
        v-for="(recurso, index) in recursos"
        :key="index"
        class="col-12 col-md-6 col-lg-4"
        data-aos="zoom-in"
        :data-aos-delay="index * 100"
      >
        <div class="card h-100 shadow-lg border-0 rounded-4 hover-raise-green">
          <div class="card-body text-center p-4">
            <i :class="recurso.icon" class="display-4 text-success mb-3"></i>
            <h5 class="card-title fw-bold">{{ recurso.titulo }}</h5>
            <p class="card-text text-muted">{{ recurso.descripcion }}</p>
            <a href="#" class="btn btn-outline-success btn-sm px-4 rounded-pill mt-3">Descargar</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const recursos = [
  {
    titulo: 'Guías PDF',
    descripcion: 'Material teórico resumido en documentos imprimibles.',
    icon: 'bi bi-file-earmark-text',
  },
  {
    titulo: 'Ejercicios',
    descripcion: 'Problemas prácticos para reforzar tu aprendizaje.',
    icon: 'bi bi-journal-check',
  },
  {
    titulo: 'Código de ejemplo',
    descripcion: 'Archivos funcionales para analizar y probar por tu cuenta.',
    icon: 'bi bi-code-slash',
  },
]
</script>

<style scoped>
.text-gradient-green {
  background: linear-gradient(to right, #198754, #20c997);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hover-raise-green {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.hover-raise-green:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(25, 135, 84, 0.2);
}

.resources-section {
  background: linear-gradient(to right, #f8f9fa, #ffffff);
}

/* Dark Mode */
body.dark-mode .card {
  background-color: #1e1e1e;
  color: #fff;
}

body.dark-mode .text-muted {
  color: #ccc !important;
}
</style>

/* Modo oscuro para secciones principales */
body.dark-mode .intro-section,
body.dark-mode .resources-section {
  background: linear-gradient(to right, #121212, #1a1a1a); /* Fondo elegante para modo oscuro */
}
