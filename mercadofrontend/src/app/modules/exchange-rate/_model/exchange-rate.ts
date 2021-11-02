/**clase para mapear todo lo que consultaremos de la API**/
/** le ponemos export para poder utilizarlo en otros servicios y modelos.**/
export class ExchangeRate{
    provider!: string;/**! para decirle que aceptaremos valores indefinidos**/
    WARNING_UPGRADED_TO_V6!: string;
    terms!: string;
    base!: string;
    date!: Date;/**json nos devuelve las fechas como cadenas pero también podemos aceptarlas como tipo Date**/
    time_last_updated!: number;
    rates!: Map<"rate", "value">;

    /**crearemos objetos de esta clase pero debemos de darles un valor por default para que
     * el compilador no marque errores con los tipos indefinidos**/
    constructor(){
        this.provider = "";
        this.WARNING_UPGRADED_TO_V6 = "";
        this.terms = "";
        this.base = "";
        this.date =  new Date;
        this.time_last_updated = 0;
        this.rates = new Map;
    }
}