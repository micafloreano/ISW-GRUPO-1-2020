import { Entrega } from "./entrega.interface";
import { Direccion } from "./direccion.interface";
import { Pago } from "./pago.interface";

export interface Pedido {
    descripcion: string;
    imagen: File;
    pago: Pago;
    entrega?: Entrega;
    direccionRetiroDelProducto: string;
    direccionEntrega: Direccion;
}