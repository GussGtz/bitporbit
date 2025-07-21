<template>
  <section class="about-section py-5" data-aos="fade-up">
    <div class="container">
      <div class="row align-items-center g-5">
        <!-- Imagen real del profesor -->
        <div class="col-lg-5 text-center">
          <div class="position-relative d-inline-block">
            <img
              src="https://innovacodeacademy.netlify.app/profe2.png"
              alt="Mtro. Rafael"
              class="img-fluid rounded-circle border border-4 border-primary shadow-lg animate-float"
              style="max-width: 280px"
            />
            <div class="decorative-bg position-absolute"></div>
          </div>
        </div>

        <!-- Descripción -->
        <div class="col-lg-7">
          <div class="card p-4 shadow-lg border-0 rounded-4 animate-fade-up" data-aos="fade-left" data-aos-delay="200">
            <h2 class="text-primary mb-3">Conoce al Mtro. Rafael Villegas Velasco</h2>
            <p>
              El <strong>Mtro. Rafael</strong> es un apasionado de la enseñanza y la tecnología. Egresado de la <strong>Universidad Tecnológica de Cancún</strong> como Ingeniero en Tecnologías de la Información y Comunicación, actualmente forma parte del claustro docente de la misma institución, donde ha compartido su experiencia por más de <strong>10 años</strong>.
            </p>
            <p>
              A lo largo de su trayectoria, ha guiado a cientos de estudiantes en su proceso de formación profesional, siendo reconocido por su estilo claro, empático y práctico. Su filosofía de enseñanza se basa en el acompañamiento constante, el uso de ejemplos reales y el fomento de la curiosidad como motor del aprendizaje.
            </p>
            <p>
              Esta plataforma nace como una extensión de su compromiso con sus alumnos y alumnas, especialmente aquellos que buscan aprender de forma accesible, gratuita y dinámica. Aquí encontrarás contenido adaptado a los planes de estudio, recursos diseñados con enfoque didáctico y un espacio donde la educación se vuelve una experiencia significativa.
            </p>
            <p class="mb-0">
              Para el Mtro. Rafael, enseñar no es solo compartir conocimiento, sino inspirar a pensar, crear y transformar.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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

/* Fondo decorativo detrás del avatar */
.decorative-bg {
  width: 120px;
  height: 120px;
  background: radial-gradient(circle at center, #0d6efd66, transparent);
  border-radius: 50%;
  bottom: -30px;
  left: -30px;
  opacity: 0.4;
  z-index: -1;
}

/* Posicionamiento */
.position-relative { position: relative; }
.position-absolute { position: absolute; }

/* Modo oscuro */
body.dark-mode .card {
  background-color: #1f1f1f;
  color: #f1f1f1;
}
body.dark-mode .decorative-bg {
  background: radial-gradient(circle at center, #0d6efd33, transparent);
}
</style>
