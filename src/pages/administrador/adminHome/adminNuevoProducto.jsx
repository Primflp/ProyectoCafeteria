import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import SidebarAdmin from '../../../components/AdminSideBar';
import { validarProducto } from '../../../cafeteria';
import './adminHome.css';
import { apiProductos } from '../../../services/Api';

const initialForm = {
    codigo: '',
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    stockCritico: '',
    categoria: '',
};

const initialWarnings = {
    codigo: '',
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    stockCritico: '',
    categoria: '',
};

function AdminNuevoProducto() {

    const [error, setError] = useState('')
    const [categorias, setCategorias] = useState([])

    useEffect (() => {
        const obtenerCategorias = async () => {
            try {
                const response = await apiProductos.get('/api/v2/categoria/buscartodas');
                setCategorias(response.data);
            } catch (err) {
                console.error('Error al obtener los datos: ', err);
                setError('No se pudieron cargar los datos.')
            }
        };

        obtenerCategorias();
    }, []);

    const [form, setForm] = useState(initialForm);
    const [warnings, setWarnings] = useState(initialWarnings);
    const navigate = useNavigate();

    const validarFormulario = (valores) => {
        const resultado = validarProducto(valores);
        setWarnings(resultado.errores);
        return resultado.valido;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        const valoresActualizados = { ...form, [name]: value };

        setForm(valoresActualizados);
        validarFormulario(valoresActualizados);
    };

    const handleSubmit = async (event) => {
            event.preventDefault();
    
            const usuarioData = {
                nombreProducto: form.nombre,
                precioProducto: form.precio,
                descripcionProducto: form.descripcion,
                stockProducto: form.stock
            };
    
            try {
                const response = await apiProductos.post('/api/v2/producto/guardar', usuarioData);

                const idCategoria = form.categoria
                const idProducto = response.data.idProducto

                await apiProductos.put(`/api/v2/categoria/${idCategoria}/vincular/${idProducto}`)
    
                navigate('/admin/productos');
            } catch (err) {
                console.error('Error al registrar producto', err);
            }
        };

    return (
        <div className="admin-layout">
            <SidebarAdmin />

            <main className="admin-content">
                <div className="admin-header">
                    <h1 className="admin-header__title fuzzy-bubbles-bold">
                        Nuevo producto
                    </h1>
                </div>

                <div className="admin-form-box">
                    <Form onSubmit={handleSubmit} noValidate>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre del producto</Form.Label>
                            <Form.Control
                                name="nombre"
                                type="text"
                                maxLength={100}
                                value={form.nombre}
                                onChange={handleChange}
                            />
                            {warnings.nombre && <Form.Text className="text-danger">{warnings.nombre}</Form.Text>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                name="descripcion"
                                as="textarea"
                                rows={3}
                                maxLength={500}
                                value={form.descripcion}
                                onChange={handleChange}
                            />
                            {warnings.descripcion && (
                                <Form.Text className="text-danger">{warnings.descripcion}</Form.Text>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                name="precio"
                                type="number"
                                min="0"
                                step="any"
                                value={form.precio}
                                onChange={handleChange}
                            />
                            {warnings.precio && <Form.Text className="text-danger">{warnings.precio}</Form.Text>}
                            {form.precio !== '' && Number(form.precio) === 0 && (
                                <Form.Text className="text-success">Este producto se considerará gratis.</Form.Text>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-5">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control
                                name="stock"
                                type="number"
                                min="0"
                                step="1"
                                value={form.stock}
                                onChange={handleChange}
                            />
                            {warnings.stock && <Form.Text className="text-danger">{warnings.stock}</Form.Text>}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Stock crítico (opcional)</Form.Label>
                            <Form.Control
                                name="stockCritico"
                                type="number"
                                min="0"
                                step="1"
                                value={form.stockCritico}
                                onChange={handleChange}
                            />
                            {warnings.stockCritico && (
                                <Form.Text className="text-danger">{warnings.stockCritico}</Form.Text>
                            )}
                            {form.stock !== '' && form.stockCritico !== ''
                                && Number.isInteger(Number(form.stock))
                                && Number.isInteger(Number(form.stockCritico))
                                && Number(form.stock) <= Number(form.stockCritico)
                                && (
                                    <Form.Text className="text-warning d-block">
                                        Alerta: el stock está en su nivel crítico o por debajo.
                                    </Form.Text>
                                )}
                        </Form.Group>

                        <Form.Group className="mb-5">
                            <Form.Label>Categoría</Form.Label>
                            <Form.Select name="categoria" value={form.categoria} onChange={handleChange}>
                                <option value="">Selecciona una categoría</option>
                                {categorias.map((categoria) => (
                                    <option
                                        key={categoria.idCategoriaProducto}
                                        value={categoria.idCategoriaProducto}
                                    >
                                        {categoria.nombreCategoriaProducto}
                                    </option>
                                ))}
                            </Form.Select>
                            {warnings.categoria && (
                                <Form.Text className="text-danger">{warnings.categoria}</Form.Text>
                            )}
                        </Form.Group>

                        <button type="submit" className="admin-form-submit fuzzy-bubbles-bold">
                            CREAR PRODUCTO
                        </button>
                    </Form>
                </div>
            </main>
        </div>
    );
}

export default AdminNuevoProducto;