const app  = new Vue ({
  el: '#app',
  data :{
    usuario: "",
    contraseña: "",
    clientes: [
      {cedula:"",
      nombres: '' ,
      apellidos: '',
      email: '',
      telefono: '',
    } ],
    cliente: {
      cedula: "",
      nombres: "",
      apellidos: "",
      email: "",
      telefono: "",
    },
    productos: [{ 
      codigo_producto: "",
      nombre_producto: "",
      precio: "",
     cantidad_disponible: "",
      } ],
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
    actulizarCliente(index){
      console.log('click')
      var dato = this.clientes[index].cedula
      if (dato == this.cliente.cedula){
        this.clientes.splice(index,1)
        this.agregarCliente()
      }
    },
    agregarCliente(){
      this.clientes.push({ 
        cedula: this.cliente.cedula,
        nombres: this.cliente.nombres,
        apellidos: this.cliente.apellidos,
        email:this.cliente.email,
        telefono: this.cliente.telefono
      })
      this.cliente.cedula=""
      this.cliente.nombres=""
      this.cliente.apellidos=""
      this.cliente.email=""
      this.cliente.telefono=""
      this.guardarBaseDeDatos()

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
          this.guardarBaseDeDatos()
        }
    
    })
    

    }, 
    esProducto(product) {
      return product.codigo_producto ===this.producto.codigo_producto;
    },
    buscarProducto(){
     
      const found = this.productos.find(this.esProducto);
      alert(`
      Codigo producto: ${found.codigo_producto}
      Nombre: ${found.nombre_producto}
      Precio: ${found.precio}
      Cantidad: ${found.cantidad_disponible}
      `)
      this.producto.codigo_producto=""
    },
    actulizarProducto(index){
     
      var dato = this.productos[index].codigo_producto
      if (dato == this.producto.codigo_producto){
        this.productos.splice(index,1)
        this.agregarProducto()
      
        
      }
    },
    agregarProducto(){
  
      this.productos.push({ 
        codigo_producto: this.producto.codigo_producto,
        nombre_producto: this.producto.nombre_producto,
        precio:this.producto.precio,
        cantidad_disponible: this.producto.cantidad_disponible
      
      })
      this.producto.codigo_producto=""
      this.producto.nombre_producto=""
      this.producto.precio=""
      this.producto.cantidad_disponible=""
    this.guardarBaseDeDatos()

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
          this.guardarBaseDeDatos()

        }
    
    })

    },
    esCompra(comp) {
      return comp.id_compra ===this.compra.id_compra;
    },
    buscarCompra(){
      const found = this.compra.find(this.esCompra);
      alert(`
      Id compra: ${found.id_compra}
      Cedula: ${found.cedula}
      Nombres: ${found.nombres}
      Apellidos: ${found.apellidos}
      Codigo producto: ${found.codigo_producto}
      Producto: ${found.producto}
      Precio compra: ${found.precio_compra}
      `)
  },
  agregarCompra(){
    this.compras.push({ 
      id_compra: this.compra.id_compra,
      cedula: this.compra.cedula,
      nombres: this.compra.nombres,
      apellidos: this.compra.apellidos,
      codigo_producto: this.compra.codigo_producto,
      producto:  this.compra.producto,
      precio_compra: this.compra.precio_compra
    })
    this.compra.id_compra =""
    this.compra.cedula =""
    this.compra.nombres =""
    this.compra.apellidos =""
    this.compra.codigo_producto =""
    this.compra,producto =""
    this.compra.precio_compra =""
    this.guardarBaseDeDatos()

  },  
  guardarBaseDeDatos(){ //la funcion la guarda en local toca pasarlo a remoto
    localStorage.setItem('compras-vue',  JSON.stringify(this.compras))
    localStorage.setItem('productos-vue',  JSON.stringify(this.productos))
    localStorage.setItem('clientes-vue',  JSON.stringify(this.clientes))
  },
},
created() {
  let compradb =JSON.parse(localStorage.getItem('compras-vue')) //guardamos  la base de datos en local
  let productosdb =JSON.parse(localStorage.getItem('productos-vue')) // falta pasarlo a remoto
  let clientesdb =JSON.parse(localStorage.getItem('clientes-vue'))
 // si es nula la crea si no la guarda 
  if (compradb == null){
    this.compras = [{}]
  }else{
    this.compras = compradb
  }
  if (productosdb == null){
    this.productos = [{}]
  }else{
    this.productos = productosdb
  }if (clientesdb == null){
    this.clientes = [{}]
  }else{
    this.clientes = clientesdb
  }
  
},
})
