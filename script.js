Vue.component('primer', {
    template: `<div>
    <h1>Soy Un Componente de {{name}} </h1>
</div>`,
data() {
    return {
        name: "Vue"
    }
},
  })


new Vue({
    el: "#app",
    data: {
        message: "Mi Primer Aplicacion Con Vue JS",
        alerta: "alert alert-primary",
        centrar: "text-center",
        frutas: [
            { nombre: "melón", cantidad: 4 },
            { nombre: "Papaya", cantidad: 9 },
            { nombre: "Banana", cantidad: 7 },
            { nombre: "Sandía", cantidad: 0 },
            { nombre: "Guayaba", cantidad: 29 }

        ],
        contador: 0,
        total: 0,
        nuevafruta: "",
        nuevacantidad: ""

    },
    methods: {
        agregarFruta() {
            //alert("diste clic")
            this.frutas.push({
                nombre: this.nuevafruta,
                cantidad: this.nuevacantidad
            });
            this.nuevafruta = "", this.nuevacantidad = ""

        },
        editar(id) {
            confirm("Quieres editar " + id)
        },
        eliminar(id){
            this.frutas.splice(id, 1)
        }
    },
    computed: {
        sumar() {
            this.total = 0
            for (fruta of this.frutas) {
                this.total += fruta.cantidad;
            }
            return this.total
        },
    }
})
