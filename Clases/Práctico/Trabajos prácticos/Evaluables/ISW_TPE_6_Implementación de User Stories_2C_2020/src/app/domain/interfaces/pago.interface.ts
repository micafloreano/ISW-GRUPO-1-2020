import { Card } from './card.interface';

export interface Pago {
    montoPagar: number;
    conCuantoPaga: number;
    formaDePago: string;
    tarjeta?: Card;
}