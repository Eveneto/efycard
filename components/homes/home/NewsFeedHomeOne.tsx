import Link from "next/link";
import Image from "next/image";
import news_data from "../../data/news-data";
import line_img from "../../../public/assets/img/icon/line.png";

const NewsFeedHomeOne = () => {
    return (
        <>
            <section className="news-feed-area pt-115 pb-115">
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="section-title text-center mb-70">
                                <h2>Transforme Sua Saúde com o EfyCard</h2>
                                <p style={{ color: "black" }}>
                                    Descubra como o EfyCard pode revolucionar sua experiência de saúde, oferecendo economia, qualidade e conveniência em um só cartão. Acesse nosso blog e conheça todos os benefícios que você e sua família podem aproveitar!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {news_data.map((item, i) => (
                            <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                                <div className="latest-feed mb-45 wow fadeInUp animated" data-wow-delay="0.3s">
                                    <div className="news-feed-img">
                                        <Link href={item.link} target="_blank">
                                            <Image src={item.news_thumb} alt="theme-pure" />
                                        </Link>
                                    </div>
                                    <div className="news-feed-info">
                                        <div className="news-feed-titles">
                                            <h4>
                                                <Link href={item.link} target="_blank">
                                                    {item.title}
                                                </Link>
                                            </h4>
                                            <p style={{ color: "#666666" }}>{item.news_blog}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row mt-60">
                        <div className="col-md-12">
                            <div className="news-feed-bottom-img">
                                <Image src={line_img} alt="theme-pure" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsFeedHomeOne;
