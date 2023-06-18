import { useState, useEffect } from 'react'
import mylogo from './photos/mylogo2.png'
import bg from './photos/bg.mp4'
import { Homepagebody } from './homepagebody'
import { Link } from 'react-scroll'

export  function Header(){
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const aboutSection = document.getElementById('aboutme');
    const projectSection = document.getElementById('myproject');
    const skillSection = document.getElementById('skill');
    const contactSection = document.getElementById('contact');
    const scrollPosition = window.pageYOffset;
    if (
      scrollPosition >= aboutSection.offsetTop &&
      scrollPosition < projectSection.offsetTop
    ) {
      setActiveSection('aboutme');
    } else if (
      scrollPosition >= projectSection.offsetTop &&
      scrollPosition < skillSection.offsetTop
    ) {
      setActiveSection('myproject');
    } else if (
      scrollPosition >= skillSection.offsetTop &&
      scrollPosition < contactSection.offsetTop
    ) {
      setActiveSection('skill');
    } else if (scrollPosition >= contactSection.offsetTop) {
      setActiveSection('contact');
    } else {
      setActiveSection('');
    }
  };
  
const [toggle, settoggle]=useState(false)


    return(
    
      <div className="mainmain">
        <video autoPlay loop muted className='bgvideo'>
          <source src={bg} type='video/mp4'/>
        </video>
      
     
        <div  className='navbodymobile'>
        
        <img className='navimgmobile' src={mylogo} alt="logo"/>
  
      <div onClick={()=>{settoggle(!toggle)}}  className={toggle?'navmobilemenuactive':'navmobilemenu'}>
      </div>

     
     </div>
     <ul id='navmobile' className={toggle?'navbarmobileshow':'navbarmobilehide'}>
          <li className='navitemmobile'><a onClick={()=>{settoggle(!toggle)}} href='#aboutme'>Me &#x1F464;
</a></li>
          <li className='navitemmobile'><a onClick={()=>{settoggle(!toggle)}}  href='#myproject'>Projects &#x1F4BB;</a></li>
          <li className='navitemmobile'><a onClick={()=>{settoggle(!toggle)}}  href='#skill'>Skills &#x1F393;</a></li>
          <li className='navitemmobile'><a onClick={()=>{settoggle(!toggle)}}  href='#contact'>Contact &#x1F4E9;</a></li>
          
        </ul>
      

       <nav className='navbody'>
        
          <img className='navimg' src={mylogo} alt="logo"/>
    
        <ul className='navbar'>
          <li   className='navitem'><Link  className={activeSection === 'aboutme' ? 'active' : ''} to='aboutme' smooth={true} duration={500}>ME &#x1F464;</Link></li>
          <li    className='navitem'><Link className={activeSection === 'myproject' ? 'active' : ''} to='myproject' smooth={true} duration={500}>Projects &#x1F4BB;</Link></li>
          <li   className='navitem'><Link className={activeSection === 'skill' ? 'active' : ''} to='skill' smooth={true} duration={500}>Skills &#x1F393;</Link></li>
          <li  className='navitem'><Link className={activeSection === 'contact' ? 'active' : ''} to='contact' smooth={true} duration={500}>Contact &#x1F4E9;</Link></li>
          </ul>
       </nav>
       <Homepagebody/>
            </div>
                
       
    )
}