import { useEffect, useState } from "react"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from "react-router-dom"

const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let componentMounted = true

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const url = 'https://fakestoreapi.com/products'
            const response = await fetch(url)
            
            if(componentMounted) {
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
            }

            return () => {
                componentMounted = false
            }
        }

        getProducts()
    }, [])

    const Loading = () => {
        return (
            <>
            <div className="col-md-3">
                <Skeleton height={350} />
            </div>
            <div className="col-md-3">
                <Skeleton height={350} />
            </div>
            <div className="col-md-3">
                <Skeleton height={350} />
            </div>
            <div className="col-md-3">
                <Skeleton height={350} />
            </div>
            </>
            
        )
    }

    const filterProduct = (cat) => {
        console.log(data)
        const updateList = data.filter((x)=>x.category === cat)
        setFilter(updateList)
    }
    const ShowProducts = () => {
        return (
            <>
            <div className="buttons mb-4">
                <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</button>
            </div>

            {filter.map((product) => {
                return (
                    <>
                    <div className="col-md-3 mb-4">
                        <div className="card text-center p-4 " height="250px" key={product.id}>
                            <img className="card-img-top" height="250px" src={product.image} alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title.substring(0,12)}....</h5>
                                <p className="card-text lead fw-bold">{product.price}</p>
                                <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy now</NavLink>
                            </div>
                        </div>
                    </div>
                    </>
                )
            })}
            </>
        )
        
    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-7 fw-border text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products