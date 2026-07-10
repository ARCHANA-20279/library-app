import React, { useState } from 'react'
import Navigation from './Navigation'

function View() {

const [data,changeData]=useState(
  [{"name":"the lion king","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7i_bCdUP6-bvOHA9DX1SzIWuWfIGz32Ury2UYLoCRiQ&s=10","author":"helen","price":120},
    {"name":"rabbit","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7i_bCdUP6-bvOHA9DX1SzIWuWfIGz32Ury2UYLoCRiQ&s=10","author":"helen","price":120},
    {"name":"the lion king ","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7i_bCdUP6-bvOHA9DX1SzIWuWfIGz32Ury2UYLoCRiQ&s=10","author":"helen","price":120},
    {"name":"the lion king","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7i_bCdUP6-bvOHA9DX1SzIWuWfIGz32Ury2UYLoCRiQ&s=10","author":"helen","price":120},
    {"name":"elephant","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7i_bCdUP6-bvOHA9DX1SzIWuWfIGz32Ury2UYLoCRiQ&s=10","author":"helen","price":120},
    {"name":"elephant","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7i_bCdUP6-bvOHA9DX1SzIWuWfIGz32Ury2UYLoCRiQ&s=10","author":"helen","price":120},
   



  ]
)

  return (


    <div>
        <Navigation />
        <div classNameName="container" style={{padding:10,margin:50}}>
        <h1 style={{ color: "blue",marginBottom:50}}>Details a Book</h1>
        <div className="container">
            <div className="row">
                <div className="col col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <div className="row">
                            {data.map(
                              (value,index)=>{
                                return(<div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                <div class="card" >
  <img src={value.avatar}class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="title">BOOK</h5>
    <p class="TITLE">{value.name}</p>
    <p class="author">{value.author}</p>
    <p class="price">{value.price}</p>
    <a href="#" class="btn btn-primary">go to cart</a>
  </div>
</div>
                            </div>)
                              }
                            )}
                           
                            
                            
                           
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default View