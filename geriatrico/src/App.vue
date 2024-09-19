<template>
  <div class="app-container">
    <header class="header">
      <h1>Bienvenido al Geriátrico</h1>
      <nav class="nav-bar">
        <a href="#inicio" class="nav-button">Inicio</a>
        <a href="#motoras" class="nav-button">Habilidades Motoras</a>
        <a href="#mentales" class="nav-button">Habilidades Mentales</a>
        <a href="#contacto" class="nav-button">Contáctanos</a>
      </nav>
    </header>

    <!-- Texto Inicial -->
    <section id="inicio" class="intro-section">
      <h2>Bienvenidos a Nuestro Geriátrico</h2>
      <div class="intro-content">
        <img src="/teraapia-física.jpg" alt="Bienvenida" class="intro-image"/>
        <div class="intro-text">
          <p>
            En nuestro geriátrico, entendemos que la vida no termina con la edad avanzada; al contrario, creemos que es una oportunidad para disfrutar de la vida de una manera nueva y enriquecedora. Nos especializamos en ofrecer un entorno seguro y estimulante para nuestros residentes, donde cada día está lleno de actividades diseñadas para promover su bienestar físico y mental. Nuestro equipo de profesionales dedicados trabaja arduamente para crear un ambiente acogedor y lleno de cariño. Ofrecemos programas personalizados de cuidado que abarcan desde la estimulación motora hasta la estimulación cognitiva, asegurando que cada residente pueda vivir de manera activa e independiente en la medida de lo posible. Desde actividades grupales hasta terapias individuales, nuestro enfoque está centrado en la calidad de vida. Nos enorgullece ver cómo nuestros residentes continúan creciendo, aprendiendo y disfrutando de sus pasatiempos favoritos. En nuestro geriátrico, cada día es una nueva oportunidad para crear recuerdos felices y significativos.
          </p>
        </div>
      </div>
    </section>

    <!-- Sección Motoras -->
    <SectionMotoras />

    <!-- Sección Mentales -->
    <SectionMentales />

    <!-- Sección de Contacto -->
    <section id="contacto" class="contact-section">
      <h2>Contáctanos</h2>
      <p>
        Para más información sobre nuestros servicios o para programar una visita, por favor contáctanos. Estamos aquí para ayudarte a ti y a tus seres queridos. No dudes en ponerte en contacto con nosotros para resolver cualquier duda o inquietud.
      </p>
      <p>
        <strong>Teléfono:</strong> (123) 456-7890<br/>
        <strong>Email:</strong> contacto@geriatricoinstituto.com<br/>
        <strong>Dirección:</strong> Calle Ejemplo 123, Ciudad, País
      </p>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>© 2024 Geriátrico - Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
import SectionMotoras from './components/SectionMotoras.vue';
import SectionMentales from './components/SectionMentales.vue';

export default {
  components: {
    SectionMotoras,
    SectionMentales
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

/* Colores base */
:root {
  --verde-claro: #a8e6cf;
  --blanco: #ffffff;
  --verde-agua: #76b39d;
  --negro: #000000;
}

/* Estilos generales */
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: var(--negro);
  color: var(--blanco);
}

.app-container {
  text-align: center;
}

/* Header */
.header {
  background-color: var(--verde-agua);
  color: var(--blanco);
  padding: 2rem;
}

.header h1 {
  font-size: 2.5rem;
  margin: 0;
}

.nav-bar {
  margin-top: 1rem;
}

.nav-button {
  display: inline-block;
  padding: 10px 20px;
  margin: 0 10px;
  background-color: var(--verde-claro);
  color: var(--blanco);
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2rem;
  transition: background-color 0.3s, transform 0.3s;
}

.nav-button:hover {
  background-color: var(--verde-agua);
  transform: scale(1.05);
}

/* Footer */
.footer {
  background-color: var(--verde-claro);
  color: var(--blanco);
  padding: 1rem;
  margin-top: 2rem;
}

.footer p {
  margin: 0;
}

/* Secciones */
.intro-section {
  padding: 3rem;
  background-color: var(--blanco);
  color: var(--negro);
}

.intro-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.intro-image {
  width: 40%;
  border-radius: 10px;
}

.intro-text {
  max-width: 60%;
}

.intro-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.intro-section p {
  font-size: 1.2rem;
  line-height: 1.8;
}

/* Sección Motoras y Mentales */
.section-container {
  padding: 2rem;
  background-color: var(--blanco);
  color: var(--verde-agua);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.section-container h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.section-container p {
  font-size: 1.1rem;
  line-height: 1.6;
}

.section-image {
  max-width: 100%;
  border-radius: 10px;
}

.contact-section {
  padding: 2rem;
  background-color: var(--verde-claro);
  color: var(--blanco);
  text-align: left;
}
</style>
