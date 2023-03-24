import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


//const endPoint = 'http://localhost/la9rea18/apibe/public/api'  endpoint laravel
const URI = 'http://localhost:8000/api/product/' //endpoint de express

function ShowProducts() {
    
    const [ products, setProducts ] = useState( [] )

    useEffect (() => {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
       //const response = await axios.get(`${endPoint}/product`)
       const response = await axios.get(URI)
       setProducts(response.data)
    }

    const deleteProduct = async (id) => {   
        //await axios.delete(`${endPoint}/product/${id}`)
        await axios.delete(`${URI}${id}`)
        getAllProducts()
    }


  return (
<div className="row">
    <div className='col-12'>        
        <div className='d-grid gap-2 col-6 mx-auto'>
            <Link to="/create" 
                className='btn btn-success btn-lg mt-2 mb-2 text-white'
            >Nuevo Producto</Link>            
        </div>        
        <p className='selrow anuncio'>Articulo no disponible</p>
        <table className='table table-bordered' id='rowshow'>
            <thead>
                <tr>
                    <th>Num</th>
                    <th>Descripcion</th>
                    <th>Existencia</th>                    
                    <th>Precio</th>
                    <th>Acciones </th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {products.map( (product) => (                    
                    <tr key={product.id} className={!product.avail ? 'selrow' : 'antiselrow'}>
                        <td>{product.id}</td>
                        <td>{product.descrip}</td>
                        <td>{product.stock}</td>                        
                        <td>{product.price}</td>
                        <td>
                            <Link to={`/edit/${product.id}`} 
                            className="btn btn-warning" type='button'>                            
                            <i className='fas fa-edit'></i></Link>
                            <button onClick={() => 
                                deleteProduct(product.id)}
                            className="btn btn-danger ms-2" type='button'>
                            <i className='fas fa-trash-alt'></i></button>
                        </td>  
                                                               
                    </tr>                
                ) )}                
            </tbody>            
        </table>
    </div>
    </div>
  )
}

export default ShowProducts