import React from 'react';
import './footer.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function Footer (){
   
    const date= new Date().getFullYear();
   
    return(
        <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-primary text-white-50">
        <div class="container text-center">
          <small>{date} Copyright &copy; Auto-Weather Station</small>
        </div>
      </footer>
     
    )
}
export default Footer;