
import { Church, Event, MediaItem, NavItem, Testimonial } from './types';

import imgAbraao from './image/Bispo Abraão do conselho.jpeg';
import imgHaylton from './image/Pastor Haylton.jpeg';
import imgCelso from './image/Pastor Celso.jpeg';
import imgGil from './image/Pastor Gil.jpeg';
import imgInaldo from './image/inaldo_silva.png';
import imgSedeCover from './image/sede_cover.jpg';
import imgPalavraViva from './image/palavra_viva_cover.jpg';
import imgVicentina from './image/pra_vicentina.png';
import imgAliancaCover from './image/alianca_com_cristo_cover.png';
import imgPastoresEleJustica from "./image/logo.jpeg"; // Placeholder: pastores_ele_e_justica_final.png missing
import imgEleJusticaCover from "./image/ele_e_justica_cover.png";
import imgMilagreCover from "./image/milagre_vai_acontecer_cover.png";
import imgFilhosDaFeCover from "./image/filhos_da_fe_cover.png";
import imgUltimaPalavra from "./image/ultima_palavra_cover.jpg";
import imgPortasAberta from "./image/portas_aberta_cover_v2.jpg";
import imgPrVanilson from "./image/pr_vanilson_v2.jpg";
import imgApostoloJorge from "./image/apostolo_jorge_neves.png";
import imgDeusProveraLogo from "./image/deus_provera_logo.jpg";
import imgPastorAlonso from "./image/pastor_alonso_farias.png";
import imgBispoHudson from "./image/bispo_hudsom.jpg";
import imgPastorAlianca from './image/pastor_alianca_final.png';
import imgFeedCafeaGroup from './image/feed_cafea_group.png';
import imgFeedCafeaGroupRed from './image/feed_cafea_group_red.jpg';
import imgFeedCommunion from './image/feed_cafea_communion.png';
import imgUltimaPalavraV2 from "./image/ultima_palavra_cover_v2.png";


export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Igrejas', href: '#igrejas' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Mídias', href: '#midias' },
  { label: 'A Convenção', href: '#sobre' },
];

export const CHURCHES: Church[] = [
  {
    id: 'sede-sp',
    name: 'Cafea Sede', // Adjusted name slightly as it seems to be the main HQ now in Realengo? Keeping ID 'sede-sp' but updating details.
    city: 'Rio de Janeiro', // Realengo is in RJ
    state: 'RJ',
    address: 'Estrada de Gericinó 860 Bangu CEP 21 853-000',
    banner: imgSedeCover,
    whatsapp: '5521987974780',
    instagram: '@cafeasede',
    facebook: 'bispo Osvaldo',
    tiktok: 'bispo Osvaldo',
    kwai: 'bispo Osvaldo',
    pastors: [
      {
        name: 'Apóstolo Osvaldo Gregório dos Santos',
        role: 'Pastor Presidente',
        bio: 'Presidência da Convenção CAFEA.',
        image: imgAbraao
      },
      {
        name: 'Pastor Haylton',
        role: 'Pastor Titular',
        bio: 'Dedicado ao ensino e pastoreio.',
        image: imgHaylton
      },
      {
        name: 'Pastor Celso',
        role: 'Convidado',
        bio: 'Pastor Regional do Rio de Janeiro.',
        image: imgCelso
      },
      {
        name: 'Pastor Gil',
        role: 'Convidado',
        bio: 'Pastor Titular de Curitiba.',
        image: imgGil
      },
      {
        name: 'Vereador Inaldo Silva',
        role: 'Convidado Especial',
        bio: 'Convidado pelo Apóstolo Osvaldo.',
        image: imgInaldo
      }
    ],
    schedule: [

      { day: 'Sexta', time: '19h30', label: 'Culto de Libertação' },
      { day: 'Domingo', time: '19h30', label: 'Culto da Família' }
    ]
  },
  {
    id: 'palavra-viva',
    name: 'Igreja Pentecostal Palavra Viva',
    city: 'Rio de Janeiro',
    state: 'RJ',
    address: 'Rua Baião, 88 - Realengo',
    banner: imgPalavraViva,
    whatsapp: '5521999999999',
    instagram: '@palavraviva',
    pastors: [
      {
        name: 'Pra. Pres. Vicentina Maria',
        role: 'Pastora Presidente',
        bio: 'Liderando com amor e fé.',
        image: imgVicentina
      }
    ],
    schedule: [

      { day: 'Quinta', time: '19h30', label: 'Culto de Doutrina' },
      { day: 'Domingo', time: '19h30', label: 'Culto da Família' }
    ]
  },
  {
    id: 'obra-restauracao',
    name: 'Obra da Restauração - Filhos da Fé',
    city: 'Rio de Janeiro',
    state: 'RJ',
    address: 'Rua Carlos Barbosa, 25 - Paciência',
    banner: imgFilhosDaFeCover,
    whatsapp: '5500000000000',
    instagram: '@filhosdafe',
    pastors: [
      {
        name: 'Bispo Hudson',
        role: 'Pastor Presidente',
        bio: 'Restaurando vidas pela fé.',
        image: imgBispoHudson
      }
    ],
    schedule: [
      { day: 'Terça', time: '19h30', label: 'Culto de Libertação' },
      { day: 'Quinta', time: '19h30', label: 'Culto da Vitória' },
      { day: 'Domingo', time: '15h', label: 'Consagração' }
    ]
  },
  {
    id: 'ad-ultima-palavra',
    name: 'Assembleia de Deus Ministério A Última Palavra',
    city: 'Rio de Janeiro', // Presumed based on context
    state: 'RJ',
    address: 'Endereço a confirmar',
    banner: imgUltimaPalavraV2,
    whatsapp: '5500000000000',
    instagram: '@adultimapalavra',
    pastors: [
      {
        name: 'Pastor Haylton',
        role: 'Pastor Presidente',
        bio: 'Só Jesus Cristo: Liberta, Cura e Dá a Salvação.',
        image: imgHaylton
      }
    ],
    schedule: [
      { day: 'Terça', time: '19h', label: 'Doutrina' },
      { day: 'Quinta', time: '19h', label: 'Libertação e Cura Divina' },
      { day: 'Sexta', time: '09h', label: 'Consagração' },
      { day: 'Domingo', time: '19h', label: 'Culto de Adoração ao Senhor' }
    ]
  },
  {
    id: 'alianca-com-cristo',
    name: 'Igreja Evangélica Aliança com Cristo',
    city: 'Rio de Janeiro',
    state: 'RJ',
    address: 'Rua Gutmann Bicho, 355, frente Tingui - Campo Grande',
    banner: imgAliancaCover,
    bannerFit: 'contain',
    whatsapp: '5500000000000',
    instagram: '@aliancacomcristo',
    pastors: [
      {
        name: 'Apóstolo Jorge Neves',
        role: 'Pastor Responsável',
        bio: '"JESUS": Caminho, Verdade e Vida.',
        image: imgApostoloJorge
      }
    ],
    schedule: [
      { day: 'Quarta', time: '09h', label: 'Consagração (09h-11h)' },
      { day: 'Sexta', time: '19h30', label: 'Libertação (19h30-21h30)' },
      { day: 'Domingo', time: '19h', label: 'Culto da Família (19h-21h)' }
    ]
  },
  {
    id: 'ele-e-justica',
    name: 'Igreja Pentecostal Ele é Justiça',
    city: 'Rio de Janeiro',
    state: 'RJ',
    address: 'Av. Joaquim Magalhães - Senador Vasconcelos',
    banner: imgEleJusticaCover,
    whatsapp: '5500000000000',
    instagram: '@eleejustica',
    pastors: [
      {
        name: 'Pastor Marcos',
        role: 'Pastor Presidente',
        bio: 'Vivendo a justiça de Deus.',
        image: imgPastorAlianca
      }
    ],
    schedule: [
      { day: 'Terça', time: '19h', label: 'Culto da Família (19h-21h30)' },
      { day: 'Sexta', time: '19h', label: 'Culto de Libertação (19h-21h30)' },
      { day: 'Sábado', time: '15h', label: 'Culto de Consagração (15h-17h30)' },
      { day: 'Domingo', time: '17h', label: 'Escola Bíblica Dominical (17h-18h30)' },
      { day: 'Domingo', time: '19h', label: 'Culto de Louvor e Adoração (19h-21h30)' }
    ]
  },
  {
    id: 'ad-milagre-vai-acontecer',
    name: 'Assembleia de Deus Ministério O Milagre Vai Acontecer',
    city: 'Rio de Janeiro',
    state: 'RJ',
    address: 'Rua Sarapui, 61 - Fundos, Bairro: Catiri / Bangu',
    banner: imgMilagreCover,
    whatsapp: '5500000000000',
    instagram: '@milagrevaiacontecer',
    pastors: [
      {
        name: 'Bispo Abraão',
        role: 'Liderança',
        bio: 'O milagre vai acontecer na sua vida.',
        image: imgAbraao
      }
    ],
    schedule: [
      { day: 'Terça', time: '20h', label: 'Oração (20h-21h)' },
      { day: 'Quarta', time: '19h', label: 'Doutrina (19h-21h)' },
      { day: 'Sábado', time: '19h', label: 'Libertação (19h-21h)' },
      { day: 'Domingo', time: '19h', label: 'Adoração (19h-21h)' }
    ]
  },
  {
    id: 'portas-aberta',
    name: 'Igreja Pentecostal Portas Aberta',
    city: 'Rio de Janeiro',
    state: 'RJ',
    address: 'Rua Dos Abieros, 427 - LT 2 - Santíssimo',
    banner: imgPortasAberta,
    bannerFit: 'fill',
    whatsapp: '5521974847246',
    instagram: '', // Not provided
    pastors: [
      {
        name: 'Pr. Pres. Vanilson Macedo',
        role: 'Pastor Presidente',
        bio: 'Portas abertas para a salvação.',
        image: imgPrVanilson
      }
    ],
    schedule: [
      { day: 'Terça', time: '19h30', label: 'Culto da Família' },
      { day: 'Quinta', time: '19h30', label: 'Culto de Libertação' },
      { day: 'Sábado', time: '09h30', label: 'Culto de Consagração' },
      { day: 'Domingo', time: '19h', label: 'Louvor e Adoração' }
    ]
  },
  {
    id: 'deus-provera-milagres',
    name: 'Assembleia de Deus Pentecostal Deus Proverá Milagres',
    city: 'Tianguá',
    state: 'CE',
    address: 'Endereço a confirmar',
    banner: imgDeusProveraLogo,
    bannerFit: 'contain',
    whatsapp: '5500000000000',
    instagram: '',
    pastors: [
      {
        name: 'Pastor Alonso Farias',
        role: 'Pastor Presidente',
        bio: 'Deus proverá grandes milagres.',
        image: imgPastorAlonso
      }
    ],
    schedule: [
      { day: 'Terça', time: '19h30', label: 'Culto de Doutrina' },
      { day: 'Quinta', time: '19h30', label: 'Culto de Vitória' },
      { day: 'Domingo', time: '19h', label: 'Culto da Família' }
    ]
  },
  {
    id: 'ad-profetizando-no-vale',
    name: 'Assembleia de Deus Ministério Profetizando no Vale',
    city: 'Rio de Janeiro',
    state: 'RJ',
    address: 'Endereço a confirmar',
    banner: imgSedeCover, // Placeholder
    bannerFit: 'cover',
    whatsapp: '5500000000000',
    instagram: '',
    pastors: [
      {
        name: 'Pastor Hamilton Ferreira',
        role: 'Pastor Presidente',
        bio: 'Vivendo as promessas de Deus.',
        image: imgAbraao // Placeholder
      }
    ],
    schedule: [
      { day: 'Terça', time: '19h30', label: 'Culto de Doutrina' },
      { day: 'Quinta', time: '19h30', label: 'Culto de Vitória' },
      { day: 'Domingo', time: '19h', label: 'Culto da Família' }
    ]
  }
];

export const EVENTS: Event[] = [
  { id: 1, title: 'Reunião da Convenção CAFEA', date: '20/12/2025', location: 'Rua Baião, 88 - Realengo', type: 'Reunião Oficial' },
  { id: 2, title: 'Conferência de Pastores', date: '02/11/2024', location: 'Rio de Janeiro', type: 'Conferência' },
  { id: 3, title: 'Noite do Café & Oração', date: 'Sexta-feira', location: 'Todas as unidades', type: 'Culto Especial' }
];

export const MEDIA_FEED: MediaItem[] = [
  { id: 1, type: 'image', url: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=500&q=80', churchName: 'Sede SP', caption: 'Culto de domingo abençoado!' },
  { id: 2, type: 'image', url: 'https://images.unsplash.com/photo-1510511233900-1982d92bd835?auto=format&fit=crop&w=500&q=80', churchName: 'Curitiba', caption: 'Momento de comunhão na mesa.' },
  { id: 3, type: 'image', url: imgFeedCommunion, churchName: 'RJ', caption: 'Santa Ceia do Senhor.' },
  { id: 4, type: 'image', url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=80', churchName: 'Convenção', caption: 'O aroma do recomeço.' },
  { id: 5, type: 'image', url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80', churchName: 'Sede SP', caption: 'Liderança reunida.' },
  { id: 6, type: 'image', url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80', churchName: 'Mídias', caption: 'Treinamento de som e imagem.' },
  { id: 7, type: 'image', url: imgFeedCafeaGroup, churchName: 'Convenção', caption: 'Grupo reunido em comunhão.' },
  { id: 8, type: 'image', url: imgFeedCafeaGroupRed, churchName: 'Eventos', caption: 'União e fé nas festividades.' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Membro da Convenção',
    role: 'Fiel',
    content: 'A minha vida mudou depois que conhecir a convenção cafea..aprendir a consagrar..batizar..ter horário para iniciar..e ter horário para terminar..enfim..obrigado bispo Abraão e apóstolo Oswaldo e família convenção cafea',
    rating: 5
  }
];
