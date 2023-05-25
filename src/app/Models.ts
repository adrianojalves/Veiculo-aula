export interface Tipo{
  id: number;
  nome: string;
}

export interface Veiculo{
  id: number;
  nome: string;
  dataAtualizacao: Date;
  status: boolean;
  kmAtual: number;
  cor: string;
  tipoId: number;
}

export const CORES = ["Amarelo", "Azul", "Bege", "Branco","Cinza", "Marron", "Preta", "Verde", "Vermelho", "Rosa", "Outra"];
