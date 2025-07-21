<template>
  <nav
    class="navbar navbar-expand-lg fixed-top navbar-custom"
    :class="isDark ? 'navbar-dark bg-dark' : 'navbar-light bg-light shadow-sm'"
  >
    <div class="container">
      <router-link to="/" class="navbar-brand fw-bold fs-4 text-gradient">
        <i class="bi bi-code-slash me-1"></i> BitPorBit
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto gap-2">
          <li class="nav-item" v-for="(item, index) in links" :key="index">
            <router-link :to="item.path" class="nav-link fw-semibold">{{ item.label }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const isDark = ref(false)

// Modo oscuro automático según localStorage
onMounted(() => {
  const saved = localStorage.getItem('modoOscuro')
  if (saved === 'true') {
    isDark.value = true
    document.body.classList.add('dark-mode')
  }
})

watch(isDark, (val) => {
  localStorage.setItem('modoOscuro', val)
})

const links = [
  { label: 'Inicio', path: '/' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Cursos', path: '/cursos' },
  { label: 'Recursos', path: '/recursos' },
  { label: 'Contacto', path: '/contacto' }
]
</script>

<style scoped>
.navbar-custom {
  transition: all 0.3s ease-in-out;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.text-gradient {
  background: linear-gradient(to right, #0d6efd, #6610f2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
