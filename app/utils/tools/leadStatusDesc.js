export const leadStatusDesc = ({ status }) => {
    switch (status) {
        case 1: return 'Ventas'; break;
        case 2: return 'Reserva sin Pago'; break;
        case 5: return 'Control de Calidad'; break;
        case 6: return 'Fuera de Servicio'; break;
        case 7: return 'Número Inválido'; break;
        case 11: return 'Pendientes'; break;
        case 40: return 'No contesta'; break;
        case 50: return 'No interesa'; break;
        case 100: return 'Atendido'; break;
        case 101: return 'Whatsapp'; break;
        case 102: return 'SMS'; break;
        case 103: return 'Cambio de voz'; break;
        case 203: return 'Tarjeta'; break;
        case 303: return 'NIP'; break;
        case 403: return 'Autorización'; break;
        case 503: return 'Motivos'; break;
    }
}