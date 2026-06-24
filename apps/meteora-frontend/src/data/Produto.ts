import bolsacoringa from '../assets/bolsacoringa.jpg'
import calcaalfaiataria from '../assets/calcaalfaiataria.jpg'
import tenischunky from '../assets/tenischunky.jpg'
import  jaquetajeans from '../assets/jaquetajeans.jpg'
import camisetaconforto from '../assets/camisetaconforto.jpg'
import oculosredondo from '../assets/oculosredondo.jpg'
import bolsapreta from '../assets/Bolsa2.png'
import bolsaazul from '../assets/Bolsa3.png'
import oculospreto from '../assets/Óculos2.png'
import oculoscasual from '../assets/Óculos3.png'
import jaquetacinza from '../assets/Jaqueta2.png'
import jaquetapreta from '../assets/Jaqueta3.png'
import tenisamarelo from '../assets/Tenis2.png'
import tenisvermelho from '../assets/Tenis3.png'
import calcavermelha from '../assets/Calça2.png'
import calcaazul from '../assets/Calça3.png'
import camisetaverde from '../assets/Camiseta2.png'
import camisetamarrom from '../assets/Camiseta3.png'


export const produtos = [
    {
        id: 1,
        nome: 'Bolsa Coringa',
        valor: 120,
        descricao: 'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!',
        imagem: bolsacoringa,
        cores: [
            { cor: 'Camel', imagem: bolsacoringa },
            { cor: 'Preta', imagem: bolsapreta },
            { cor: 'Azul', imagem: bolsaazul },
        ],
        tamanhos: ['Único']
    },
    {
        id: 2,
        nome: 'Calça Alfaiataria',
        valor: 180,
        descricao: 'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!',
        imagem: calcaalfaiataria,
        cores: [
            { cor: 'Bege', imagem: calcaalfaiataria },
            { cor: 'Vermelha', imagem: calcavermelha },
            { cor: 'Azul', imagem: calcaazul },
        ],
        tamanhos: ['36', '38', '40', '42', '44']
    },
    {
        id: 3,
        nome: 'Tenis Chunky',
        valor: 250,
        descricao: 'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.',
        imagem: tenischunky,
        cores: [
            { cor: 'Branco', imagem: tenischunky },
            { cor: 'Amarelo', imagem: tenisamarelo },
            { cor: 'Vermelho', imagem: tenisvermelho },
        ],
        tamanhos: ['37', '38', '39', '40', '41', '42']
    },
    {
        id: 4,
        nome: 'Jaqueta Jeans',
        valor: 150,
        descricao: 'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!',
        imagem: jaquetajeans,
        cores: [
            { cor: 'Jeans', imagem: jaquetajeans },
            { cor: 'Cinza', imagem: jaquetacinza },
            { cor: 'Preta', imagem: jaquetapreta },
        ],
        tamanhos: ['PP', 'P', 'M', 'G', 'GG']
    },
    {
        id: 5,
        nome: 'Camiseta Conforto',
        valor: 70,
        descricao: 'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.',
        imagem: camisetaconforto,
        cores: [
            { cor: 'Branca', imagem: camisetaconforto },
            { cor: 'Verde', imagem: camisetaverde },
            { cor: 'Marrom', imagem: camisetamarrom },
        ],
        tamanhos: ['PP', 'P', 'M', 'G', 'GG']
    },
    {
        id: 6,
        nome: 'Oculos Redondo',
        valor: 120,
        descricao: 'Armação metálica em grafite com lentes arredondadas. Sem erro!',
        imagem: oculosredondo,
        cores: [
            { cor: 'Grafite', imagem: oculosredondo },
            { cor: 'Preto', imagem: oculospreto },
            { cor: 'Casual', imagem: oculoscasual },
        ],
        tamanhos: ['Único']
    },
]
