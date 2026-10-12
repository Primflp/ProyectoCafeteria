import { Link } from 'react-router-dom';
import SidebarAdmin from '../../../components/AdminSideBar'
import './adminHome.css'

function AdminProductos() {
    const productos = [
        { id: 1, nombre: "Occaffe Grano Crema E Aroma 100% Arabica 1kg", precio: "$30.990"},
        { id: 2, nombre: "Kimbo Filtro 100% Arábico 226,8gr Grano Molido", precio: "$7.990"},
        { id: 3, nombre: "Borbone 100% Arabica 1kg Grano Entero", precio: "$34.990"},
        { id: 4, nombre: "Lucaffe Exquisit 1 kg Grano Entero", precio: "$46.990"},
        { id: 5, nombre: "Bontadi Cuba 100% Arabica 1kg Grano Entero", precio: "$43.990"},
        { id: 6, nombre: "Occaffe Grano Descafeinado Professional 1kg", precio: "$35.990"},
        { id: 7, nombre: "Bontadi Papua 100% Arabica 1kg Grano Entero", precio: "$34.990"},
        { id: 8, nombre: "Lucaffe Mr. Exclusive 1 kg Grano Entero", precio: "$49.990"},
        { id: 9, nombre: "Lucaffe Blucaffe 100% Arabica Jamaica 700grs", precio: "$52.990"},
        { id: 10, nombre: "Bontadi 100% Arabico 1kg Grano Entero", precio: "$31.990"},
        { id: 11, nombre: "Lavazza Crema e Aroma 1 kg Grano Entero", precio: "$34.990"},
        { id: 12, nombre: "Lucaffe Classic 1 kg Grano Entero", precio: "$44.990"},
    ];

    return (
        <div className="admin-layout">
            <SidebarAdmin />

            <main className="admin-content">
                <div className="admin-header">
                    <h1 className="admin-header__title fuzzy-bubbles-bold">Productos</h1>
                </div>

                <div className="admin-table-container">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Producto</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((prod) => (
                                <tr key={prod.id}>
                                    <td>#{prod.id}</td>
                                    <td>
                                        <Link to={`/detalle${prod.id}`} className="admin-table__link-product">
                                            {prod.nombre}
                                        </Link>
                                    </td>
                                    <td>{prod.precio}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default AdminProductos;