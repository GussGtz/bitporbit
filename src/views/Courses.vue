<template>
  <section class="intro-section py-5" data-aos="fade-up">
    <div class="text-center mb-5">
      <h2 class="display-5 fw-bold text-gradient">Cursos Introductorios</h2>
      <p class="text-muted lead">Empieza desde cero con fundamentos sólidos en desarrollo y bases de datos.</p>
    </div>

    <div class="row g-4">
      <div
        v-for="(curso, index) in cursos"
        :key="index"
        class="col-12 col-md-6 col-lg-4"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div class="card h-100 border-0 shadow-lg rounded-4 hover-raise">
          <div class="card-body text-center p-4">
            <i :class="curso.icon" class="display-3 text-primary mb-3"></i>
            <h5 class="card-title fw-bold">{{ curso.titulo }}</h5>
            <p class="card-text text-muted">{{ curso.descripcion }}</p>
            <router-link to="/recursos" class="btn btn-outline-primary btn-sm mt-3 px-4 rounded-pill">
              Ver Recursos
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cursos = [
  {
    titulo: 'Programación',
    descripcion: 'Aprende lógica, estructuras y conceptos clave de programación.',
    icon: 'bi bi-terminal',
  },
  {
    titulo: 'Bases de Datos',
    descripcion: 'Diseña, consulta y optimiza datos con SQL y sistemas modernos.',
    icon: 'bi bi-database-check',
  },
  {
    titulo: 'Desarrollo Web',
    descripcion: 'Construye sitios web con HTML, CSS, JavaScript y frameworks.',
    icon: 'bi bi-globe2',
  },
]
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(to right, #4e54c8, #8f94fb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hover-raise {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.hover-raise:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15);
}

.card {
  border-radius: 1rem;
}

.intro-section {
  background: linear-gradient(to right, #f1f4f9, #ffffff);
}

/* Dark Mode override */
body.dark-mode .card {
  background-color: #1e1e1e;
  color: #fff;
  border: 1px solid #333;
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
