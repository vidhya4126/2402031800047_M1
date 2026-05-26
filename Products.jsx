import { Link,Outlet } from 'react-router-dom'

export default function Products() {
    return (
        <>
        
        <h2>Products Page</h2>
        <nav>
            <Link to="phone">Phone</Link> <br></br>
            <Link to="laptop">Laptop</Link>
        </nav>

        <Outlet />

        </>
        
    )
}