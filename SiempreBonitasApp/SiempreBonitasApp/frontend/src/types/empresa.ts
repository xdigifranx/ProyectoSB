export interface RedSocial {
  url: string;
  nombre: string;
}

export interface EmpresaInfo {
  nombre: string;
  logo: string;
  direccion: string;
  telefono: string;
  redes: RedSocial[];
}
