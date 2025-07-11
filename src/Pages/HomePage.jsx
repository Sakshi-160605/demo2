import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header/Header'


const HomePage = () =>{
    return(
        <div>
            <Header />
             <div ClassName="all">
                      <h1 id="demo">Welcome to Vivekanand College!</h1>
                       <p id="demo2">Your journey to excellence starts here.</p>
                        <div Link to="/AdmissionPage" className="button">Apply
      </div>
      <div className="home" id="scroller">
<img src="\Images\vck.png" img height="200" width="800" controls></img>
      <button type="button">Apply Now!</button>
      </div>
    
      <p>**Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
<p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
    <h2 id="demo2">Why Choose Vivekanand College?</h2>
<ul>
  <li>**Legacy of Excellence:** Decades of commitment to quality education.
</li>
  <li>**Experienced Faculty:** Learn from renowned experts and passionate educators.
</li>
  <li>**Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.
</li>
  <li>**Holistic Development:** Focus on co-curricular activities, sports, and community service.
</li>
<li>**Strong Placements:** Excellent career opportunities with leading companies.
</li>
</ul>
<h2>Campus Life & Facilities</h2>
<img src="\Images\vck1.jpeg" img height="400" width="400"  controls></img>
<img src="\Images\vck2.jpg" img height="400" width="400"  controls></img>
<p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
<p>Ready to explore our courses?</p>
<Link to="/courses" className="button">Explore Courses</Link>
        </div>
        </div>
        
    )
}
export default HomePage 