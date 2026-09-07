/**
 * ANDRENIC-2 - Dashboard de ventas
 * Script para control de interactividad de navegación responsive
 * Autor: Nicolas Cespedes
 */

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');

  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      
      // Alternar estado visible
      sidebar.classList.toggle('sidebar--open');
      
      // Actualizar estado accesibilidad ARIA
      menuToggle.setAttribute('aria-expanded', !isExpanded);
    });
  }
});