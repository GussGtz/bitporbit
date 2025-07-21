<template>
  <footer class="footer-custom text-white text-center py-4 mt-5">
    <div class="container">
      <p class="mb-2 fw-semibold">&copy; 2025 BitPorBit. Todos los derechos reservados.</p>
      <div class="d-flex justify-content-center gap-4">
        <a
          href="https://www.facebook.com"
          target="_blank"
          class="text-white icon-link"
          aria-label="Facebook"
        >
          <i class="bi bi-facebook fs-4"></i>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          class="text-white icon-link"
          aria-label="Twitter"
        >
          <i class="bi bi-twitter fs-4"></i>
        </a>
        <a
          href="mailto:rafael@plataforma.com"
          class="text-white icon-link"
          aria-label="Email"
        >
          <i class="bi bi-envelope fs-4"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Nada por ahora
</script>

<style scoped>
.footer-custom {
  background: linear-gradient(135deg, #0d6efd, #6610f2);
  font-family: 'Plus Jakarta Sans', sans-serif;
  display: block;
  z-index: 10;
}

/* Visibilidad asegurada */
.footer-custom,
.footer-custom * {
  opacity: 1 !important;
  visibility: visible !important;
}

.icon-link {
  opacity: 0.75;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.icon-link:hover {
  opacity: 1;
  transform: scale(1.15);
}

body.dark-mode .footer-custom {
  background: #111827;
  color: #e4e4e4;
}
</style>
