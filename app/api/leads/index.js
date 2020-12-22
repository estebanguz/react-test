import axios from 'axios';
import config from '../config';
import { getJWTCrm } from '../../utils/auth';

export const getLeads = async ({
  page,
  size,
  initialDate = ' ',
  finalDate = ' ',
  status = null
}) => {
  try {
    const token = getJWTCrm();
    return await axios.get(
      `${config.hostname}/leads?page=${page}&size=${size}${
        initialDate ? '&initial_date=' : ''
      }${initialDate}${finalDate ? '&final_date=' : ''}${finalDate}${status == null ? '' : '&status='+status}`,
      {
        headers: {
          Authorization: `Bearer: ${token}`,
        },
      }
    );
  } catch (err) {
    console.log(err.response);
    return {
      status: err.response.data.payload.statusCode,
      message: err.response.data.payload.message,
    };
  }
};

export const updateLeadStatus = async ({ leadId, status }) => {
  try {
    const token = getJWTCrm();
    return await axios.put(
      `${config.hostname}/lead/${leadId}`,
      { status },
      {
        headers: {
          Authorization: `Bearer: ${token}`,
        },
      }
    );
  } catch (err) {
    console.log(err.response);
    return {
      status: err.response.data.payload.statusCode,
      message: err.response.data.payload.message,
    };
  }
};

export const ConvertExcelToJson = ({data})=>{
  const excel = xlsx.readFile(url);
  var nombreHoja = excel.SheetNames;
  let datos = xlsx.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);
// console.log(datos);
const jdatos = [];
for(i=0;i < datos.length; i++){
   const dato = datos[i];
   jdatos.push({
       ...dato,
       fecha: new Date((dato.fecha)),
       nombre: dato.nombre,
       edad: dato.edad,
       email: dato.email,
       telefono: dato.telefono,
       compania: dato.compania,
       tipo: dato.tipo,
       mensaje: dato.mensaje,
       estado: dato.estado,
       ciudad: dato.ciudad,
       municipio: dato.municipio,
       ip: dato.ip,
       estado_lead: dato.estado_lead,
       asignacion: dato.asignacion,
       observacion: dato.observacion,
       status: dato.status,
       compania: dato.compania_lead,
       status_envio: dato.status_envio,
       facebook: dato.facebook,
       verificado: dato.verificado,
       avatar: dato.avatar,
       mail_marketing: dato.mail_marketing,
       wa_send: dato.wa_send
   });
}
return jdatos;
};

export const uploadExcelLeads = async({data})=>{
  try {
    const datos = ConvertExcelToJson(data);
    const token = getJWTCrm();
    return await axios.post(
      `${config.hostname}/lead/create`,
      {
        data : datos
      },
      {
        headers: {
          Authorization: `Bearer: ${token}`,
        },
      }
    );
  } catch (err) {
    console.log(err.response);
    return {
      status: err.response.data.payload.statusCode,
      message: err.response.data.payload.message,
    };
  }
};