<template>
  <section class="hero-section d-flex align-items-center justify-content-center text-start fade-in" data-aos="fade-up">
    <div class="container">
      <div class="row align-items-center g-5">
        <!-- Texto principal -->
        <div class="col-lg-6">
          <h1 class="display-4 fw-bold mb-3 text-gradient animate-title">
            Aprende a programar<br />
            desde cero, gratis y a tu ritmo.
          </h1>
          <p class="lead text-muted mb-4 animate-subtitle">
            BitPorBit es una plataforma de formación digital con cursos gratuitos, recursos útiles y una comunidad vibrante que te acompaña desde tus primeros pasos hasta dominar habilidades tecnológicas clave.
          </p>
          <router-link
            to="/cursos"
            class="btn btn-lg btn-gradient px-5 py-3 shadow-sm animate-button"
          >
            <i class="bi bi-play-circle me-2"></i>Empieza a aprender
          </router-link>
          <p class="hero-sub mt-3">
            Explora contenido actualizado, aprende desde cualquier lugar y sin pagar un solo peso.
          </p>
        </div>

        <!-- Imagen -->
        <div class="col-lg-6 text-center">
          <img
            src="https://codigofacilito.com/assets/cody-with-techs-0a16265a54871f5278e952befe15f476b32c06bae4f46fb9df867e3e2f73b4ba.png"
            alt="Mascota Programadora"
            class="img-fluid hero-img animate-float"
            style="max-height: 420px"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Sección de beneficios -->
  <section class="benefits-section py-5" data-aos="fade-up">
    <div class="container text-center">
      <h2 class="mb-3 fw-bold">
        <span class="text-gradient">Beneficios</span> de aprender con <strong>BitPorBit</strong>
      </h2>
      <p class="text-muted mb-5">
        Una experiencia de aprendizaje única, pensada para jóvenes y adultos autodidactas.
      </p>

      <div class="row gy-4">
        <div class="col-12 col-md-6 col-lg-3">
          <div class="benefit-box">
            <div class="benefit-number bg-purple">1</div>
            <h5 class="fw-bold">Contenido claro y accesible</h5>
            <p>Aprende desde cero con explicaciones sencillas y prácticas.</p>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <div class="benefit-box">
            <div class="benefit-number bg-violet">2</div>
            <h5 class="fw-bold">Acceso gratuito y seguro</h5>
            <p>Todo el contenido es 100% gratuito, sin cargos ocultos.</p>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <div class="benefit-box">
            <div class="benefit-number bg-pink-light">3</div>
            <h5 class="fw-bold">Enfoque autodidacta</h5>
            <p>Cursos diseñados para que avances a tu ritmo, sin presión.</p>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <div class="benefit-box">
            <div class="benefit-number bg-pink">4</div>
            <h5 class="fw-bold">Crece profesionalmente</h5>
            <p>Aumenta tus oportunidades laborales dominando habilidades tecnológicas.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Estilos hero */
.hero-section {
  background: linear-gradient(to top, #ffffff, #f7f9fb);
  padding: 80px 0;
}

.hero-img {
  max-height: 420px;
}

/* Beneficios */
.benefits-section {
  background-color: #f9f9fc;
}

.benefit-box {
  padding: 20px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.benefit-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.benefit-number {
  width: 48px;
  height: 48px;
  margin: 0 auto 16px;
  border-radius: 50%;
  font-weight: bold;
  font-size: 1.2rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-purple {
  background: #635bff;
}

.bg-violet {
  background: #8c52ff;
}

.bg-pink-light {
  background: #c77dff;
}

.bg-pink {
  background: #f63da5;
}

.text-gradient {
  background: linear-gradient(to right, #7b2ff7, #f63da5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
