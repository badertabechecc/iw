Objetivo:
Implementar una vista en donde se puedan listar los pedidos que se han hecho en la aplicación (historial).

Schema:
Se tiene que agregar un slice en el store llamado "orders".
El detalle de como deben guardarse está en demoschema.json

Google:
Permitido.
Queremos conocer tu forma de pensar y no pretendemos que te sepas todo de memoria.
Tampoco te restará puntos.
Ten en cuenta que tu mejor google en esta entrevista son los entrevistadores.

La Aplicación actual:
Se compone de 2 vistas, una que muestra los productos que se pueden comprar y otra que muestra los elementos añadidos al carrito.

1. Crear orders slice
   1.1. Tipado de IOrders y IOrder
   1.2. Action types => add: '[ADD] ORDER_TO_THE_HISTORY'
   1.3. Crear y tipar acciones => addOrderAction = ({ order }) => ...
   1.4. Crear reducer
   1.5. Crear selector
   1.6. Añadir slice al RootReducer

2. Cart.containers
   2.1. Añadir addOrderAction al cart.container
   2.2. Dispatchar la acción en handleAddOrder()

3. Orders.container
   3.1. Crear orders.container
   3.2. Añadir estado de products y orders

4. Orders
   4.1. Tipar
   4.2. Escribir la función getTotalPrice()
