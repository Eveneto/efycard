import news_thumb_1 from "../../public/assets/img/blog/artigo1.jpeg";
import news_thumb_2 from "../../public/assets/img/blog/artigo2.jpeg";
import news_thumb_3 from "../../public/assets/img/blog/artigo3.jpeg";
import { StaticImageData } from "next/image";

interface news_data_type {
    id: number;
    news_thumb: StaticImageData;
    title: string;
    news_blog: string;
}

const news_data: news_data_type[] = [
    {
        id: 1,
        news_thumb: news_thumb_1,  // Thumbnail 1
        title: "O que é o EfyCard e como ele pode transformar sua experiência de saúde?",
        news_blog: "Manter a saúde em dia vai muito além de tratar doenças quando elas surgem. A prevenção é a chave para uma vida longa e saudável, e os check-ups regulares desempenham um papel crucial nesse processo. O EfyCard é uma solução inovadora que oferece aos usuários acesso a consultas, exames e medicamentos com descontos, tornando o cuidado com a saúde mais acessível."
    },
    {
        id: 2,
        news_thumb: news_thumb_2,  // Thumbnail 2
        title: "Como o EfyCard Está Transformando a Experiência de Saúde",
        news_blog: "Com o EfyCard, você tem acesso a uma série de benefícios que incluem descontos em consultas e exames, promovendo um atendimento mais acessível e de qualidade. Este cartão também oferece uma rede de profissionais e serviços médicos qualificados, ajudando a garantir que você tenha acesso ao melhor cuidado possível quando necessário."
    },
    {
        id: 3,
        news_thumb: news_thumb_3,  // Thumbnail 3
        title: "Parceria com EfyCard: Como Funciona o Credenciamento",
        news_blog: "Este artigo explica os passos necessários para se tornar um parceiro do EfyCard, destacando os benefícios dessa parceria tanto para profissionais quanto para pacientes. O processo de credenciamento é simples e oferece aos médicos e clínicas a oportunidade de se conectar com mais pacientes, oferecendo um atendimento de alta qualidade com o suporte do EfyCard."
    }
]

export default news_data;
