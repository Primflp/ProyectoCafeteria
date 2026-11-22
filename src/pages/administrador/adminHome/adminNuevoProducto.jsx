import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
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

function AdminNuevoProducto() {

    const [error, setError] = useState('')
    const [categorias, setCategorias] = useState([])

    useEffect (() => {
        const obtenerCategorias = async () => {
            try {
                const response = await apiProductos.get('/api/v2/categoria/buscartodas');
                setCategorias(extraerLista(response));
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

        if (!validarFormulario(form)) return;

        const producto = {
            nombreProducto: form.nombre.trim(),
            precioProducto: Number(form.precio),
            descripcionProducto: form.descripcion,
            stockProducto: Number(form.stock),
        };

        try {
            const response = await apiProductos.post('/api/v2/producto/guardar', producto);
            await apiProductos.put(`/api/v2/categoria/${form.categoria}/vincular/${response.data.idProducto}`);
            navigate('/admin/productos');
        } catch (err) {
            console.error('Error al registrar producto:', err);
            setError('No se pudo completar el registro del producto.');
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
                    {error && <p className="text-danger" role="alert">{error}</p>}
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