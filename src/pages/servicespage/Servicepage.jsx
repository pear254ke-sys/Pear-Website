import "./servicepage.css"
export default function Servicepage(){
    return (<section class="services" id="services">
        <div class="services-container">
          <div class="services-header">
            <h2>Our Services</h2>
            <p>We build fast, scalable, and user-focused digital products.</p>
          </div>
      
          <div class="services-grid">
            <div class="service-card">
              <h3>Frontend Development</h3>
              <p>
                Modern, responsive user interfaces built with performance and
                accessibility in mind.
              </p>
              <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>React / Vue</li>
                <li>Responsive Design</li>
              </ul>
            </div>
      
            <div class="service-card">
              <h3>Backend Development</h3>
              <p>
                Secure and scalable server-side systems that power your applications.
              </p>
              <ul>
                <li>APIs & Databases</li>
                <li>Authentication</li>
                <li>Cloud & Server Logic</li>
              </ul>
            </div>
      
            <div class="service-card">
              <h3>Mobile Development</h3>
              <p>
                High-performance mobile applications for Android and iOS platforms.
              </p>
              <ul>
                <li>Flutter / React Native</li>
                <li>Native Integrations</li>
                <li>App Store Deployment</li>
              </ul>
            </div>
      
            <div class="service-card">
              <h3>Web Design</h3>
              <p>
                Clean, modern designs focused on user experience and conversion.
              </p>
              <ul>
                <li>UI / UX Design</li>
                <li>Wireframes & Prototypes</li>
                <li>Brand Consistency</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      )
}