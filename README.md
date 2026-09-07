# Andrenic-2 — Dashboard Administrativo Responsive

Panel de control administrativo diseñado para la marca **Andrenic**, enfocado en la gestión de inventario, ventas y registro de producción de cofias y tocas médicas/de cocina en sus tallas principales (**S**, **M** y **L**).

Este proyecto fue desarrollado como entrega académica con un enfoque estricto en la aplicación de **HTML5 Semántico**, **CSS Grid**, **Flexbox**, **Media Queries de alta densidad visual**, **Accesibilidad Web (WCAG 2.1 AA)** y **Manipulación del DOM con JavaScript**.

---

## Demostración Visual de Responsividad

El proyecto cuenta con adaptaciones de maquetación específicas y reales (no por escalado) para tres entornos principales:

* **Escritorio (1440px):** Layout espacioso de dos columnas con navegación lateral fija y visualización panorámica de métricas.
* **Tablet / iPad (1024px – 768px):** Distribución equilibrada de 2 columnas para tarjetas KPI y apilamiento inteligente de paneles para evitar espacios muertos.
* **Móvil (480px – 360px):** Interfaz compacta de alta densidad de información, menú colapsable (drawer), tarjetas a 1 columna y tabla con desplazamiento horizontal accesible.

---

## Estructura del Proyecto

```text
andrenic-2/
│
├── index.html                  # Estructura y maquetación HTML5 semántica
├── styles.css                  # Arquitectura CSS (Variables, Grid, Flexbox, Media Queries)
├── script.js                   # Lógica JS para menú desplegable y sincronización ARIA
├── README.md                   # Documentación técnica del proyecto
│
├── assets/                     # Recursos multimedia e isotipos
│   └── logo-andrenic.svg       # Logotipo vectorial de la marca
│
└── evidencias/                 # Evidencias para la evaluación académica
    ├── desktop.png             # Captura del dashboard en escritorio (1440px)
    ├── tablet.png              # Captura del dashboard en tablet (1024px/768px)
    └── mobile.png              # Captura del dashboard en teléfono (390px)