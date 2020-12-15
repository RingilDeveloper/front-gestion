Vue.component('navegacion',{
  template: 
  ` 

  <nav class="navegador">
      <button class="boton"  onclick="location.href='../pages/tabla.html'">Home</button>
      <button class="boton"onclick="location.href='../pages/clientes.html'">Clientes</button>
      <button class="boton" onclick="location.href='../pages/producto.html'">Productos</button>
      <button class="boton" onclick="location.href='../pages/compras.html'" >Compras</button>
      <button class="boton bg-danger" onclick="location.href='../index.html'" >Salir</button>
    </nav>
  `,

})