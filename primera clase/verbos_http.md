# Ejemplos de Verbos HTTP

Los verbos (o métodos) HTTP indican la acción que se desea realizar sobre el recurso identificado. A continuación, se presentan ejemplos simples y comunes para los cuatro verbos principales en una API REST: `GET`, `POST`, `PUT` y `DELETE`.

---

## 1. GET (Obtener / Leer)
Se utiliza para solicitar la representación de un recurso específico. Las peticiones que usan el método `GET` **solo** deben recuperar datos, sin modificarlos.

**Petición:**
```http
GET /api/usuarios/123 HTTP/1.1
Host: www.ejemplo.com
Accept: application/json
```

**Respuesta Exitosa (200 OK):**
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 123,
  "nombre": "Juan Pérez",
  "email": "juan@ejemplo.com"
}
```

---

## 2. POST (Crear)
Se utiliza para enviar datos al servidor, generalmente con el fin de **crear un nuevo recurso**. Los datos se incluyen en el cuerpo (body) de la petición.

**Petición:**
```http
POST /api/usuarios HTTP/1.1
Host: www.ejemplo.com
Content-Type: application/json

{
  "nombre": "Ana López",
  "email": "ana@ejemplo.com"
}
```

**Respuesta Exitosa (201 Created):**
```http
HTTP/1.1 201 Created
Location: /api/usuarios/124
Content-Type: application/json

{
  "id": 124,
  "nombre": "Ana López",
  "email": "ana@ejemplo.com"
}
```

---

## 3. PUT (Actualizar / Reemplazar)
Se utiliza para **reemplazar por completo** todas las representaciones actuales del recurso de destino con los datos de la petición.

**Petición:**
```http
PUT /api/usuarios/123 HTTP/1.1
Host: www.ejemplo.com
Content-Type: application/json

{
  "nombre": "Juan Pérez",
  "email": "juan.nuevo@ejemplo.com"
}
```

**Respuesta Exitosa (200 OK):**
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 123,
  "nombre": "Juan Pérez",
  "email": "juan.nuevo@ejemplo.com"
}
```

---

## 4. DELETE (Eliminar)
Se utiliza para **borrar** un recurso específico en el servidor.

**Petición:**
```http
DELETE /api/usuarios/123 HTTP/1.1
Host: www.ejemplo.com
```

**Respuesta Exitosa (204 No Content):**
```http
HTTP/1.1 204 No Content
```
*(Nota: Un código de estado `204 No Content` indica que el servidor procesó la solicitud con éxito, pero no devuelve ningún contenido en el cuerpo de la respuesta).*
