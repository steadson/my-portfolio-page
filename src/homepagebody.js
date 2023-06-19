import twitter from './photos/twitter.png'
import facebook from './photos/facebook.png'
import fiverr from './photos/fiverr.png'
import linkedin from './photos/linkedin.png'
import github from './photos/github.png'
import { useState } from 'react'
import { Element} from 'react-scroll'
import myphoto from './photos/mainphoto.jpg'



export function Homepagebody(){
   
const [formData, setformData]=useState({name:'',title:"", message:""})

function handlechange(e){
setformData(preformdata=>{
    return{
        ...preformdata,[e.target.name]:e.target.value
    }
})

}
function handlesubmit(e){
    e.preventDefault();
    const mailtoLink = `mailto:steadsonallen1@gmail.com?
    subject=Contact%20Form%20Submission&body=Name: 
    ${formData.name}%0ATitle: ${formData.title}%0AMessage: ${formData.message}`;

    window.location.href = mailtoLink;
   
   
   

}
    


    return(
        <div>
      <div className='bodycontainer'>
        <div className='leftside'>
<div className='name'> STEADSON ALLEN</div>
<div className='position'>&#x1F464; LEAD DEVELOPER @SafeStake</div>
<div className='intro'> &#x1F4D8; A Full-Stack Developer with years of experience in Mobile/Web/Desktop Development.<br/>I build Responsive, User-friendly
 and Scalable programs &#x1F4A9; &#x1F441;</div>
 <div className='summary'>
    <div className='summarybody'>
        <span>100%</span>
        <span>Job rate success &#x2705;</span>
    </div>
    <div className='summarybody'>
        <span>15</span>
        <span> Major projects as lead Dev. &#x1F4C2;</span>
    </div>
    <div className='summarybody'>
        <span>27+</span>
        <span>  Bussinesses helped &#x1F4BC;</span>
    </div>

 </div>
 <div className='facecard'>
 <img className='myphoto' alt='myphoto' src={myphoto}/>
 <span className='appeal' ><a href='https://wa.me/08149844472/?text= Hello steadson.'>WhatsApp chat</a> &#x1F4F1; &#x1F448;</span>

<h6>My Socials: &#x1F447;</h6>
 <div className="social">
    <span></span>
    <a href='https://www.twitter.com/Steadson1?t=flJUOrF9Ft2KQXhx9-eVCw&s=01'><img  alt='twitter' src={twitter}/></a>
    <a href='https://www.github.com/steadson'><img alt='github' src={github}/></a>
    <a href='https://www.fiverr.com/steadsonallen'><img alt='fiverr' src={fiverr}/></a>
    <a href='https://www.linkedin.com/in/steadson-allen-13192521a'><img alt='linkedin' src={linkedin}/></a>
    <a href='https://www.facebook.com/fred.tobi.96'><img alt='facebook' src={facebook}/></a>
 </div>
 </div>
 
        </div>
        <div className='rightside'>
            <div className="rightsideBody"><Element  id='aboutme' name='aboutme'> <section className='aboutme'>
                <div className='space'></div>
                    <h1>ME &#x1F464; &#x1F574;</h1>
                    <p>Welcome &#x1F44B; &#x1F64B;, I'm thrilled to have the opportunity to
                         introduce myself. My colleagues do call me S A, Steadman, STD 😀.  I'm a full-stack developer with a strong background 
                         in JavaScript, Python, C++,PHP and many more . With over 7+ years of experience in 
                         the programming industry &#x1F4BB; &#x2328;, I am passionate about creating exceptional 
                         software solutions for Web, Mobile, Desktop and backend system that drive
                          innovation and meet the unique needs of businesses.</p>
                          <p>
                          My programming journey &#x1F5FA; began with a fascination for JavaScript, Python, and C++, 
                          and I have since leveraged these languages to develop robust and scalable applications.
                           Whether I'm crafting dynamic user interfaces with React, Angular or vue ,
                           or building powerful server-side applications with Node.js or PhP, I strive 
                           to deliver high-quality code that adheres to industry best practices and provides
                            an exceptional user experience. 
In addition to my core languages, I have extensive experience working with frameworks and libraries 
such as React Native, Flutter. This allows me to develop cross-platform mobile applications with
 a native-like experience. I find great satisfaction &#x1F60C; in creating efficient, user-friendly,
  and visually appealing mobile &#x1F4F1; apps that can seamlessly run on both iOS and Android platforms. 
                          </p>
                          <p>
                          As a developer, I understand &#x1F644; the significance of database management in ensuring
                           the integrity and performance of applications. I have worked extensively with MongoDB 
                           and MySQL, designing and implementing optimized database  &#x1F3E2; that handle data 
                           with utmost efficiency. I am well-versed in writing efficient queries, creating data models,
                            and integrating databases into the overall application architecture &#x1F3E0;. 
                          </p>
                          <p>
                          Throughout my career, I have had the privilege of working on diverse projects, ranging from
                           small-scale &#x1F50D; applications to enterprise-level &#x1F30D; solutions. This experience has provided me with a 
                           deep understanding &#x1F914; of the software development life cycle, agile methodologies, and the importance
                            of collaborative teamwork. I am comfortable in fast-paced environments, adapting to new technologies,
                             and solving complex problems. 
                          </p>
                          <p>
                          What sets me apart as a developer is not just my technical expertise, but also my passion for continuous &#x267E;
                           learning. I stay up-to-date with the latest industry trends and technologies, exploring new 
                           frameworks, libraries, and tools that can enhance my development process and improve the overall user
                            experience. I believe that staying ahead of the curve is essential in delivering innovative solutions 
                            that exceed expectations.
                          </p>
                          <p>Effective communication and collaboration are key &#x1F511;&#x1F511; components of successful projects. I take pride in
                             my ability to communicate and collaborate effectively with clients, stakeholders, and team members. By 
                             fostering clear lines of communication, I ensure that project requirements are thoroughly understood 
                             and that deliverables align with expectations. I am always open to feedback and strive for continuous 
                             improvement &#x1F527; in my work.</p>
                             <p>
                             Thank you &#x1F64F; for taking the time to explore my page &#x1F60A;. I am excited to showcase my skills and projects, 
                             which highlight my ability to tackle diverse programming challenges. If you have any inquiries, collaboration
                              opportunities, or would like to discuss &#x1F5E3;&#xFE0F; your project requirements, please feel free to reach out to me. I look 
                              forward to connecting &#x1F517; with you and exploring how we can work together &#x1F91D; to bring your vision to life 🌱. 
                             </p>
                </section></Element>
               
                <Element id='myproject' name='myproject'> <section className='myproject' >
                <div className='space'></div>
                    <h1>PROJECTS &#x1F4C2;&#x1F4C2;</h1>
          <h4 style={{color:'gold'}}>Below are the list of  some projects i have done/working on. &#x1F525;&#x1F525;&#x1F525;</h4>
                    <div className='projectlist'>
                        <h1>GETYOUTUBEVIDEOS &#x1F3A5;</h1>
                        <p>This project allows users to download YouTube videos in various formats and resolutions. It
                             utilizes the YouTube Data API to fetch video data and provides a user-friendly interface
                              for selecting the desired format and quality.
</p>
                        <ol><li>JavaScript</li><li>React</li><li> Node.js</li></ol>
                    </div>
                    <div className='projectlist'>
                        <h1>NOWSCORELINE &#x26BD;</h1>
                            <p>NOWSCORELINE project provides real-time updates and information about various sports 
                                events and matches. Users can view live scores, match statistics, team details, and upcoming fixtures.
                            </p>
                            <ol><li>JavaScript</li><li>React</li><li> Node.js</li><li>RESTful API</li></ol>
                    </div>
                    <div className='projectlist'>
                        <h1>CRYPTOMARKETNOW &#x1F4B0;</h1>
                        <p>This project tracks the latest prices, market trends, and historical data of various 
                            cryptocurrencies. in coming updates, It will allows users to create personalized watchlists,
                             set price alerts, and analyze market performance.</p>
                             <ol><li>JavaScript</li><li>React</li><li> Node.js</li><li>RESTful API</li><li>python</li></ol>
                    </div>
                    <div className='projectlist'>
                        <h1>STOCKZMARKETNOW &#x1F4C8;</h1>
                        <p>
                        The Stock Market Tracker project provides real-time stock quotes, charts, and financial data for
                         different companies and markets. in coming updates, Users can monitor their stock portfolios, set
                          custom alerts, and perform in-depth technical analysis.
                        </p>
                        <ol><li>JavaScript</li><li>React</li><li> PhP</li><li>RESTful API</li><li>python</li></ol>
                    </div>
                    <div className='projectlist'>
                        <h1>SafeStake &#x1F3B0;</h1>
                        <p>
                        As the lead developer, I am currently working on a comprehensive peer to peer sports betting and collaborative syndicate sport platform.
                         This project involves designing and implementing a secure and user-friendly platform that facilitates sports
                          betting, live odds updates, and account management features.
                        </p>
                        <ol><li>JavaScript</li><li>React</li><li> PhP</li><li>nodejs</li><li>RESTful API</li><li>python</li></ol>
                    </div>
                    <div className='projectlist'>
                        <h1>HandyPeers &#x1F477;&#x200D;</h1>
                        <p>
                        HandyPeers is a platform specifically focused on connecting users with home service professionals. It offers a wide range of services, including 
                        carpentry, electrical work, plumbing, and more. Handy professionals can create profiles, set their availability, and get hired for jobs.
                        this is a personal project still in development.
                        </p>
                        <ol><li>JavaScript</li><li>React</li><li> PhP</li><li>nodejs</li><li>RESTful API</li><li>python</li></ol>

                    </div>
                    <div className='projectlistsummary'>
                        <p>
                        In addition to these projects, I have had the opportunity to collaborate with numerous small and medium-sized enterprises, developing
                         custom software solutions tailored to their specific needs. These projects
                          have encompassed a wide range of domains, including e-commerce &#x1F6D2;, logistics &#x1F3E5;,
                           healthcare &#x1F69A;, and more. I take pride in my ability to understand business requirements 
                           and deliver scalable and efficient solutions.
                        </p>
                        <p>
                        I am continuously seeking new challenges and opportunities to expand my skill set and contribute to meaningful projects.
                         I'm passionate about leveraging technology to drive innovation and improve 
                         the overall user experience. If you would like to learn more about any 
                         of these projects or explore potential collaboration opportunities, 
                         please don't hesitate to get in touch &#x1F919;.
                        </p>

                    </div>
                </section></Element>
               
                <Element name='skill' id='skill'> <section className='skill' >
                <div className='space'></div>
                <h1>SKILL &#x1F393;&#x1F393;</h1>
                    <p>
                    As a seasoned full-stack developer with 7+ years of experience, I have acquired a 
                    diverse range of skills and expertise. My proficiency 
                    extends across various programming languages, frameworks, databases, and 
                    development tools. Here are some of the key skills that I possess:
                    </p>
                    <ul>
                        <li>
                            <h6>JAVASCRIPT &#x1F4DC;</h6>
                        I have a strong command of JavaScript, utilizing it for both front-end and back-end development.
                         I am proficient in ES6+ syntax, asynchronous programming, 
                         and modern JavaScript frameworks such as React and React Native.
                        </li>
                        <li>
                        <h6>PYTHON &#x1F40D;</h6>
                         I am well-versed in Python, leveraging its simplicity and versatility to develop robust and scalable
                         applications. I have experience in building web applications, 
                         data analysis scripts, and automation tools using frameworks like Django and Flask.
                        </li>
                        <li> <h6>C++ &#x1F527;</h6> My proficiency in C++ allows me to develop high-performance applications and 
                            optimize code for efficiency. I have utilized C++ for algorithm 
                            design, system programming, and performance-critical tasks.</li>
                        <li> <h6>MongoDB &#x2601;&#x1F4BE;</h6> I have hands-on experience working with MongoDB, a NoSQL database. I 
                            am proficient in data modeling, querying, and performing CRUD operations 
                            using MongoDB's flexible document-based structure.</li>
                        <li> <h6>MySQL &#x2601;&#x1F4BE;</h6> I am well-versed in working with MySQL, a relational database management system. 
                            I have expertise in designing efficient database 
                            schemas, writing complex queries, and optimizing database performance.</li>
                        <li> <h6>NODE.js 🖥️</h6> I am skilled in using Node.js for server-side development, building scalable APIs, 
                            and handling asynchronous tasks. I have 
                            experience with frameworks such as Express.js and integrating with databases and third-party services.</li>
                        <li>  <h6>REACT-NATIVE &#x1F4F1;</h6>I am proficient in cross-platform mobile app development using React Native. I have successfully
                             built and deployed mobile applications for iOS and Android platforms, leveraging native device capabilities.</li>
                        <li><h6>REACT &#x1F310;</h6> I possess extensive experience in developing dynamic and interactive user interfaces using React.js. I am skilled 
                            in building reusable components, managing state, and integrating APIs to create seamless user experiences.</li>
                        <li><h6>GIT &#x1F195;</h6>  I am proficient in version control using Git, utilizing its branching strategies, merging, and collaborating
                        
                             with other developers effectively. I have experience
                              with platforms like GitHub and GitLab for code repository management.</li>
                              <li><h6>ELECTRON &#x1F4BB;</h6> 
                        i am also proficient  in building cross-platform Desktop Applications
                         for Windows Mac and Linux using Electron. i have build multiple customised desktop Apps for small and medium
                         size enteprises that serves their day to day
                        activities. </li>
                        <li><h6>PROBLEM SOLVING &#x1F9E9;</h6> With my strong analytical and problem-solving skills, I can tackle complex coding challenges and debug
                             issues efficiently. I am adept at breaking down problems, identifying
                              optimal solutions, and writing clean and maintainable code.</li>
                    </ul>
                    <div className='skillsummary'>
                        <span>In addition to the skills i have acquired over the years &#x1F447;&#x1F447;&#x1F447;
                        
                        </span>
                        <ol>
                            <li>vue</li>
                            <li>PHP</li>
                            <li>c</li>
                            <li>flutter</li>
                            <li>docker & kubernatics</li>
                            <li>more</li>
                        </ol>
                        <p>Throughout my career, I have successfully applied these skills to deliver innovative solutions &#x1F4A1;, create user-friendly applications
                            , and meet project objectives. I am committed to staying 
                            updated &#x1F504; with the latest industry trends and technologies to continuously enhance my skill set.</p>
                            <p>I am confident &#x1F525; that my skills, coupled with my passion for coding and commitment to quality, make me a valuable asset for any 
                                development project. I look forward to leveraging my
                                 expertise to tackle new challenges &#x1F3AF; and contribute to the success of future endeavors.</p>
                    </div>

                </section></Element>
               
                <Element name='contact'>  <section className='contact' id='contact'>
                <div className='space'></div>
                <h1>CONTACT ME &#x1F4EB;&#x1F4E7;
                </h1>
                    <p>
                    Thank you for visiting! &#x1F64F; If you have any inquiries, collaboration opportunities &#x1F91D;, or if you simply want to get in touch, feel
                     free to reach out to me. I am always open to discussing exciting projects and connecting &#x1F517; with fellow developers .
                    </p>

                    <p>
                    You can also send me an email &#x2709; with your message or requirements or chat me up
                    in one of my Socials &#x1F4F2;&#x1F4AC;, and I will respond promptly. Whether it's a project proposal,
                     a technical question, or a general inquiry, I'm here to assist you &#x1F198;.
                    </p>
                    <form onSubmit={handlesubmit}>
      <input
        type="text"
        placeholder="YOUR NAME &#x1F4DB;"
        name="name"
        value={formData.name}
        onChange={handlechange}
      />
       <input
        type="text"
        placeholder="MESSAGE TITLE &#x1F4CC;"
        name="title"
        value={formData.title}
        onChange={handlechange}
      />

      <textarea rows='10'
        placeholder="ENTER YOUR MESSAGE &#x1F4DD; ✉️"
        value={formData.message}
        onChange={handlechange}
        name='message'
      />
      <button type="submit" onClick={handlesubmit}>Submit&#x1F4E4;</button>
    </form>
    <div className="social">
    <span></span>
    <a href='https://www.twitter.com/Steadson1?t=flJUOrF9Ft2KQXhx9-eVCw&s=01'><img  alt='twitter' src={twitter}/></a>
    <a href='https://www.github.com/steadson'><img alt='github' src={github}/></a>
    <a href='https://www.fiverr.com/steadsonallen'><img alt='fiverr' src={fiverr}/></a>
    <a href='https://www.linkedin.com/in/steadson-allen-13192521a'><img alt='linkedin' src={linkedin}/></a>
    <a href='https://www.facebook.com/fred.tobi.96'><img alt='facebook' src={facebook}/></a>
 </div>

 <small>source code this portfolio can be forked <a href='https://github.com/steadson/my-portfolio-page'>Here</a></small>
                </section></Element>
              
                
            </div>

        </div>

      </div>
        </div>
    )
}