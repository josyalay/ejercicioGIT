class Persona {
    nombre;
    apellido;
    edad;

    constructor (nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
    }

    getDetalles() {
        console.log(this.nombre, this.apellido, "de", this.edad, "años");
    }

}

class Empleado extends Persona {
    tipo;

    constructor(nombre, apellido, tipo) {
        super(nombre, apellido)
        this.tipo = tipo
    }

    getDetalles() {
        super.getDetalles();
        console.log("-" + this.tipo);
    }
}

class Nomina extends Empleado {
    constructor(...args) {
        super(...args)
    }

    calcularNomina() {
        var dias = Math.floor((Math.random() * (15 - 5 + 1) + 5));
        if (this.tipo == "C") {
            var salarioBruto = 500 * dias;
            var impuesto = salarioBruto * 0.13;
            var salarioNeto = salarioBruto - impuesto; 
            console.log("pertenece a Empleado de confianza con un sueldo de $", salarioNeto, "por", dias, "días trabajados\n");
        } else {
            var salarioBruto = 350 * dias;
            var impuesto = salarioBruto * 0.10;
            var salarioNeto = salarioBruto - impuesto; 
            console.log("pertenece a Sindicato con un sueldo de $", salarioNeto, "por", dias, "días trabajados\n");
        }
    }
}

const empleados = [["Juan", "Perez", "C", 30], ["Javier", "Hernandez", "S", 35], ["Monica", "Lopez", "C", 51]]

for (let i = 0; i < empleados.length; i++) {
    const element = empleados[i];
    var persona = new Nomina(element[0], element[1], element[2]);
    persona.edad = element[3];
    persona.getDetalles();
    persona.calcularNomina();
}
