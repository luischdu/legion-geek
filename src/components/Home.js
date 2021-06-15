import React from 'react'
import { db } from '../dbPruebas'

import VerCardNoticias from '../pages/VerCardNoticias'

import { VerHome } from '../pages/VerHome'
import CardNoticias from './CardNoticias'


export const Home = () => {
    return (
        <>
            <VerHome />

            <div className="container mt-5">
      
            <div className="row d-flex justify-content-around" >
                {db.map((item) => (
               /*       <VerCardNoticias key={item.id} item={item} /> 
          */

                <div class="card mt-2 p-0 " style={{width: '20rem'}}>
                    <img src={item.img}  className="img-fluid" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{item.title}</h5>
                       
                        <a href="#" class="btn btn-primary">Leer mas..</a>
                    </div>
                </div> 
           /*  <div className="col-md-4">
                        <div class="card bg-dark text-white mt-3">
                        <img src={item.img} class="card-img"  alt="..."/>
                        <div class="card-img-overlay">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p>
                        </div>
                        </div>
                        </div> */
                       ))}
            </div>
            </div>

            <div>
             
            </div>
        </>
    )
}
