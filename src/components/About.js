import React from 'react'

const About =()=> {
  
    return (
      <div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                About Us
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                We can provide different types of <strong>news articles</strong> like <strong>Business, Entertainment, General, Health, Science, Sports, Technology and many more.</strong><br></br> Our <strong>articles</strong> are written by <strong>experienced writers</strong> and are updated regularly to ensure that you get the latest information.<br></br> We strive to provide accurate and unbiased news coverage, so you can trust that you are getting the most reliable information available.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Features
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <h3 align="center" style={{ margin: "10px", padding: "10px" }} >Core Structural Features :</h3>
                <h5 align="left" style={{ margin: "10px", padding: "10px" }} >1. Category Navigation: A horizontal nav bar showcases major content domains :</h5> 
                <div style={{ margin: "10px", padding: "10px" }}>
                  🏠 <strong>Home -</strong> Here, you can see all types of news. <br></br>
                  📘 <strong>About -</strong> Here, you can see the information about the website. <br></br>
                  💼 <strong>Business -</strong> Here, you can see the news related to business. <br></br>
                  🎬 <strong>Entertainment -</strong> Here, you can see the news related to entertainment. <br></br>
                  🏥 <strong>Health -</strong> Here, you can see the news related to health. <br></br>
                  🔬 <strong>Science -</strong> Here, you can see the news related to science. <br></br>
                  ⚽ <strong>Sports -</strong> Here, you can see the news related to sports. <br></br>
                  💻 <strong>Technology -</strong>  Here, you can see the news related to technology. <br></br>
                </div>

                <h5 style={{ margin: "10px", padding: "10px" }}>2. Usability Features :</h5>

                <div style={{ margin: "10px", padding: "10px" }}>
                  <strong>Clear Layout -</strong> The navigation is well-organized for user-friendly browsing.<br></br>
                  <strong>Categorized Content -</strong> Helps readers quickly find updates in specific domains of interest.<br></br>
                  <strong>Professional Look -</strong> Simple yet effective header design builds credibility and visual clarity.<br></br>
                </div>

                <h5 style={{ margin: "10px", padding: "10px" }}>3. Functional Features :</h5>

                <div style={{ margin: "10px", padding: "10px" }}>
                  <strong>Dynamic Routing -</strong> Utilizes React Router for seamless navigation between different categories.<br></br>
                  <strong>Responsive Design -</strong> Ensures a smooth user experience across various devices and screen sizes.<br></br>
                  <strong>State Management -</strong> Uses React's state management to handle active navigation states and dynamic content loading.<br></br>
                  <strong>SEO Optimization -</strong> Each category page is optimized for search engines to improve visibility and discoverability.<br></br>
                  <strong>Accessibility Features -</strong> Includes ARIA attributes and semantic HTML for better accessibility.<br></br>
                  <strong>Performance Optimization -</strong> Lazy loading of components and efficient state updates to enhance performance.<br></br>
                  <strong>Security Measures -</strong> Implements best practices for secure routing and data handling.<br></br>
                  <strong>Testing and Debugging -</strong> Thoroughly tested for functionality and user experience across different browsers and devices.<br></br>
                  <strong>Future Scalability -</strong> Designed to easily accommodate additional categories or features without major overhauls.<br></br>
                  <strong>Community and Support -</strong> Open to contributions and feedback from the developer community for continuous improvement.<br></br>  
                </div>   
              </div>
            </div>
          </div>
        </div>
        <footer style={{textAlign: 'center', marginTop: '20px'}}>
          © 2025 UpdateZone. All Rights Reserved.
        </footer>
      </div>
    )
  }
export default About;
