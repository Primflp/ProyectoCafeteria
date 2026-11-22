export function validarRut(rut) {
    const run = rut.trim().toUpperCase();
    if (!/^\d{6,8}[0-9K]$/.test(run)) return false;

    const cuerpo = run.slice(0, -1);
    const digitoIngresado = run.slice(-1);
    let suma = 0;
    let multiplicador = 2;

    for (let indice = cuerpo.length - 1; indice >= 0; indice -= 1) {
        suma += Number(cuerpo[indice]) * multiplicador;
        multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }

    const resultado = 11 - (suma % 11);
    const digitoVerificador = resultado === 11 ? '0' : resultado === 10 ? 'K' : String(resultado);
    return digitoIngresado === digitoVerificador;
}

export function validarProducto(producto) {
    const errores = {
        nombre: '',
        descripcion: '',
        precio: '',
        stock: '',
        categoria: '',
    };
    const precio = Number(producto.precio);
    const stock = Number(producto.stock);

    if (!producto.nombre.trim()) {
        errores.nombre = 'Este campo no puede estar vacío';
    } else if (producto.nombre.trim().length > 100) {
        errores.nombre = 'El nombre no puede superar los 100 caracteres';
    }

    if (producto.descripcion.length > 500) {
        errores.descripcion = 'La descripción no puede superar los 500 caracteres';
    }

    if (!producto.precio.trim()) {
        errores.precio = 'Este campo no puede estar vacío';
    } else if (!Number.isFinite(precio) || precio < 0) {
        errores.precio = 'El precio debe ser un número igual o mayor a cero';
    }

    if (!producto.stock.trim()) {
        errores.stock = 'Este campo no puede estar vacío';
    } else if (!Number.isInteger(stock) || stock < 0) {
        errores.stock = 'El stock debe ser un número entero igual o mayor a cero';
    }

    if (!producto.categoria) {
        errores.categoria = 'Debes seleccionar una categoría';
    }

    return {
        valido: Object.values(errores).every((error) => !error),
        errores,
    };
}

export function validarLogin(correo, password) {
    if (!correo || correo.trim() === "") return { valido: false, mensaje: "El correo es requerido" };
    if (correo.length > 100) return { valido: false, mensaje: "El correo no puede superar los 100 caracteres" };
    
    const dominiosPermitidos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];
    const correoValido = dominiosPermitidos.some(dominio => correo.endsWith(dominio));
    if (!correoValido) return { valido: false, mensaje: "Solo correos @duoc.cl, @profesor.duoc.cl y @gmail.com" };

    if (!password || password.trim() === "") return { valido: false, mensaje: "La contraseña es requerida" };
    if (password.length < 4 || password.length > 10) return { valido: false, mensaje: "La contraseña debe tener entre 4 y 10 caracteres" };

    return { valido: true, mensaje: "Login exitoso" };
}

export function validarContacto(nombre, correo, comentario) {
    if (!nombre || nombre.trim() === "") return { valido: false, mensaje: "El nombre es requerido" };
    if (nombre.length > 100) return { valido: false, mensaje: "El nombre no puede superar los 100 caracteres" };

    const correoIngresado = correo ?? "";
    const correoPermitido = /^[^\s@]+@(?:duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;
    if (correoIngresado.length > 100) return { valido: false, mensaje: "El correo no puede superar los 100 caracteres" };
    if (correoIngresado.trim() && !correoPermitido.test(correoIngresado)) {
        return { valido: false, mensaje: "Solo correos @duoc.cl, @profesor.duoc.cl y @gmail.com" };
    }

    if (!comentario || comentario.trim() === "") return { valido: false, mensaje: "El comentario es requerido" };
    if (comentario.length > 500) return { valido: false, mensaje: "El comentario no puede superar los 500 caracteres" };

    return { valido: true, mensaje: "Mensaje válido" };
}

export function calcularTotalCarrito(items) {
    if (!items || items.length === 0) return 0;
    return items.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
}

export function verificarStock(cantidadSolicitada, stockDisponible) {
    if (cantidadSolicitada <= 0) return { dispo: false, mensaje: "La cantidad debe ser mayor a cero" };
    if (cantidadSolicitada > stockDisponible) return { dispo: false, mensaje: "No hay suficiente stock disponible" };
    return { dispo: true, mensaje: "Stock disponible" };
}