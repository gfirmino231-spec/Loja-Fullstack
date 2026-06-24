import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

interface Product {
  name: string;
  description: string;
  price: number;
  seller: string;
  colors: Array<{
    id: string;
    displayName: string;
    image?: string;
  }>;
  sizes: Array<{
    id: string;
    displayName: string;
  }>;
  image: string;
}

const bolsas: Product[] = [
  {
    name: 'Bolsa Coringa',
    description:
      'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!',
    price: 120.0,
    seller: 'Riachuelo',
    colors: [
      { id: 'camel', displayName: 'Camel', image: '/destaques/bolsa-coringa-camel.jpg' },
      { id: 'black', displayName: 'Preta', image: '/destaques/bolsa-coringa-preta.png' },
      { id: 'blue', displayName: 'Azul', image: '/destaques/bolsa-coringa-azul.png' },
    ],
    sizes: [{ id: 'unique', displayName: 'Único' }],
    image: '/destaques/bolsa-coringa-camel.jpg',
  },
  {
    name: 'Bolsa Tote',
    description: 'Bolsa tote espaçosa e moderna para todas as ocasiões.',
    price: 140.0,
    seller: 'Renner',
    colors: [
      { id: 'gray', displayName: 'Cinza' },
      { id: 'navy', displayName: 'Azul Marinho' },
    ],
    sizes: [{ id: 'unique', displayName: 'Único' }],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/bolsa-2.png',
  },
  {
    name: 'Bolsa de Ombro',
    description: 'Bolsa de ombro em couro ecológico, compacta e elegante.',
    price: 160.0,
    seller: 'C&A',
    colors: [
      { id: 'white', displayName: 'Branco' },
      { id: 'red', displayName: 'Vermelho' },
    ],
    sizes: [{ id: 'unique', displayName: 'Único' }],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/bolsa-3.png',
  },
  {
    name: 'Bolsa Mochila',
    description: 'Bolsa mochila versátil para uso casual ou profissional.',
    price: 180.0,
    seller: 'Riachuelo',
    colors: [
      { id: 'black', displayName: 'Preto' },
      { id: 'green', displayName: 'Verde' },
    ],
    sizes: [{ id: 'unique', displayName: 'Único' }],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/bolsa-4.png',
  },
  {
    name: 'Bolsa de Viagem',
    description: 'Bolsa de viagem compacta, ideal para finais de semana.',
    price: 200.0,
    seller: 'C&A',
    colors: [
      { id: 'blue', displayName: 'Azul' },
      { id: 'black', displayName: 'Preto' },
    ],
    sizes: [{ id: 'unique', displayName: 'Único' }],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/bolsa-5.png',
  },
  {
    name: 'Bolsa Transversal',
    description:
      'Bolsa transversal em tecido resistente, com vários compartimentos.',
    price: 110.0,
    seller: 'Renner',
    colors: [
      { id: 'gray', displayName: 'Cinza' },
      { id: 'black', displayName: 'Preto' },
    ],
    sizes: [{ id: 'unique', displayName: 'Único' }],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/bolsa-6.png',
  },
  {
    name: 'Bolsa Pequena',
    description: 'Bolsa pequena e prática, com design minimalista.',
    price: 90.0,
    seller: 'Riachuelo',
    colors: [
      { id: 'beige', displayName: 'Bege' },
      { id: 'pink', displayName: 'Rosa' },
    ],
    sizes: [{ id: 'unique', displayName: 'Único' }],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/bolsa-7.png',
  },
];

const calcas: Product[] = [
  {
    name: 'Calça Alfaiataria',
    description: 'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!',
    price: 180.0,
    seller: 'Renner',
    colors: [
      { id: 'beige', displayName: 'Bege', image: '/destaques/calca-alfaiataria-bege.jpg' },
      { id: 'red', displayName: 'Vermelha', image: '/destaques/calca-alfaiataria-vermelha.png' },
      { id: 'blue', displayName: 'Azul', image: '/destaques/calca-alfaiataria-azul.png' },
    ],
    sizes: [
      { id: '36', displayName: '36' },
      { id: '38', displayName: '38' },
      { id: '40', displayName: '40' },
      { id: '42', displayName: '42' },
      { id: '44', displayName: '44' },
    ],
    image: '/destaques/calca-alfaiataria-bege.jpg',
  },
  {
    name: 'Calça Reta',
    description: 'Calça com corte reto e tecido de alta qualidade.',
    price: 220.0,
    seller: 'Riachuelo',
    colors: [
      { id: 'black', displayName: 'Preto' },
      { id: 'beige', displayName: 'Bege' },
    ],
    sizes: [
      { id: '36', displayName: '36' },
      { id: '38', displayName: '38' },
      { id: '40', displayName: '40' },
      { id: '42', displayName: '42' },
      { id: '44', displayName: '44' },
    ],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/calca-2.png',
  },
  {
    name: 'Calça Jogger',
    description: 'Calça jogger com elástico na cintura e punhos ajustáveis.',
    price: 180.0,
    seller: 'C&A',
    colors: [
      { id: 'gray', displayName: 'Cinza' },
      { id: 'black', displayName: 'Preto' },
    ],
    sizes: [
      { id: '36', displayName: '36' },
      { id: '38', displayName: '38' },
      { id: '40', displayName: '40' },
      { id: '42', displayName: '42' },
      { id: '44', displayName: '44' },
    ],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/calca-3.png',
  },
  {
    name: 'Calça Pantalona',
    description: 'Calça pantalona com tecido fluido e caimento perfeito.',
    price: 250.0,
    seller: 'Renner',
    colors: [
      { id: 'white', displayName: 'Branco' },
      { id: 'beige', displayName: 'Bege' },
    ],
    sizes: [
      { id: '36', displayName: '36' },
      { id: '38', displayName: '38' },
      { id: '40', displayName: '40' },
      { id: '42', displayName: '42' },
      { id: '44', displayName: '44' },
    ],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/calca-4.png',
  },
  {
    name: 'Calça Social',
    description: 'Calça social clássica para ocasiões formais e profissionais.',
    price: 300.0,
    seller: 'Riachuelo',
    colors: [
      { id: 'black', displayName: 'Preto' },
      { id: 'navy', displayName: 'Azul Marinho' },
    ],
    sizes: [
      { id: '36', displayName: '36' },
      { id: '38', displayName: '38' },
      { id: '40', displayName: '40' },
      { id: '42', displayName: '42' },
      { id: '44', displayName: '44' },
    ],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/calca-5.png',
  },
  {
    name: 'Calça Cargo',
    description: 'Calça cargo com bolsos utilitários e tecido durável.',
    price: 210.0,
    seller: 'C&A',
    colors: [
      { id: 'green', displayName: 'Verde' },
      { id: 'beige', displayName: 'Bege' },
    ],
    sizes: [
      { id: '36', displayName: '36' },
      { id: '38', displayName: '38' },
      { id: '40', displayName: '40' },
      { id: '42', displayName: '42' },
      { id: '44', displayName: '44' },
    ],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/calca-6.png',
  },
  {
    name: 'Calça Flare',
    description: 'Calça flare com estilo retrô e modelagem justa nas coxas.',
    price: 230.0,
    seller: 'Renner',
    colors: [
      { id: 'light-blue', displayName: 'Azul Claro' },
      { id: 'white', displayName: 'Branco' },
    ],
    sizes: [
      { id: '36', displayName: '36' },
      { id: '38', displayName: '38' },
      { id: '40', displayName: '40' },
      { id: '42', displayName: '42' },
      { id: '44', displayName: '44' },
    ],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/calca-7.png',
  },
];

const camisetas: Product[] = [
  {
    name: 'Camiseta Conforto',
    description:
      'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.',
    price: 70.0,
    seller: 'C&A',
    colors: [
      { id: 'white', displayName: 'Branca', image: '/destaques/camiseta-conforto-branca.jpg' },
      { id: 'green', displayName: 'Verde', image: '/destaques/camiseta-conforto-verde.png' },
      { id: 'brown', displayName: 'Marrom', image: '/destaques/camiseta-conforto-marrom.png' },
    ],
    sizes: [
      { id: 'p', displayName: 'P' },
      { id: 'm', displayName: 'M' },
      { id: 'g', displayName: 'G' },
      { id: 'gg', displayName: 'GG' },
    ],
    image: '/destaques/camiseta-conforto-branca.jpg',
  },
  {
    name: 'Camiseta Estampada',
    description: 'Camiseta com estampa moderna e acabamento premium.',
    price: 70.0,
    seller: 'Renner',
    colors: [
      { id: 'blue', displayName: 'Azul' },
      { id: 'red', displayName: 'Vermelho' },
      { id: 'black', displayName: 'Preto' },
    ],
    sizes: [
      { id: 'p', displayName: 'P' },
      { id: 'm', displayName: 'M' },
      { id: 'g', displayName: 'G' },
      { id: 'gg', displayName: 'GG' },
    ],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/camiseta-2.png',
  },
  {
    name: 'Camiseta Oversized',
    description: 'Modelo oversized, ideal para looks casuais e confortáveis.',
    price: 80.0,
    seller: 'Riachuelo',
    colors: [
      { id: 'black', displayName: 'Preto' },
      { id: 'white', displayName: 'Branco' },
      { id: 'green', displayName: 'Verde' },
    ],
    sizes: [
      { id: 'p', displayName: 'P' },
      { id: 'm', displayName: 'M' },
      { id: 'g', displayName: 'G' },
      { id: 'gg', displayName: 'GG' },
    ],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/camiseta-3.png',
  },
  {
    name: 'Camiseta Slim Fit',
    description: 'Camiseta com modelagem ajustada para um look elegante.',
    price: 60.0,
    seller: 'C&A',
    colors: [
      { id: 'navy', displayName: 'Azul Marinho' },
      { id: 'gray', displayName: 'Cinza' },
    ],
    sizes: [
      { id: 'p', displayName: 'P' },
      { id: 'm', displayName: 'M' },
      { id: 'g', displayName: 'G' },
      { id: 'gg', displayName: 'GG' },
    ],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/camiseta-4.png',
  },
  {
    name: 'Camiseta com Bolso',
    description: 'Camiseta casual com bolso frontal e toque moderno.',
    price: 65.0,
    seller: 'Renner',
    colors: [
      { id: 'green', displayName: 'Verde' },
      { id: 'brown', displayName: 'Marrom' },
    ],
    sizes: [
      { id: 'p', displayName: 'P' },
      { id: 'm', displayName: 'M' },
      { id: 'g', displayName: 'G' },
      { id: 'gg', displayName: 'GG' },
    ],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/camiseta-5.png',
  },
  {
    name: 'Camiseta Longline',
    description: 'Camiseta com barra alongada para estilo urbano.',
    price: 90.0,
    seller: 'Riachuelo',
    colors: [
      { id: 'black', displayName: 'Preto' },
      { id: 'red', displayName: 'Vermelho' },
    ],
    sizes: [
      { id: 'p', displayName: 'P' },
      { id: 'm', displayName: 'M' },
      { id: 'g', displayName: 'G' },
      { id: 'gg', displayName: 'GG' },
    ],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/camiseta-6.png',
  },
  {
    name: 'Camiseta Polo',
    description: 'Camiseta polo clássica com tecido de alta qualidade.',
    price: 100.0,
    seller: 'Renner',
    colors: [
      { id: 'white', displayName: 'Branco' },
      { id: 'blue', displayName: 'Azul' },
    ],
    sizes: [
      { id: 'p', displayName: 'P' },
      { id: 'm', displayName: 'M' },
      { id: 'g', displayName: 'G' },
      { id: 'gg', displayName: 'GG' },
    ],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/camiseta-7.png',
  },
];

const jaquetas: Product[] = [
  {
    name: 'Jaqueta Jeans',
    description:
      'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!',
    price: 150.0,
    seller: 'Riachuelo',
    colors: [
      { id: 'denim', displayName: 'Jeans', image: '/destaques/jaqueta-jeans-jeans.jpg' },
      { id: 'gray', displayName: 'Cinza', image: '/destaques/jaqueta-jeans-cinza.png' },
      { id: 'black', displayName: 'Preta', image: '/destaques/jaqueta-jeans-preta.png' },
    ],
    sizes: [
      { id: 'pp', displayName: 'PP' },
      { id: 'p', displayName: 'P' },
      { id: 'm', displayName: 'M' },
      { id: 'g', displayName: 'G' },
      { id: 'gg', displayName: 'GG' },
    ],
    image: '/destaques/jaqueta-jeans-jeans.jpg',
  },
  {
    name: 'Jaqueta de Couro',
    description: 'Jaqueta em couro sintético com acabamento premium.',
    price: 250.0,
    seller: 'Renner',
    colors: [
      { id: 'black', displayName: 'Preto' },
      { id: 'brown', displayName: 'Marrom' },
    ],
    sizes: [
      { id: 'p', displayName: 'P' },
      { id: 'm', displayName: 'M' },
      { id: 'g', displayName: 'G' },
      { id: 'gg', displayName: 'GG' },
    ],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/jaqueta-2.png',
  },
  {
    name: 'Jaqueta Bomber',
    description: 'Jaqueta bomber estilosa e confortável para qualquer ocasião.',
    price: 200.0,
    seller: 'C&A',
    colors: [
      { id: 'navy', displayName: 'Azul Marinho' },
      { id: 'black', displayName: 'Preto' },
    ],
    sizes: [
      { id: 'p', displayName: 'P' },
      { id: 'm', displayName: 'M' },
      { id: 'g', displayName: 'G' },
      { id: 'gg', displayName: 'GG' },
    ],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/jaqueta-3.png',
  },
  {
    name: 'Jaqueta de Nylon',
    description: 'Jaqueta leve em nylon com capuz removível.',
    price: 180.0,
    seller: 'Riachuelo',
    colors: [
      { id: 'gray', displayName: 'Cinza' },
      { id: 'black', displayName: 'Preto' },
    ],
    sizes: [
      { id: 'p', displayName: 'P' },
      { id: 'm', displayName: 'M' },
      { id: 'g', displayName: 'G' },
      { id: 'gg', displayName: 'GG' },
    ],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/jaqueta-4.png',
  },
  {
    name: 'Jaqueta Parka',
    description: 'Jaqueta parka longa com forro quente para o inverno.',
    price: 300.0,
    seller: 'Renner',
    colors: [
      { id: 'green', displayName: 'Verde' },
      { id: 'beige', displayName: 'Bege' },
    ],
    sizes: [
      { id: 'p', displayName: 'P' },
      { id: 'm', displayName: 'M' },
      { id: 'g', displayName: 'G' },
      { id: 'gg', displayName: 'GG' },
    ],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/jaqueta-5.png',
  },
  {
    name: 'Jaqueta Puffer',
    description: 'Jaqueta puffer acolchoada e resistente à água.',
    price: 220.0,
    seller: 'C&A',
    colors: [
      { id: 'black', displayName: 'Preto' },
      { id: 'red', displayName: 'Vermelho' },
    ],
    sizes: [
      { id: 'p', displayName: 'P' },
      { id: 'm', displayName: 'M' },
      { id: 'g', displayName: 'G' },
      { id: 'gg', displayName: 'GG' },
    ],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/jaqueta-6.png',
  },
  {
    name: 'Jaqueta Esportiva',
    description:
      'Jaqueta esportiva com tecido respirável e fechamento em zíper.',
    price: 190.0,
    seller: 'Renner',
    colors: [
      { id: 'blue', displayName: 'Azul' },
      { id: 'gray', displayName: 'Cinza' },
    ],
    sizes: [
      { id: 'p', displayName: 'P' },
      { id: 'm', displayName: 'M' },
      { id: 'g', displayName: 'G' },
      { id: 'gg', displayName: 'GG' },
    ],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/jaqueta-7.png',
  },
];

const oculos: Product[] = [
  {
    name: 'Óculos Redondo',
    description: 'Armação metálica em grafite com lentes arredondadas. Sem erro!',
    price: 120.0,
    seller: 'Chilli Beans',
    colors: [
      { id: 'graphite', displayName: 'Grafite', image: '/destaques/oculos-redondo-grafite.jpg' },
      { id: 'black', displayName: 'Preto', image: '/destaques/oculos-redondo-preto.png' },
      { id: 'casual', displayName: 'Casual', image: '/destaques/oculos-redondo-casual.png' },
    ],
    sizes: [{ id: 'unique', displayName: 'Único' }],
    image: '/destaques/oculos-redondo-grafite.jpg',
  },
  {
    name: 'Óculos Redondo Metal',
    description: 'Modelo redondo retrô com armação de metal leve.',
    price: 120.0,
    seller: 'Chilli Beans',
    colors: [
      { id: 'silver', displayName: 'Prata' },
      { id: 'black', displayName: 'Preto' },
    ],
    sizes: [{ id: 'unique', displayName: 'Único' }],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/oculos-2.png',
  },
  {
    name: 'Óculos Esportivo',
    description:
      'Óculos esportivo com proteção UV400, ideal para atividades ao ar livre.',
    price: 180.0,
    seller: 'Decathlon',
    colors: [
      { id: 'red', displayName: 'Vermelho' },
      { id: 'blue', displayName: 'Azul' },
    ],
    sizes: [{ id: 'unique', displayName: 'Único' }],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/oculos-3.png',
  },
  {
    name: 'Óculos Wayfarer',
    description: 'Modelo wayfarer moderno com armação robusta.',
    price: 160.0,
    seller: 'Óticas Diniz',
    colors: [
      { id: 'black', displayName: 'Preto' },
      { id: 'tortoise', displayName: 'Tartaruga' },
    ],
    sizes: [{ id: 'unique', displayName: 'Único' }],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/oculos-4.png',
  },
  {
    name: 'Óculos de Sol Cat Eye',
    description: 'Estiloso modelo cat eye com lentes escuras.',
    price: 140.0,
    seller: 'Óticas Carol',
    colors: [
      { id: 'pink', displayName: 'Rosa' },
      { id: 'black', displayName: 'Preto' },
    ],
    sizes: [{ id: 'unique', displayName: 'Único' }],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/oculos-5.png',
  },
  {
    name: 'Óculos Clubmaster',
    description: 'Óculos clubmaster clássico com design atemporal.',
    price: 170.0,
    seller: 'Chilli Beans',
    colors: [
      { id: 'brown', displayName: 'Marrom' },
      { id: 'gold', displayName: 'Dourado' },
    ],
    sizes: [{ id: 'unique', displayName: 'Único' }],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/oculos-6.png',
  },
  {
    name: 'Óculos Retrô',
    description: 'Óculos de armação grande com design retrô.',
    price: 130.0,
    seller: 'Renner',
    colors: [
      { id: 'transparent', displayName: 'Transparente' },
      { id: 'black', displayName: 'Preto' },
    ],
    sizes: [{ id: 'unique', displayName: 'Único' }],
    image:
      'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/oculos-7.png',
  },
];

const tenis = [
  {
    name: 'Tênis Chunky',
    description:
      'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.',
    price: 250.0,
    seller: 'Adidas',
    colors: [
      { id: 'white', displayName: 'Branco', image: '/destaques/tenis-chunky-branco.jpg' },
      { id: 'yellow', displayName: 'Amarelo', image: '/destaques/tenis-chunky-amarelo.png' },
      { id: 'red', displayName: 'Vermelho', image: '/destaques/tenis-chunky-vermelho.png' },
    ],
    sizes: [
      { id: '37', displayName: '37' },
      { id: '38', displayName: '38' },
      { id: '39', displayName: '39' },
      { id: '40', displayName: '40' },
      { id: '41', displayName: '41' },
      { id: '42', displayName: '42' },
    ],
    image: '/destaques/tenis-chunky-branco.jpg',
  },
];

const categories = [
  {
    id: 'camisetas',
    displayName: 'Camisetas',
    icon: 'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/categories/camiseta.png',
  },
  {
    id: 'bolsas',
    displayName: 'Bolsas',
    icon: 'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/categories/bolsa.png',
  },
  {
    id: 'calcados',
    displayName: 'Calçados',
    icon: 'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/categories/calcados.png',
  },
  {
    id: 'calcas',
    displayName: 'Calças',
    icon: 'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/categories/calca.png',
  },
  {
    id: 'casacos',
    displayName: 'Casacos',
    icon: 'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/categories/casacos.png',
  },
  {
    id: 'oculos',
    displayName: 'Óculos',
    icon: 'https://raw.githubusercontent.com/viniciosneves/meteora-assets/refs/heads/main/categories/oculos.png',
  },
];

async function main() {
  const createdCategories: { id: number; displayName: string; icon: string }[] = [];
  for (const category of categories) {
    const createdCategory = await prisma.category.upsert({
      where: { displayName: category.displayName },
      update: {
        icon: category.icon,
      },
      create: {
        displayName: category.displayName,
        icon: category.icon,
      },
    });
    createdCategories.push(createdCategory);
  }

  const products = [
    { items: bolsas, category: 'Bolsas' },
    { items: calcas, category: 'Calças' },
    { items: camisetas, category: 'Camisetas' },
    { items: jaquetas, category: 'Casacos' },
    { items: oculos, category: 'Óculos' },
    { items: tenis, category: 'Calçados' },
  ];

  for (const productSet of products) {
    const category = createdCategories.find(
      (c) => c.displayName === productSet.category,
    );

    if (!category) continue; // pula se não encontrar

    for (const product of productSet.items) {
      const seller = await prisma.seller.upsert({
        where: { name: product.seller },
        update: {},
        create: { name: product.seller },
      });

      const createdProduct = await prisma.product.create({
        data: {
          name: product.name,
          description: product.description,
          price: product.price,
          sellerId: seller.id,
          image: product.image,
          categoryId: category.id,
        },
      });

      for (const color of product.colors) {
        const createdColor = await prisma.color.upsert({
          where: { displayName: color.displayName },
          update: {},
          create: {
            displayName: color.displayName,
          },
        });

        await prisma.productColor.create({
          data: {
            productId: createdProduct.id,
            colorId: createdColor.id,
            image: color.image ?? product.image,
          },
        });
      }

      for (const size of product.sizes) {
        const createdSize = await prisma.size.upsert({
          where: { displayName: size.displayName },
          update: {},
          create: {
            displayName: size.displayName,
          },
        });

        await prisma.productSize.create({
          data: {
            productId: createdProduct.id,
            sizeId: createdSize.id,
          },
        });
      }
    }
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });