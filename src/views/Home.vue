<template>
  <section class="hero-section d-flex align-items-center justify-content-center text-start fade-in" data-aos="fade-up">
    <div class="container">
      <div class="row align-items-center g-5">
        <!-- Columna Izquierda: Texto -->
        <div class="col-lg-6">
          <pre class="hero-code">
<span class="brace">{</span>
print(<span class="strike">"Hola mundo"</span>
<span class="highlight">"Hola Futuro"</span>)
<span class="brace">}</span>
          </pre>
          <router-link to="/cursos" class="btn btn-lg btn-gradient px-5 py-3 shadow-sm mt-3 animate-button">
            <i class="bi bi-play-circle me-2"></i>Empieza a aprender
          </router-link>
          <p class="hero-sub mt-3">
            Bienvenido al ecosistema de comunidad y aprendizaje para programadores.
          </p>
        </div>

        <!-- Columna Derecha: Imagen -->
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
</template>
