/**
 * App Module
 * @module ../footer/Footer.js
 * @author Steven Kamwaza && Maxwell Mpinganjira
 * @version 1.0
 * @description A min auto weather station dashboard footer componet
 * 
 */

import React from 'react';
import './footer.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function Footer (){
   
    const date= new Date().getFullYear();
   
    return(
        <footer id="sticky-footer" class="flex-shrink-0 py-4  text-primary-50">
        <div class="text-center">
          <small>{date} Copyright &copy; Auto-Weather Station</small>
        </div>
      </footer>
     
    )
}
export default Footer;