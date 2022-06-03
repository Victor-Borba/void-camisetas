export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    quantidadeEstoque: number;
    descricaoPreco: string;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto{ 

    quantidade: number;
}

export const produtos: IProduto[] = [
    {id: 1, descricao: "Camiseta teste 1", preco: 40.00, descricaoPreco: "À vista no PIX", imagem: "../assets/01.png", quantidadeEstoque: 5},
    {id: 2, descricao: "Camiseta teste 2", preco: 30.00, descricaoPreco: "À vista no PIX", imagem: "../assets/02.png", quantidadeEstoque: 5},
    {id: 3, descricao: "Camiseta teste 3", preco: 20.00, descricaoPreco: "À vista no PIX", imagem: "../assets/03.png", quantidadeEstoque: 5},
    {id: 4, descricao: "Camiseta teste 4", preco: 450.00, descricaoPreco: "À vista no PIX", imagem: "../assets/04.png", quantidadeEstoque: 5},
    {id: 5, descricao: "Camiseta teste 5", preco: 401.00, descricaoPreco: "À vista no PIX", imagem: "../assets/05.png", quantidadeEstoque: 5},
    {id: 6, descricao: "Camiseta teste 6", preco: 402.00, descricaoPreco: "À vista no PIX", imagem: "../assets/06.png", quantidadeEstoque: 5},
    {id: 7, descricao: "Camiseta teste 3", preco: 403.00, descricaoPreco: "À vista no PIX", imagem: "../assets/03.png", quantidadeEstoque: 5},
    {id: 8, descricao: "Camiseta teste 3", preco: 404.00, descricaoPreco: "À vista no PIX", imagem: "../assets/03.png", quantidadeEstoque: 5},
    {id: 9, descricao: "Camiseta teste 3", preco: 405.00, descricaoPreco: "À vista no PIX", imagem: "../assets/03.png", quantidadeEstoque: 5} 
]