# TechStore 

> Plataforma de e-commerce profesional construida con **React**, **TypeScript** y **Tailwind CSS**, que simula un flujo completo de compra, incluyendo catálogo de productos, carrito de compras y dashboard administrativo.

---

##  Descripción

TechStore es un proyecto de demostración de un e-commerce moderno con las siguientes características:

- Visualización de productos con imágenes, descripción, precio y stock.
- Detalles de cada producto con botón de **agregar al carrito**.
- Carrito de compras dinámico con gestión de cantidades y cálculo de total.
- Dashboard administrativo para ver métricas del inventario y gestionar productos.
- Checkout simulado con resumen de compra profesional.
- Estilo minimalista y profesional inspirado en diseño escandinavo/nórdico.

---

##  Tecnologías usadas

- **Frontend:** React + TypeScript  
- **Estilos:** Tailwind CSS  
- **Routing:** React Router DOM  
- **Estado global:** React Context (para el carrito)  
- **Mock API:** Archivos locales (`products.service.ts`)  
- **Construcción:** Vite  

---

##  Estructura del proyecto

src/
├── app/
│ └── router.tsx # Configuración de rutas
├── components/
│ └── layout/
│ ├── PublicLayout.tsx # Layout público
│ └── DashboardLayout.tsx# Layout dashboard
├── pages/
│ ├── ecommerce/
│ │ ├── Home.tsx # Página principal
│ │ ├── Products.tsx # Listado de productos
│ │ ├── ProductDetail.tsx # Detalle del producto
│ │ └── Cart.tsx # Carrito de compras
│ └── dashboard/
│ ├── DashboardHome.tsx # Overview de dashboard
│ └── DashboardProducts.tsx # Gestión de productos
├── context/
│ └── CartContext.tsx # Contexto para carrito
├── services/
│ └── products.service.ts # Mock API
└── types/
└── product.types.ts # Tipos de TypeScript


---

##  Funcionalidades principales

### Home
- Presentación profesional con hero image y llamada a la acción.
- Botón “Explorar Productos” para ir al catálogo.

### Products
- Listado de productos con imágenes, stock y precio.
- Botón **Agregar al carrito**.
- Filtro de disponibilidad mediante colores (verde = en stock, rojo = agotado).

### Product Detail
- Página individual de producto.
- Detalles completos: imagen, descripción, precio y stock.
- Botón de **agregar al carrito** deshabilitado si está agotado.

### Cart
- Visualización de todos los productos agregados.
- Cantidad editable, total calculado dinámicamente.
- Botón **Checkout** para proceder a compra simulada.
- Botón **Vaciar carrito**.

### Dashboard
- **DashboardHome:** métricas del inventario (total, en stock, agotados, precio promedio).
- **DashboardProducts:** tabla editable de productos con botones **Editar** y **Eliminar**.

---



