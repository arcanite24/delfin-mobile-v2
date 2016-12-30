export interface IRemesa {
    id: any,
    nombreProducto: string,
    tipoEmpaquetado: string,
    cantidadEmpaques: number,
    pesoPromedio: number,
    peso: number,
    tarifa: number,
    cliente: string,
    estancia: string,
    muchacho: any,
    status: any,
    pagos: Array<any>
}