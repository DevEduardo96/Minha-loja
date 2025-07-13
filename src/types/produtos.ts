export interface Produto {
  id: number;
  nome: string;
  imagem: string;
  imagensExtras?: string[];
  preco: string;
  precoAntigo?: string;
  descricao: string;
  linkPix: string;
  categoria: string;
}
