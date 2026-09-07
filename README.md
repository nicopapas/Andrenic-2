# Andrenic-2: Dashboard Administrativo Responsive

Dashboard administrativo desarrollado para la marca Andrenic, enfocado en el sistema de gestión de inventario, ventas y registro de producción de cofias y tocas en sus tallas principales (S, M y L).

El proyecto fue construido como una entrega académica orientada a estándares web profesionales, aplicando HTML5 semántico, CSS Grid, Flexbox, Media Queries para distintos dispositivos, Javascript e implementaciones de accesibilidad web (WCAG 2.1 AA).

---

## Planteamiento del Proyecto

Para el diseño de la interfaz se investigaron patrones modernos de dashboards administrativos (referenciados en plataformas como Dribbble y CSS-Tricks). A partir de esta investigación, se seleccionaron los siguientes componentes principales:

1. Barra lateral de navegación (Sidebar): Permite el acceso a los módulos principales del sistema.
2. Encabezado superior (Header): Contiene el control de apertura del menú, títulos de la sección y datos del perfil de usuario.
3. Tarjetas de resumen (KPI Cards): Visualizan métricas clave como ventas, producción e inventario.
4. Gráfico y Tabla de datos: Muestran el rendimiento de ventas por tipo de producto y el listado detallado del inventario.
5. Pie de página (Footer): Muestra información institucional y derechos de autor.

---

## Tecnologías Utilizadas

* HTML5 (Semántica y atributos de accesibilidad)
* CSS3 (CSS Grid, Flexbox, Variables CSS, Media Queries, Transiciones)
* JavaScript Vanilla (Manipulación del DOM para la interactividad del menú)

---

## Decisiones de Diseño y Arquitectura CSS

### 1. Layout Principal con CSS Grid
La estructura macro del dashboard utiliza CSS Grid para definir la distribución del sidebar, header, main y footer mediante el uso de `grid-template-areas`. Esto garantiza un maquetado flexible que cambia según el tamaño de la pantalla:

* En escritorio, la pantalla se divide en áreas definidas: `sidebar`, `header`, `main` y `footer`.
* En dispositivos móviles, las áreas se reorganizan para colocar la navegación en la parte superior como un menú colapsable.

### 2. Componentes Internos con Flexbox
Flexbox se aplicó en todos los componentes internos para controlar la alineación y distribución bidireccional del contenido:

* Header: Alineación horizontal entre la marca, botón de menú y datos de usuario.
* Sidebar: Distribución vertical de las opciones de navegación.
* Tarjetas KPI: Espaciado uniforme (`justify-content: space-between`) entre etiquetas y valores numéricos.
* Filas del Gráfico y Tabla: Alineación horizontal de textos, barras de nivel y porcentajes.

### 3. Interactividad Visual
* Variables CSS (`:root`): Definición centralizada de colores, tipografía y sombras para mantener consistencia.
* Pseudoclases y Transiciones: Animaciones suaves mediante `:hover` y `:focus` en botones, enlaces de navegación y filas de la tabla para retroalimentación visual inmediata.
* Menú Colapsable: Control mediante JavaScript que alterna la clase `.sidebar--open` para mostrar u ocultar la barra lateral en pantallas pequeñas.

---

## Decisiones de Responsividad

La interfaz implementa un enfoque responsivo real dividido en breakpoints clave:

* Escritorio (1440px): Layout completo de dos columnas con sidebar fijo.
* Tablet (1024px - 768px): Reorganización de las tarjetas KPI a 2 columnas y apilamiento vertical de secciones para evitar desperdicio de espacio.
* Móvil (480px - 360px): El sidebar se convierte en un panel desplegable flotante, las tarjetas pasan a 1 sola columna y las tablas cuentan con desplazamiento horizontal. Se utiliza la función `clamp()` en CSS para que la tipografía se adapte suavemente sin romper los contenedores.

---

## Decisiones de Accesibilidad (WCAG 2.1 AA)

* Roles ARIA: Implementación de `role="navigation"`, `role="main"` y `role="contentinfo"` para facilitar la lectura por tecnologías de asistencia.
* Estado del Menú: Sincronización del atributo `aria-expanded` ("true"/"false") desde JavaScript para avisar a lectores de pantalla cuando el menú se abre o se cierra.
* Navegación por Teclado: Uso de `:focus-visible` con un indicador de enfoque claro en elementos interactivos.
* Desplazamiento Accesible: Contenedor de tablas configurado con `tabindex="0"` para permitir el desplazamiento con las teclas de dirección.
* Contraste y Texto Alternativo: Combinaciones de color que cumplen con niveles mínimos de contraste y atributos `alt` en imágenes e íconos del sistema.

---

## Estructura del Repositorio

```text
andrenic-2/
│
├── index.html                  # Estructura principal en HTML5 semántico
├── styles.css                  # Estilos del proyecto (Variables, Grid, Flexbox, Responsividad)
├── script.js                   # Lógica JS para menú colapsable y atributos ARIA
├── README.md                   # Documentación del proyecto
│
├── assets/                     # Recursos gráficos e íconos
│   └── logo-andrenic.svg       # Logotipo vectorial del proyecto
│
└── evidencias/                 # Capturas requeridas en la entrega
    ├── desktop.png             # Dashboard en vista de escritorio (1440px)
    ├── tablet.png              # Dashboard en vista de tablet (1024px/768px)
    └── mobile.png              # Dashboard en vista móvil (390px)