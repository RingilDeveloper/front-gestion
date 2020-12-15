const app  = new Vue ({
  el: '#app',
  data :{
    usuario: "",
    contraseña: "",
    clientes: [
      {cedula:"1098558",
      nombres: 'panca maria' ,
      apellidos: 'pereira',
      email: 'gmail',
      telefono: '58558',
    },
    {cedula:"1098",
      nombres: 'panca maria' ,
      apellidos: 'pereira',
      email: 'gmail',
      telefono: '58558',
    },
    
    ],
    cliente: {
      cedula: "",
      nombres: "",
      apellidos: "",
      email: "",
      telefono: "",
    },
    productos: [
     { codigo_producto: "",
      nombre_producto: "",
      precio: "",
     cantidad_disponible: "",
      }   
         ],
    producto: {
      codigo_producto: "",
      nombre_producto: "",
      precio: "",
     cantidad_disponible: "",
    },
    compra:{
      id_compra: "",
      cedula: "",
      nombres: "",
      apellidos: "",
      codigo_producto: "",
      producto: "",
      precio_compra: "",
    },
    compras:[{
      id_compra:"" ,
      cedula: "",
      nombres: "",
      apellidos: "",
      codigo_producto: "",
      producto: "",
      precio_compra: "",
    }]
  },
  methods: {
    comparacion(){
      if (this.usuario == 'camilo' /*aca va el usuario de la base de datos*/ && this.contraseña == 'contraseña' /*aca va el usuario de la base de datos*/){
        location.href =("./pages/tabla.html");
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El usuario o la contraseña es incorrecto!',
        })
      }
    },
    esCliente(persona) {
      return persona.cedula ===this.cliente.cedula;
  },
    buscarCliente(){
      const found = this.clientes.find(this.esCliente);
      alert(`
      Cedula: ${found.cedula}
      Nombre: ${found.nombres}
      Apellidos: ${found.apellidos}
      Email: ${found.email}
      Telefono: ${found.telefono}`)
    },
    eliminarCliente(index){
      Swal.fire({
        title: 'Estas seguro?',
        text: "Esto no tiene revesa!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Borrado!',
            'Fue borrado correctamente.',
            'success'
          )
          this.clientes.splice(index,1)
        }
    
    })
    }, 
    esProducto(product) {
      return product.cedula ===this.productos.codigo_producto;
    },
    buscarProducto(){
      const found = this.productos.find(this.esProducto);
      alert(`
      Codigo producto: ${found.codigo_producto}
      Nombre: ${found.nombre_producto}
      Precio: ${found.precio}
      Cantidad: ${found.cantidad_disponible}
      `)
    },
    eliminaProducto(index){
      Swal.fire({
        title: 'Estas seguro?',
        text: "Esto no tiene revesa!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Borrado!',
            'Fue borrado correctamente.',
            'success'
          )
          this.productos.splice(index,1)
        }
    
    })
    },
    esCompra(comp) {
      return comp.id_compra ===this.compras.id_compra;
    },
    buscarCompra(){
      const found = this.compras.find(this.esCompra);
      alert(`
      Id compra: ${found.id_compra}
      Cedula: ${found.cedula}
      Nombres: ${found.nombres}
      Apellidos: ${found.apellidos}
      Codigo producto: ${found.codigo_producto}
      Producto: ${found.producto}
      Precio compra: ${found.precio_compra}
      `)
  }
}
})
