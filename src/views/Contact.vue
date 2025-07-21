<template>
  <section class="fade-in py-5 contacto-section" data-aos="fade-up">
    <div class="container">
      <div class="row align-items-center g-5">
        <!-- Imagen decorativa -->
        <div class="col-lg-6 d-none d-lg-block text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/11676/11676295.png"
            alt="Contacto"
            class="img-fluid animate-float"
            style="max-height: 400px"
          />
        </div>

        <!-- Formulario -->
        <div class="col-lg-6">
          <div class="card p-4 shadow border-0 rounded-4 animate-fade-up" data-aos="fade-left" data-aos-delay="200">
            <h2 class="text-primary mb-4 text-center">Contáctanos</h2>
            <form @submit.prevent="handleSubmit">
              <div class="mb-3">
                <label class="form-label">Nombre</label>
                <input
                  v-model="form.nombre"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': enviado && !form.nombre }"
                  placeholder="Escribe tu nombre"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Correo electrónico</label>
                <input
                  v-model="form.correo"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': enviado && !form.correo }"
                  placeholder="ejemplo@correo.com"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Mensaje</label>
                <textarea
                  v-model="form.mensaje"
                  class="form-control"
                  rows="4"
                  :class="{ 'is-invalid': enviado && !form.mensaje }"
                  placeholder="¿En qué podemos ayudarte?"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                class="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                :disabled="loading"
              >
                <span v-if="!loading">Enviar</span>
                <span v-else class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span v-if="loading">Enviando...</span>
              </button>
            </form>

            <div v-if="enviado" class="alert alert-success mt-3 text-center animate-slide-up">
              ¡Mensaje enviado con éxito!
            </div>

            <div class="mt-4 text-center small text-muted">
              También puedes escribirnos a <strong>contacto@bitporbit.com</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  nombre: '',
  correo: '',
  mensaje: '',
})

const loading = ref(false)
const enviado = ref(false)

const handleSubmit = () => {
  loading.value = true
  enviado.value = false

  setTimeout(() => {
    loading.value = false
    enviado.value = true
    form.value = { nombre: '', correo: '', mensaje: '' }
  }, 1500)
}
</script>

<style scoped>
/* Animaciones */
.animate-float {
  animation: float 6s ease-in-out infinite;
}
@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0); }
}

.animate-fade-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 0.8s ease-out forwards;
  animation-delay: 0.2s;
}
@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Validación */
.is-invalid {
  border-color: #dc3545 !important;
  box-shadow: 0 0 0 0.1rem rgba(220, 53, 69, 0.25);
}

/* Modo oscuro */
body.dark-mode .card {
  background-color: #1e1e1e;
  color: #f1f1f1;
}
body.dark-mode .form-control {
  background-color: #2a2a2a;
  color: white;
  border: 1px solid #444;
}
body.dark-mode .form-control::placeholder {
  color: #ccc;
}
body.dark-mode .alert-success {
  background-color: #154c2f;
  color: #d4edda;
}
body.dark-mode .btn-primary {
  background-color: #2563eb;
  border-color: #2563eb;
}
</style>
