import React from 'react'
import { Link } from "react-router-dom";
const VerFooter = () => {
    return (
        <footer class="text-center footer-style mt-5">
        <div class="container">
            <div class="row">
            <div class="col-md-4 footer-col">
                    <h3>Articulos recientes</h3>
                    <ul class="list-inline">
                       <li>
                           <Link>Como enviar un correo</Link>
                        </li>
                    </ul>
           </div>

                <div class="col-md-4 footer-col">
                    <h3>Comunidad</h3>
                   
                </div>
                <div class="col-md-4 footer-col">
                    <h3>Síguenos en</h3>
                    <ul class="list-inline">
                        <li>
                    Facebook

                        </li>
                        <li>
                    Instagram

                        </li>
                        <li>
                    Pinterest

                        </li>
                        <li>

                    Twitter
                        </li>
                        <li>
                    Linkedin

                        </li>
                    </ul>
                </div>
               
            </div>
            <hr />
         
            <div className='row'>
                <p className='col-sm'>
                    &copy;{new Date().getFullYear()}    LEGION GEEK | Terms Of Service | Privacy
                </p>
            </div>
        </div>
          {/*  | All right reserved  */}
    </footer>
    )
}

export default VerFooter
