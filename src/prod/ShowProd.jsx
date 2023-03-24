import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const URI = `http://localhost:8000/api/product/`

const CompShowProds = () => {
    
    const [ prods, setProds ] = useState( [] )

    useEffect( () => {
        getAllProds()
    }, [])

    //Procedimiento para mostrar todos los productos
    const getAllProds = async () => {
        try {
            const response = await axios.get(URI)     
            const datos = response.data
            setProds(datos)
            console.log(prods)
           
        } catch (error) {
            console.log(error.message)
            //res.json( {message: error.message} )
        }
        
    }

    //Procedimiento para eliminar 1 producto
    const deleteProduct = async (id) => {
        try {
            axios.delete(`${URI}${id}`)
            getAllProds()    
        } catch (error) {
            console.log(error.message)
            //res.json( {message: error.message} )
        }
        
    }

    return (
        <div className='row'>
            <div className="col">
            <table className="table">
                <thead className='table-primary'>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Existencia</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                   { prods.map((prod) => {
                        <tr key={prod.id}>
                            <td>{prod.id}</td>
                            <td>{prod.descrip}</td>
                            <td>{prod.stock}</td>
                            <td>{prod.price}</td>
                            <td>
                                <Link to={`/edit/${prod.id}`} 
                                className="btn btn-info">Editar</Link>
                                <button onClick={ () => deleteProduct(prod.id)} 
                                className='btn btn-danger'>Borrar</button>
                            </td>
                        </tr>
                   })}
                </tbody>
                </table>
            </div>
        </div>            
    )
}

export default CompShowProds