export interface Card {
    numero: string;
    nombre: string;
    cvv: number | string;
    vencimiento: string;
    brand?: string; 
}