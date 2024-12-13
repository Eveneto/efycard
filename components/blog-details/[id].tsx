"use client"
import { useSearchParams } from "next/navigation"; // Importa o hook correto para Server Components
import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import HeaderOne from "../layout/headers/header";
import FooterOne from "../layout/footers/FooterOne";
import BlogDetailsArea from "./BlogDetailsArea";
import news_data from "../data/news-data";

const BlogDetails = () => {
    const searchParams = useSearchParams();  // Hook para acessar os parâmetros da URL
    const id = searchParams.get('id');  // Obtém o valor de 'id' da URL

    if (!id) {
        return <p>Notícia não encontrada!</p>;  // Mensagem para IDs inválidos
    }

    const news = news_data.find(item => item.id === Number(id));  // Busca a notícia correspondente

    if (!news) {
        return <p>Notícia não encontrada!</p>;  // Mensagem para IDs inválidos
    }

    return (
        <>
            <HeaderOne />
            <main>
                <Breadcrumb top_title={news.title} title="Notícias" />
                <BlogDetailsArea news={news} /> {/* Passa os dados da notícia para o componente */}
            </main>
            <FooterOne />
        </>
    );
};

export default BlogDetails;
