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

    if (correo && correo.length > 100) return { valido: false, mensaje: "El correo no puede superar los 100 caracteres" };
    if (correo) {
        const dominiosPermitidos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];
        const correoValido = dominiosPermitidos.some(dominio => correo.endsWith(dominio));
        if (!correoValido) return { valido: false, mensaje: "Solo correos @duoc.cl, @profesor.duoc.cl y @gmail.com" };
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