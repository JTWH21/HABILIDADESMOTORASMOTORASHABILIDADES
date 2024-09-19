<template>
    <section id="mentales" class="section-container">
      <!-- Imagen a la derecha -->
      <div class="section-item" data-aos="fade-up" data-aos-duration="1000">
        <img src="/MENTAL3.jpg" alt="Estimulación mental" class="section-image"/>
        <div class="text-content">
          <h2>Estimulación Cognitiva</h2>
          <p>
            La estimulación cognitiva es fundamental para mantener la agilidad mental y el bienestar emocional en nuestros residentes. A través de actividades diseñadas específicamente para mejorar la memoria, la concentración y el pensamiento crítico, ayudamos a preservar y potenciar las capacidades cognitivas.
          </p>
          <p>
            Ofrecemos una variedad de ejercicios y juegos mentales que estimulan diferentes áreas del cerebro, promoviendo la interacción social y la participación activa. Además, nuestras sesiones incluyen charlas y talleres que abordan temas de interés, fomentando la conversación y el aprendizaje continuo.
          </p>
        </div>
      </div>
      
      <!-- Imagen a la izquierda -->
      <div class="section-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        <div class="text-content">
          <h2>Terapia de Memoria</h2>
          <p>
            Nuestra terapia de memoria está diseñada para ayudar a nuestros residentes a mantener y mejorar sus habilidades cognitivas a través de ejercicios específicos y actividades adaptadas. Trabajamos con técnicas probadas que apoyan la memoria a corto y largo plazo.
          </p>
        </div>
        <img src="/MENTAL1.jpg" alt="Terapia de memoria" class="section-image"/>
      </div>
      
      <!-- Imagen a la derecha -->
      <div class="section-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
        <img src="/MENTAL2.jpg" alt="Actividades cognitivas" class="section-image"/>
        <div class="text-content">
          <h2>Actividades Cognitivas</h2>
          <p>
            Ofrecemos una amplia gama de actividades cognitivas que incluyen rompecabezas, juegos de lógica, y ejercicios de resolución de problemas. Estas actividades están diseñadas para desafiar y mantener la mente activa, contribuyendo a una mejor calidad de vida.
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'SectionMentales'
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
  