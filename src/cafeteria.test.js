import { describe, it, expect } from "vitest";
import { 
    validarLogin, 
    validarContacto, 
    calcularTotalCarrito, 
    verificarStock,
    validarRut,
    validarProducto,
} from "./cafeteria";

describe('Validaciones de Inicio de Sesión (Login)', () => {
    // Test 1
    it('pasa con un correo y contraseña válidos', () => {
        const res = validarLogin("alumno@duoc.cl", "12345");
        expect(res.valido).toBe(true);
    });

    // Test 2
    it('es erróneo si el correo no pertenece a los dominios permitidos', () => {
        const res = validarLogin("usuario@yahoo.com", "12345");
        expect(res.valido).toBe(false);
    });

    // Test 3
    it('es erróneo si la contraseña tiene menos de 4 caracteres', () => {
        const res = validarLogin("alumno@gmail.com", "123");
        expect(res.valido).toBe(false);
    });
});

describe('Validaciones del Formulario de Contacto', () => {
    // Test 4
    it('pasa si el nombre, correo y comentario son correctos', () => {
        const res = validarContacto("Javier", "javier@gmail.com", "Excelente atención y granos de café");
        expect(res.valido).toBe(true);
    });

    // Test 5
    it('es erróneo si falta el comentario obligatorio', () => {
        const res = validarContacto("Javier", "javier@gmail.com", "");
        expect(res.valido).toBe(false);
    });

    // Test 6
    it('es erróneo si el comentario supera los 500 caracteres', () => {
        const comentarioLargo = "a".repeat(501);
        const res = validarContacto("Javier", "javier@gmail.com", comentarioLargo);
        expect(res.valido).toBe(false);
    });

    it('permite omitir el correo y limita los campos según los requisitos', () => {
        expect(validarContacto('Javier', '', 'Comentario válido').valido).toBe(true);
        expect(validarContacto('a'.repeat(101), '', 'Comentario válido').valido).toBe(false);
        expect(validarContacto('Javier', '', 'a'.repeat(501)).valido).toBe(false);
        expect(validarContacto('Javier', 'a'.repeat(101), 'Comentario válido').valido).toBe(false);
    });
});

describe('Validación de RUN chileno', () => {
    it('valida formato y dígito verificador sin puntos ni guion', () => {
        expect(validarRut('760864285')).toBe(true);
        expect(validarRut('76086428K')).toBe(false);
        expect(validarRut('76.086.428-5')).toBe(false);
        expect(validarRut('123')).toBe(false);
    });
});

describe('Validación de productos', () => {
    const productoValido = {
        nombre: 'Café arábico',
        descripcion: '',
        precio: '0',
        stock: '0',
        categoria: 'Grano entero',
    };

    it('permite descripción opcional y precio gratis', () => {
        expect(validarProducto(productoValido).valido).toBe(true);
    });

    it('valida campos requeridos, límites de texto y números enteros en stock', () => {
        expect(validarProducto({ ...productoValido, nombre: 'a'.repeat(101) }).errores.nombre).toBeTruthy();
        expect(validarProducto({ ...productoValido, descripcion: 'a'.repeat(501) }).errores.descripcion).toBeTruthy();
        expect(validarProducto({ ...productoValido, precio: '-1' }).errores.precio).toBeTruthy();
        expect(validarProducto({ ...productoValido, stock: '1.5' }).errores.stock).toBeTruthy();
        expect(validarProducto({ ...productoValido, categoria: '' }).errores.categoria).toBeTruthy();
    });
});

describe('Lógica del Carrito de Compras', () => {
    // Test 7
    it('calcula correctamente el total de los productos en el carrito', () => {
        const carrito = [
            { nombre: 'Café Etíope', precio: 5000, cantidad: 2 },
            { nombre: 'Café Colombia', precio: 4000, cantidad: 1 }
        ];
        expect(calcularTotalCarrito(carrito)).toBe(14000);
    });

    // Test 8
    it('devuelve 0 si el carrito está vacío', () => {
        expect(calcularTotalCarrito([])).toBe(0);
    });
});

describe('Verificación de Stock', () => {
    // Test 9
    it('permite comprar si hay stock suficiente', () => {
        const stock = verificarStock(2, 10);
        expect(stock.dispo).toBe(true);
    });

    // Test 10
    it('rechaza la compra si se pide más de lo disponible en inventario', () => {
        const stock = verificarStock(15, 10);
        expect(stock.dispo).toBe(false);
    });
});