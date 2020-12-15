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
    {cedula:"1098558",
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
    buscarCliente(){
      
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
    }
  }
})
