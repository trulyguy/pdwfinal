import { DecimalPipe } from "@angular/common";
import { Timestamp } from "rxjs";

export interface IDespesa {
    id: number,
    nome: string,
    valor: string,
    tipo: string,
    created_at: string
}