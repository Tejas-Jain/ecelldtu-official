class Header extends HTMLElement {
    constructor() {
        super();
        
    }

    connectedCallback() {
        var state = this.getAttribute('state');
        this.innerHTML = `
        
  <!--------------------------Navbar End -------------------------------------->

    <!-------------------------------Navbar large--------------------------------->
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark">
       <a class="navbar-brand pl-3" href="#">
           <img src="image/ecelltext.png" class="logoimg" alt="logo">
       </a>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>

       <div class="collapse navbar-collapse" id="navbarSupportedContent">
         <ul class="navbar-nav ml-md-auto mr-5 text-capitalize ">
           <li class="nav-item ml-0 pl-0 px-2">
             <a class="nav-link ${state==='Home'?'active':null}" href="index.html#firstvphp">Home <span class="sr-only">(current)</span></a>
           </li>
           <li class="nav-item px-2">
             <a class="nav-link ${state === 'About' ? 'active' : null}" href="about.html">About <span class="sr-only">(current)</span></a>
           </li>
           <li class="nav-item px-2">
             <a class="nav-link ${state === 'Initiatives' ? 'active' : null}" href="initiatives.html">Initiatives</a>
           </li>


           <li class="nav-item px-2">
             <a class="nav-link ${state === 'ESummit' ? 'active' : null}" href="esummit.html">E-Summit</a>
           </li>
           <li class="nav-item px-2">
             <a class="nav-link ${state === 'SW' ? 'active' : null}" href="sw.html">SW</a>
           </li>

           <li class="nav-item px-2">
             <a class="nav-link ${state === 'Social' ? 'active' : null}" href="social.html">Social</a>
           </li>

           <li class="nav-item px-2">
             <a  class="nav-link ${state === 'Podcast' ? 'active' : null}" href="https://anchor.fm/entrepreneurship-cell-dtu">Podcast</a>
           </li>


          <li class="nav-item dropdown px-2">
             <a class="nav-link ${state === 'Message' ? 'active' : null} dropdown-toggle" href="index.html#testvphp" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Message
             </a>
             <div class="dropdown-menu" aria-labelledby="navbarDropdown">
               <a class="dropdown-item" href="index.html#testvphp">Testimonials</a>
               <a class="dropdown-item" href="message.html">Faculty</a>

             </div>
           </li>

           <li class="nav-item px-2">
             <a class="nav-link ${state === 'Contact' ? 'active' : null}" href="index.html#contactformvphp">Contact</a>
           </li>

           <li class="nav-item dropdown px-2">
             <a class="nav-link ${state === 'Team' ? 'active' : null} dropdown-toggle" href="team.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Team
             </a>
             <div class="dropdown-menu" aria-labelledby="navbarDropdown">
               <a class="dropdown-item" href="team.html">Our Team</a>
               <a class="dropdown-item" href="pastMembers.html">Past Members</a>
             </div>
           </li>
         </ul>
       </div>
     </nav>

      <!----------------Navbar Small------------------------------------>

      <nav class="navbarsm">

       <a class="navbar-brand" href="#">
         <img src="image/ecelltext.png" class="logoimgsm " a="logo">
       </a>
     </nav>

       <div class="sidebar" id="sidebar">
         <div class="toggle" onclick="toggle_div()"></div>
           <ul>
             <li><a href="index.html">Home</a></li>
             <li><a href="#">About</a></li>
             <li><a href="initiative.html">Initiatives</a></li>

             <li><a href="esummit.html">E-Summit</a></li>
             <li><a href="sw.html">SW</a></li>
             <li><a href="social.html">Social</a></li>
                        <li><a href="https://anchor.fm/entrepreneurship-cell-dtu">Podcast</a></li>
             <li><a href="index.html#testvphp">Testimonial</a></li>
             <li><a href="index.html#contactformvphp">Contact</a></li>
             <li><a href="message.html">Message</a></li>
             <li><a href="team.html">Team</a></li>
            <li><a href="pastMembers.html">Past Members</a></li>
           </ul>

       </div>
       `;
    }
}

customElements.define('header-component', Header);

