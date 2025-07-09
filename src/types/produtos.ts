export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  precoAntigo?: string; // ← novo campo opcional
  linkPix: string;
  imagem?: string; // caso queira usar imagens também
  categoria: string; // ← adicionado aqui
}
