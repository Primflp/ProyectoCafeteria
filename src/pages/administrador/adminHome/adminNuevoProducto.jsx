import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import SidebarAdmin from '../../../components/AdminSideBar';
import { validarProducto } from '../../../cafeteria';
import './adminHome.css';

const categoriasProducto = ['Grano entero', 'Café molido', 'Descafeinado'];

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

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validarFormulario(form)) {
            navigate('/admin/productos');
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
                            <Form.Label>Código del producto</Form.Label>
                            <Form.Control
                                name="codigo"
                                type="text"
                                minLength={3}
                                value={form.codigo}
                                onChange={handleChange}
                            />
                            {warnings.codigo && <Form.Text className="text-danger">{warnings.codigo}</Form.Text>}
                        </Form.Group>

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
                                {categoriasProducto.map((categoria) => (
                                    <option key={categoria} value={categoria}>{categoria}</option>
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