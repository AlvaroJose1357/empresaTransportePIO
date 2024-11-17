# Proyecto para practicar para la hackaton del PIO

En este proyecto se va a dar solucion a una empresa que ofrece servicios de transporte y logística con principal problematica en enfrenta problemas en la gestión de rutas de entrega y en la comunicación con los clientes. A menudo, los pedidos se retrasan porque la empresa no tiene un sistema optimizado para asignar y organizar los paquetes en las rutas más eficientes. Además, los clientes no tienen visibilidad en tiempo real de la ubicación de sus paquetes y del tiempo estimado de llegada. Esto genera insatisfacción y baja fidelización.

## Requerimientos del Sistema

_Objetivo_: Crear una plataforma de gestión y seguimiento de entregas que permita a optimizar rutas y proporcionar a los clientes actualizaciones en tiempo real sobre el estado de sus entregas.

### Módulos del Sistema

1. Portal de Administración

   - Gestión de Pedidos
   - Optimización de Rutas
   - Gestión de Conductores
   - Panel de Monitoreo en Tiempo Real

2. Portal para Conductores

   - Iniciar Sesión:
   - Lista de Entregas Asignadas:
   - Actualización del Estado del Pedido:
   - Sistema de Mensajería:

3. Portal para Clientes

   - Rastreo de Pedidos:
   - Notificaciones:
   - Historial de Pedidos:

4. API RESTful

   - Crear una API en Node.js y Express para conectar la base de datos (PostgreSQL) con las aplicaciones de administración, conductores y clientes.
   - Endpoint para gestionar los pedidos, usuarios, rutas y notificaciones.

5. Base de Datos (PostgreSQL)
   - Modelo de datos: Deberá almacenar la información de pedidos, usuarios (administradores, conductores y clientes), rutas optimizadas y estado de cada pedido.
   - Relaciones:
     - Conductores a Pedidos (1 a muchos)
     - Pedidos a Clientes (1 a 1)
     - Rutas a Pedidos (1 a 1)

### Funcionalidades Clave

1. Optimización de Rutas: Crear algoritmos o integrar APIs externas para calcular las rutas óptimas, mejorando así la eficiencia y reduciendo el tiempo de entrega.

2. Tracking en Tiempo Real: La posición de los vehículos de entrega se actualiza periódicamente y se muestra en el portal del cliente y en el panel de administración en tiempo real.

3. Gestión de Estado: Los pedidos deben poder marcarse en diferentes estados (pendiente, en proceso, entregado), permitiendo a los conductores y administradores actualizar el estado según el progreso de la entrega.

4. Notificaciones Automáticas: Utilizar notificaciones push o SMS para alertar a los clientes en diferentes etapas del envío.

5. Historial y Reportes: Crear reportes que permitan a la administración ver métricas de eficiencia, como tiempos promedio de entrega, pedidos entregados por conductor, y áreas geográficas con más entregas.
