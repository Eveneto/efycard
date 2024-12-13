import Image, { StaticImageData } from "next/image";

interface BlogDetailsAreaProps {
    news: {
        news_thumb: StaticImageData;
        title: string;
        news_blog: string;
        news_detail: string; // Agora aceitamos o novo campo de texto detalhado
    };
}

const BlogDetailsArea = ({ news }: BlogDetailsAreaProps) => {
    return (
        <section className="blog-area gray-bg pt-120 pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <article className="postbox post format-image mb-40">
                            <div className="postbox__thumb">
                                <Image src={news.news_thumb} alt={news.title} />
                            </div>
                            <div className="postbox__text potsbox_single">
                                <div className="post-meta mb-15">
                                    <span>
                                        <i className="far fa-calendar-check"></i> {/* Data pode ser adicionada */}
                                        2024
                                    </span>
                                    <span>
                                        <a href="#">
                                            <i className="far fa-user"></i> Autor 
                                        </a>
                                    </span>
                                </div>
                                <h3 className="blog-title">{news.title}</h3>
                                <div className="post-text mb-20">
                                    <p>{news.news_blog}</p> {/* Exibe o resumo ou intro */}
                                </div>
                                <div className="post-text-detail mb-40">
                                    <div dangerouslySetInnerHTML={{ __html: news.news_detail }} />
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetailsArea;
