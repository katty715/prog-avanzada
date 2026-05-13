# Guía de Nomenclatura para Commits (Conventional Commits)

Utilizar una nomenclatura estándar para los mensajes de commit nos ayuda a mantener un historial de cambios limpio, fácil de leer y muy útil para trabajar en equipo. La convención más utilizada en la industria es la de **Conventional Commits**.

---

## Estructura de un Commit

El mensaje de commit debe tener la siguiente estructura básica:

```text
<tipo>[ámbito opcional]: <descripción corta>
```

---

## Tipos de Commits (`<tipo>`)

Estos son los prefijos más comunes que debes utilizar para indicar qué clase de trabajo realizaste:

*   🚀 **`feat`** (Feature): Añade una **nueva funcionalidad** a la aplicación.
    *   *Ejemplo:* `feat: agregar sistema de inicio de sesión`
*   🐛 **`fix`** (Bug Fix): Soluciona un **error o bug** en el código.
    *   *Ejemplo:* `fix: corregir el cálculo de impuestos en el carrito`
*   📚 **`docs`** (Documentation): Cambios que afectan **únicamente a la documentación** (archivos README, guías, etc.).
    *   *Ejemplo:* `docs: actualizar el README con instrucciones de instalación`
*   💅 **`style`** (Style): Cambios de **formato** que no afectan la lógica del código (espaciado, puntos y comas faltantes, indentación).
    *   *Ejemplo:* `style: formatear archivo index.html`
*   ♻️ **`refactor`** (Refactoring): Un cambio en el código que **no soluciona un bug ni añade una funcionalidad**, pero mejora la estructura interna del código.
    *   *Ejemplo:* `refactor: simplificar la función de validación de email`
*   🧪 **`test`** (Testing): Añade **pruebas (tests)** faltantes o corrige pruebas existentes.
    *   *Ejemplo:* `test: agregar pruebas unitarias para el controlador`
*   🔧 **`chore`** (Chores): Tareas de **mantenimiento**, actualización de dependencias o configuraciones que no afectan el código fuente de producción.
    *   *Ejemplo:* `chore: actualizar la versión de la librería de íconos`

---

## Ámbito (Scope) - *Opcional*

El ámbito se coloca entre paréntesis y sirve para indicar **qué parte del código o qué módulo** específico se modificó.

*   *Ejemplo:* `feat(auth): agregar validación de contraseñas seguras`
*   *Ejemplo:* `fix(ui): centrar el botón de enviar en el formulario`

---

## Reglas de Oro para la Descripción

Para que la descripción de tu commit sea perfecta, sigue estas reglas:

1.  **Usa el verbo en infinitivo/imperativo:** Escribe como si estuvieras dando una orden o completando la frase *"Si se aplica, este commit va a..."*.
    *   ✅ **Bien:** `agregar`, `corregir`, `cambiar`, `eliminar`.
    *   ❌ **Mal:** `agregado`, `corrigiendo`, `cambios en`, `agregué`.
2.  **Todo en minúsculas:** No uses mayúscula inicial en la descripción (salvo nombres propios o siglas).
3.  **Sin punto final:** No pongas un punto al final de la frase.

---

## Ejemplos de uso con Git

### Un commit simple
```bash
git commit -m "feat: agregar barra de búsqueda"
```

### Un commit con ámbito (scope)
```bash
git commit -m "fix(login): prevenir error cuando la contraseña está vacía"
```

### Un commit indicando un cambio muy grande (Breaking Change)
Si tu cambio hace que algo viejo deje de funcionar (cambio radical), puedes añadir un `!` después del tipo o ámbito.
```bash
git commit -m "refactor!: cambiar la estructura de la base de datos por completo"
```
