import { ApartmentTypology, Amenity, NearbyPoint } from '../types';

export const FORM_LINKS = {
  form1: 'https://forms.gle/AEoqJzC62BGMUaWy7', // CAMPANHA TATUAPE
  form2: 'https://forms.gle/JFkBhYcfBhrfJGjH7', // CAMPANHA MOOCA
  form3: 'https://forms.gle/fhWTE2esfEdPnNTz6', // CAMPANHA VILA EMA
};

export const APARTMENTS: ApartmentTypology[] = [
  {
    id: 'tatuape',
    name: 'Edifício Jardins Tatuapé',
    location: 'Tatuapé',
    cityZone: 'Zona Leste Nobre • São Paulo/SP',
    addressHighlight: 'Próximo ao Shopping Anália Franco e Parque Ceret',
    tag: 'Campanha Tatuapé',
    area: '42m² a 65m²',
    bedrooms: '1 e 2 Dormitórios c/ Suíte',
    bathrooms: '1 a 2 Banheiros',
    parkingSpots: '1 Vaga coberta',
    priceStartingFrom: 'A partir de R$ 299.000',
    formUrl: FORM_LINKS.form1,
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    description: 'Localização consagrada no coração do Tatuapé. Viva perto dos melhores restaurantes da Rua Itapura, Shopping Anália Franco e ampla rede de metrô com fácil acesso à Radial Leste e Marginal Tietê.',
    locationHighlights: [
      'A 600m do Metrô Tatuapé & Shopping Boulevard',
      'A 5 min do Parque Ceret e Shopping Anália Franco',
      'Polo gastronômico renomado da Rua Itapura e Euclides Pacheco',
      'Infraestrutura completa de hospitais (São Luiz) e colégios tradicionais'
    ],
    features: [
      'Varanda gourmet ampla com churrasqueira integrada',
      'Fechadura eletrônica inteligente por biometria',
      'Piscina com raia aquecida e solarium no rooftop',
      'Academia com equipamentos de alta performance',
      'Coworking equipado com cabines acústicas privativas'
    ]
  },
  {
    id: 'mooca',
    name: 'Reserva Mooca Tradizione',
    location: 'Mooca',
    cityZone: 'Zona Leste Tradicional • São Paulo/SP',
    addressHighlight: 'Região nobre da Mooca, entre Rua Juventus e Av. Paes de Barros',
    tag: 'Campanha Mooca',
    area: '68m² a 92m²',
    bedrooms: '2 e 3 Dorms (1 ou 2 Suítes)',
    bathrooms: '2 a 3 Banheiros',
    parkingSpots: '1 a 2 Vagas demarcadas',
    priceStartingFrom: 'A partir de R$ 449.000',
    formUrl: FORM_LINKS.form2,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'A tradição e o charme inconfundível da Mooca aliados à modernidade arquitetônica. Próximo ao Clube Juventus, cantinas clássicas, padarias artesanais e facilidade de locomoção.',
    locationHighlights: [
      'A poucos passos da Av. Paes de Barros e Rua Juventus',
      'Próximo ao Clube Atlético Juventus e Mooca Plaza Shopping',
      'Rodeado das melhores cantinas italianas e comércios da Mooca',
      'Acesso rápido à Estação Bresser-Mooca e Av. do Estado'
    ],
    features: [
      'Varanda gourmet espaçosa com churrasqueira a carvão',
      'Suíte master com closet e persianas de enrolar integradas',
      'Espaço pizza & forno à lenha para confraternizações',
      'Piso em porcelanato retificado nas salas e banheiros',
      'Água com aquecimento central a gás nos chuveiros'
    ]
  },
  {
    id: 'vila-ema',
    name: 'Horizonte Vila Ema Club',
    location: 'Vila Ema',
    cityZone: 'Zona Leste em Alta Valorização • São Paulo/SP',
    addressHighlight: 'A passos da Estação São Lucas / Oratório do Monotrilho',
    tag: 'Campanha Vila Ema',
    area: '48m² a 76m²',
    bedrooms: '2 e 3 Dormitórios c/ Suíte',
    bathrooms: '1 a 2 Banheiros',
    parkingSpots: '1 a 2 Vagas + Depósito',
    priceStartingFrom: 'A partir de R$ 319.000',
    formUrl: FORM_LINKS.form3,
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    description: 'O maior potencial de valorização da região. Localizado na Av. Vila Ema, com mobilidade total pelo monotrilho linha prata interligada à Linha Verde do Metrô, lazer clube completo e comércio variado.',
    locationHighlights: [
      'A 300m da Estação São Lucas / Oratório (Linha 15 Prata integrada ao Metrô Linha Verde)',
      'Fácil acesso à Av. Professor Luiz Ignácio Anhaia Mello e Salim Farah Maluf',
      'Próximo a hipermercados (Carrefour, Joanin, Roldão) e farmácias 24h',
      'Bairro residencial tranquilo com excelente qualidade de vida e crescimento'
    ],
    features: [
      'Condomínio clube com mais de 20 itens de lazer e esportes',
      'Complexo aquático com piscina adulto, infantil e deck molhado',
      'Quadra poliesportiva oficial e pista de caminhada arborizada',
      'Espaço Pet Care com agility e playground cercado',
      'Planta com integração total entre sala, cozinha e varanda'
    ]
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: 'piscina',
    title: 'Piscina de Borda Infinita & Raia',
    description: 'Com deck molhado, solarium panorâmico e climatização nas áreas aquáticas.',
    iconName: 'Waves',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rooftop',
    title: 'Rooftop Lounge & Espaço Gourmet',
    description: 'Vista deslumbrante no topo do edifício para receber amigos e família com sofisticação.',
    iconName: 'Utensils',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fitness',
    title: 'Academia & Cross Training',
    description: 'Equipada com tecnologia de ponta, espaço funcional, esteiras e sala multifuncional.',
    iconName: 'Dumbbell',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'coworking',
    title: 'Coworking & Salas de Reunião',
    description: 'Ambiente acústico preparado para home office, internet veloz e cabines privativas.',
    iconName: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pet',
    title: 'Espaço Pet Place & Agility',
    description: 'Área segura com grama natural e obstáculos para diversão e exercício do seu pet.',
    iconName: 'Heart',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kids',
    title: 'Brinquedoteca & Playground',
    description: 'Lazer e segurança infantil com pisos emborrachados e áreas temáticas lúdicas.',
    iconName: 'Smile',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80'
  }
];

export const NEARBY_POINTS: NearbyPoint[] = [
  { id: '1', place: 'Shopping Anália Franco & Parque Ceret', neighborhood: 'Tatuapé', distance: '1.2 km', time: '4 min de carro', category: 'lazer' },
  { id: '2', place: 'Estação de Metrô Tatuapé & Boulevard', neighborhood: 'Tatuapé', distance: '600m', time: '7 min a pé', category: 'transporte' },
  { id: '3', place: 'Clube Atlético Juventus & Rua Juventus', neighborhood: 'Mooca', distance: '450m', time: '5 min a pé', category: 'lazer' },
  { id: '4', place: 'Mooca Plaza Shopping & Av. Paes de Barros', neighborhood: 'Mooca', distance: '1.5 km', time: '5 min de carro', category: 'compras' },
  { id: '5', place: 'Estação São Lucas / Oratório (Linha 15 Prata)', neighborhood: 'Vila Ema', distance: '300m', time: '4 min a pé', category: 'transporte' },
  { id: '6', place: 'Carrefour & Centro Comercial Av. Vila Ema', neighborhood: 'Vila Ema', distance: '500m', time: '6 min a pé', category: 'compras' }
];

export const FAQS = [
  {
    question: 'Qual a diferença entre os links de formulário de cada localidade?',
    answer: 'Cada link é dedicado especificamente à campanha e equipe de corretores daquela região: Tatuapé (Link 1), Mooca (Link 2) e Vila Ema (Link 3). Ao preencher, você recebe a tabela de valores, plantas detalhadas e condições exclusivas daquele bairro específico.'
  },
  {
    question: 'Posso utilizar meu FGTS como entrada em qualquer um dos empreendimentos?',
    answer: 'Sim! As três localidades (Tatuapé, Mooca e Vila Ema) são enquadradas no Sistema Financeiro de Habitação (SFH) e aceitam a utilização do saldo do FGTS na composição da entrada ou amortização do saldo devedor.'
  },
  {
    question: 'Como funciona a entrada parcelada durante o período de obras?',
    answer: 'A entrada pode ser parcelada em até 36 meses diretamente com a construtora durante a fase de construção, com fluxo flexível e sem burocracia bancária durante as obras.'
  },
  {
    question: 'Como agendar uma visita aos apartamentos decorados no Tatuapé, Mooca ou Vila Ema?',
    answer: 'Basta clicar no botão "Tenho Interesse" correspondente ao bairro de seu interesse e preencher o formulário oficial. Nossa equipe de plantão entrará em contato para agendar seu horário VIP no showroom do decorado da localidade escolhida.'
  }
];
