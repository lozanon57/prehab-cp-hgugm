import type { Patologia } from '../types'

export const PATOLOGIAS: Patologia[] = [
  {
    code: 'CP',
    nombre: 'Carcinomatosis peritoneal',
    nombreCompleto: 'Carcinomatosis peritoneal + HIPEC',
    nombreEn: 'Peritoneal carcinomatosis',
    nombreCompletoEn: 'Peritoneal carcinomatosis + HIPEC',
    icono: '🩺',
    descripcion: 'CRS + HIPEC · PIPAC',
    descripcionEn: 'CRS + HIPEC · PIPAC',
    color: '#1B3F6B',
    colorClaro: '#E8EDF3',
  },
]

export const getPatologia = (code: string): Patologia | undefined =>
  PATOLOGIAS.find((p) => p.code === code)
