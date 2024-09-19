<template>
    <section id="motoras" class="section-container">
      <!-- Imagen a la izquierda -->
      <div class="section-item" data-aos="fade-up" data-aos-duration="1000">
        <div class="text-content">
          <h2>Estimulación de Habilidades Motoras</h2>
          <p>
            En nuestro geriátrico, nos dedicamos a la estimulación motora integral de nuestros residentes, facilitando su independencia y calidad de vida. Nuestros programas incluyen ejercicios diseñados para mejorar la movilidad, la coordinación y la fuerza muscular, contribuyendo significativamente a una vida activa y saludable.
          </p>
          <p>
            Además, ofrecemos actividades que están orientadas a mantener y mejorar la flexibilidad y el equilibrio, aspectos clave para prevenir caídas y promover la seguridad en el entorno cotidiano. Trabajamos con equipos especializados y técnicas adaptadas a las necesidades individuales de cada residente.
          </p>
        </div>
        <img src="/MOTORA1.jpg" alt="Ejercicios motores" class="section-image"/>
      </div>
      
      <!-- Imagen a la derecha -->
      <div class="section-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        <img src="/MOTORA2.jpg" alt="Actividades adicionales" class="section-image"/>
        <div class="text-content">
          <h2>Actividades Adicionales</h2>
          <p>
            En nuestra institución, también ofrecemos una variedad de actividades recreativas y terapéuticas que ayudan a mantener el bienestar físico y mental de nuestros residentes. Desde talleres de arte y manualidades hasta clases de baile y yoga adaptadas, cada actividad está diseñada para estimular y enriquecer la experiencia diaria.
          </p>
        </div>
      </div>
      
      <!-- Imagen a la izquierda -->
      <div class="section-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
        <div class="text-content">
          <h2>Rehabilitación Personalizada</h2>
          <p>
            Nuestros programas de rehabilitación están diseñados de manera personalizada para cada residente, teniendo en cuenta sus condiciones y objetivos específicos. Colaboramos con profesionales capacitados para ofrecer sesiones de terapia individualizadas que ayudan en la recuperación y mejora continua.
          </p>
        </div>
        <img src="/MOTORA3.jpg" alt="Rehabilitación personalizada" class="section-image"/>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'SectionMotoras'
  }
  </script>
  
  <style scoped>
  .section-container {
    padding: 60px 20px;
  }
  
  .section-item {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }
  
  .section-image {
    width: 50%;
    height: auto;
  }
  
  .text-content {
    width: 50%;
  }
  
  h2 {
    font-size: 1.5em;
    color: #008080; /* Verde agua */
  }
  
  p {
    font-size: 1em;
    line-height: 1.6;
  }
  </style>
  