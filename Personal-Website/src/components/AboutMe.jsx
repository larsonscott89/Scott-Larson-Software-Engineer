import Headshot from '../assets/Personal Website.png'

export default function AboutMe () {
  return (
    <div>
      <h1 className='title-label'>About Me</h1>
      <div className='aboutme-container'>
        <img className='headshot' src={Headshot} alt='Headshot'/>
        <div>
          <h5 className='about-me-main'>Greetings! Welcome to my digital haven, where technology meets creativity, and innovation knows no bounds. My journey into the realm of software engineering was forged amidst the dynamic landscape of the refine fuels industry, where troubleshooting automation systems ignited my passion for problem-solving and sparked a desire for continuous learning.</h5>

          <h5 className='about-me-main'>Hailing from the heart of Texas and now settled in the serene landscapes of Ocala, Florida, I bring with me a wealth of experiences and a relentless drive to excel. My tenure in the refine fuels industry provided me with invaluable insights into the intricacies of automation systems, fostering a deep-rooted appreciation for the synergy between human intellect and technological prowess.</h5>

          <h5 className='about-me-main'>Transitioning into the world of software engineering was a natural progression, fueled by my insatiable thirst for knowledge and a penchant for innovation. My tenure at General Assembly further enriched my skill set, equipping me with proficiency in a myriad of technologies including React, HTML, CSS, Python, Django, MongoDB, Express, Node.js, and JavaScript.</h5>

          <h5 className='about-me-main'>But my journey doesn't stop there. Beyond the realm of traditional software development, I harbor a fervent passion for game development—a realm where creativity knows no bounds and imagination takes flight. While I understand the importance of gaining experience in this competitive field, my enthusiasm remains undeterred, driving me to pursue every opportunity to hone my craft and make strides towards realizing my aspirations.</h5>

          <h5 className='about-me-main'>In every endeavor I undertake, whether it's crafting intuitive user interfaces or delving into the depths of algorithmic complexities, my commitment to excellence remains unwavering. I thrive on challenges, viewing each obstacle as an opportunity for growth and refinement. My ultimate goal is to leverage my skills and expertise to create transformative experiences that resonate with users and leave a lasting impact on the world.</h5>

          <h5 className='about-me-main'>Join me on this exhilarating journey as we push the boundaries of what's possible, embrace innovation, and pave the way for a future where technology serves as a catalyst for positive change. Together, let's embark on a voyage of discovery, collaboration, and boundless potential.</h5>
        </div>
      </div>
    </div>
  )
}