import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import SidebarAdmin from '../../../components/AdminSideBar';
import { validarProducto } from '../../../cafeteria';
import './adminHome.css';
import { apiProductos, extraerLista } from '../../../services/api';

const initialForm = {
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    categoria: '',
};

const initialWarnings = {
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    categoria: '',
};

function AdminEditarProducto() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [productoActual, setProductoActual] = useState(null);
    const [categorias, setCategorias] = useState([]);
    const [form, setForm] = useState(initialForm);
    const [warnings, setWarnings] = useState(initialWarnings);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const cargarDatos = async () => {
            setCargando(true);
            setError('');

            try {
                const respuestaProducto = await apiProductos.get(`/api/v2/producto/buscarporid/${id}`);
                const respuestaCategorias = await apiProductos.get('/api/v2/categoria/buscartodas');
                const producto = respuestaProducto.data;

                if (!producto) {
                    throw new Error('No se encontró el producto solicitado.');
                }

                setProductoActual(producto);
                setCategorias(extraerLista(respuestaCategorias));
                setForm({
                    nombre: producto.nombreProducto ?? '',
                    descripcion: producto.descripcionProducto ?? '',
                    precio: String(producto.precioProducto ?? ''),
                    stock: String(producto.stockProducto ?? ''),
                    categoria: String(producto.categoriaProducto?.idCategoriaProducto ?? ''),
                });
                setWarnings(initialWarnings);
            } catch (err) {
                console.error('Error al cargar los datos del producto:', err);
                setError('No se pudo cargar el producto y sus categorías.');
            } finally {
                setCargando(false);
            }
        };

        cargarDatos();
    }, [id]);

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

        if (!productoActual || !validarFormulario(form)) return;

        const cambios = {
            nombreProducto: form.nombre.trim(),
            precioProducto: Number(form.precio),
            descripcionProducto: form.descripcion,
            stockProducto: Number(form.stock),
        };
        const categoriaActualId = productoActual.categoriaProducto?.idCategoriaProducto;

        setError('');

        try {
            await apiProductos.put(`/api/v2/producto/actualizar/${id}`, cambios);

            if (String(form.categoria) !== String(categoriaActualId ?? '')) {
                await apiProductos.put(`/api/v2/categoria/${form.categoria}/vincular/${id}`);
            }

            navigate('/admin/productos');
        } catch (err) {
            console.error('Error al actualizar el producto:', err);
            setError('No se pudieron guardar todos los cambios.');
        }
    };

    return (
        <div className="admin-layout">
            <SidebarAdmin />

            <main className="admin-content">
                <div className="admin-header">
                    <h1 className="admin-header__title fuzzy-bubbles-bold">Editar producto</h1>
                </div>

                {cargando && <p role="status">Cargando producto...</p>}
                {error && <p className="text-danger" role="alert">{error}</p>}

                {!cargando && productoActual && (
                    <div className="admin-edit-form-box">
                        <Form noValidate>
                            <h2 className="h5 mb-4">Datos actuales</h2>
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre del producto</Form.Label>
                                <Form.Control value={productoActual.nombreProducto ?? ''} readOnly />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={productoActual.descripcionProducto ?? ''}
                                    readOnly
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control value={productoActual.precioProducto ?? ''} readOnly />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Stock</Form.Label>
                                <Form.Control value={productoActual.stockProducto ?? ''} readOnly />
                            </Form.Group>

                            <Form.Group className="mb-5">
                                <Form.Label>Categoría</Form.Label>
                                <Form.Control
                                    value={productoActual.categoriaProducto?.nombreCategoriaProducto ?? 'Sin categoría'}
                                    readOnly
                                />
                            </Form.Group>
                        </Form>

                        <Form onSubmit={handleSubmit} noValidate>
                            <h2 className="h5 mb-4">Editar datos</h2>
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
                            </Form.Group>

                            <Form.Group className="mb-3">
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
                                Confirmar cambios
                            </button>
                        </Form>
                    </div>
                )}
            </main>
        </div>
    );
}

export default AdminEditarProducto;
