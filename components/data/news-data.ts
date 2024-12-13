import news_thumb_1 from "../../public/assets/img/blog/artigo1.jpeg";
import news_thumb_2 from "../../public/assets/img/blog/artigo2.jpeg";
import news_thumb_3 from "../../public/assets/img/blog/artigo3.jpeg";
import { StaticImageData } from "next/image";

interface news_data_type {
    id: number;
    news_thumb: StaticImageData;
    title: string;
    news_blog: string;
    news_detail: string; // Este campo agora é obrigatório
    link: string;
}

const news_data: news_data_type[] = [
    {
        id: 1,
        news_thumb: news_thumb_1,  // Thumbnail 1
        title: "O que é o EfyCard e como ele pode transformar sua experiência de saúde?",
        news_blog: "Com ele, você pode usufruir de diversos benefícios, como descontos em consultas, exames, procedimentos e medicamentos, além de contar com um atendimento rápido e de qualidade.",
        news_detail: ` 
            <div class="info">
                <p class="article-text">
                    A saúde é um dos pilares mais importantes da nossa vida. Ter acesso a serviços médicos de qualidade, de forma rápida e acessível, é essencial para garantir o bem-estar e a tranquilidade de todos. Nesse cenário, o EfyCard surge como uma solução inovadora e eficaz para transformar sua experiência de saúde. Mas, afinal, o que é o EfyCard e como ele pode beneficiar você? Vamos explorar!
                </p>
                <h4 class="section-title">O que é o EfyCard?</h4>
                <p class="article-text">
                    O EfyCard é um cartão de saúde que proporciona acesso facilitado a uma ampla rede de serviços médicos e odontológicos. Com ele, você pode usufruir de diversos benefícios, como descontos em consultas, exames, procedimentos e medicamentos, além de contar com um atendimento rápido e de qualidade.
                </p>
                <h4 class="section-title">Como funciona o EfyCard?</h4>
                <p class="article-text">
                    A utilização do EfyCard é simples e prática. Após adquirir o cartão, você terá acesso a uma rede de parceiros credenciados, incluindo clínicas, laboratórios, hospitais e farmácias. Basta apresentar o seu EfyCard na recepção desses estabelecimentos para garantir os benefícios exclusivos oferecidos aos portadores do cartão.
                </p>
                <h4 class="section-title">Benefícios do EfyCard</h4>
                <ul class="benefits-list">
                    <li class="benefit-item"><strong>Economia em Serviços de Saúde:</strong> Um dos principais atrativos do EfyCard é a economia significativa que ele proporciona. Com descontos especiais em uma ampla gama de serviços médicos e odontológicos, o EfyCard torna o cuidado com a saúde mais acessível e menos oneroso.</li>
                    <li class="benefit-item"><strong>Rede Ampla e Qualificada de Parceiros:</strong> O EfyCard conta com uma vasta rede de parceiros qualificados, garantindo que você tenha acesso a serviços de alta qualidade.</li>
                    <li class="benefit-item"><strong>Facilidade e Comodidade:</strong> Esqueça as longas esperas e burocracias. Com o EfyCard, você pode agendar consultas e procedimentos de forma rápida e descomplicada.</li>
                    <li class="benefit-item"><strong>Variedade de Serviços:</strong> O EfyCard abrange uma ampla gama de especialidades médicas e serviços de saúde.</li>
                    <li class="benefit-item"><strong>Transparência e Credibilidade:</strong> O EfyCard preza pela transparência e pela qualidade do atendimento.</li>
                </ul>
                <h4 class="section-title">Como o EfyCard pode transformar sua experiência de saúde?</h4>
                <ul class="benefits-list">
                    <li class="benefit-item"><strong>Maior segurança financeira:</strong> Ao reduzir os custos com serviços de saúde, o EfyCard permite que você planeje melhor suas finanças e invista em um cuidado contínuo com sua saúde.</li>
                    <li class="benefit-item"><strong>Acesso rápido a especialistas:</strong> Com uma rede ampla de parceiros, você não precisará esperar longos períodos para conseguir uma consulta ou um exame.</li>
                    <li class="benefit-item"><strong>Qualidade no atendimento:</strong> Todos os parceiros do EfyCard são criteriosamente selecionados para garantir que você receba o melhor atendimento possível.</li>
                    <li class="benefit-item"><strong>Tranquilidade e bem-estar:</strong> Saber que você pode contar com o EfyCard em momentos de necessidade traz uma tranquilidade inestimável.</li>
                </ul>
                <p class="conclusion-text"><strong>Conclusão:</strong> O EfyCard é uma ferramenta poderosa que veio para transformar a experiência de saúde dos seus usuários. Oferecendo economia, praticidade e acesso a uma rede qualificada de serviços, o EfyCard é a escolha certa para quem deseja cuidar da saúde de forma eficiente e descomplicada. Não perca tempo e descubra como o EfyCard pode beneficiar você e sua família. Cuide da sua saúde com quem entende do assunto. Adquira já o seu EfyCard e comece a aproveitar todos esses benefícios!</p>
            </div>
        `,
        link: "/blog-details?id=1"
    },
    {
        id: 2,
        news_thumb: news_thumb_2,  // Thumbnail 2
        title: "Como o EfyCard Está Transformando a Experiência de Saúde",
        news_blog: "Este artigo irá guiá-lo passo a passo sobre como se credenciar como parceiro do EfyCard, destacando os benefícios e os requisitos necessários para fazer parte desta rede inovadora.",
        news_detail: ` 
            <div class="info">
                <h3 class="article-title">Como se Credenciar como Parceiro do EfyCard?</h3>
                <p class="article-text">
                    Se você é um profissional de saúde ou representa uma instituição médica que busca ampliar a base de pacientes e oferecer mais vantagens ao seu público, tornar-se um parceiro do EfyCard pode ser uma excelente oportunidade. Este artigo irá guiá-lo passo a passo sobre como se credenciar como parceiro do EfyCard, destacando os benefícios e os requisitos necessários para fazer parte desta rede inovadora.
                </p>
                <h4 class="section-title">Benefícios de Ser um Parceiro do EfyCard</h4>
                <ul class="benefits-list">
                    <li class="benefit-item"><strong>Aumento no Fluxo de Pacientes:</strong> Ao se tornar um parceiro do EfyCard, sua clínica ou consultório será acessível a um número maior de pacientes que buscam serviços de saúde de qualidade com benefícios exclusivos.</li>
                    <li class="benefit-item"><strong>Destaque e Visibilidade:</strong> O EfyCard promove seus parceiros em diversos canais de comunicação, incluindo o site oficial, redes sociais e campanhas de marketing. Isso aumenta a visibilidade do seu estabelecimento.</li>
                    <li class="benefit-item"><strong>Parceria com Credibilidade:</strong> Fazer parte da rede EfyCard é um selo de qualidade e confiança, que atrai pacientes que valorizam a excelência no atendimento.</li>
                    <li class="benefit-item"><strong>Facilidade na Administração:</strong> A parceria com o EfyCard inclui suporte na gestão de agendamentos e pagamentos, tornando a administração do seu serviço mais eficiente.</li>
                </ul>
                <h4 class="section-title">Passo a Passo para o Credenciamento</h4>
                <ul class="benefits-list">
                    <li class="benefit-item"><strong>Preencha o Formulário de Cadastro:</strong> Acesse o site oficial do EfyCard e procure pela seção "Seja um Parceiro". Lá, você encontrará um formulário de cadastro que deve ser preenchido com informações detalhadas sobre sua clínica, consultório ou estabelecimento de saúde.</li>
                    <li class="benefit-item"><strong>Envie Documentação Necessária:</strong> Após preencher o formulário, será necessário enviar alguns documentos para validação, como:
                        <ul>
                            <li>CNPJ da instituição ou CPF do profissional de saúde</li>
                            <li>Alvará de funcionamento</li>
                            <li>Certificações e credenciamentos relevantes</li>
                            <li>Currículo profissional e especializações dos médicos ou profissionais de saúde</li>
                        </ul>
                    </li>
                    <li class="benefit-item"><strong>Avaliação e Validação:</strong> A equipe do EfyCard analisará todas as informações e documentos enviados para garantir que todos os parceiros atendem aos padrões de qualidade exigidos. Esse processo pode levar alguns dias, mas é fundamental para garantir a excelência da rede.</li>
                    <li class="benefit-item"><strong>Assinatura do Contrato de Parceria:</strong> Após a validação, um contrato de parceria será enviado para formalizar a colaboração. Este contrato detalhará todos os termos e condições, incluindo os descontos a serem oferecidos aos usuários do EfyCard.</li>
                    <li class="benefit-item"><strong>Treinamento e Integração:</strong> Para garantir que sua equipe esteja preparada para atender os pacientes do EfyCard, um treinamento será oferecido. Este treinamento inclui orientações sobre o uso do sistema do EfyCard, procedimentos de agendamento e atendimento aos portadores do cartão.</li>
                    <li class="benefit-item"><strong>Divulgação e Marketing Conjunto:</strong> Uma vez credenciado, seu estabelecimento será incluído na rede de parceiros do EfyCard. Será realizada uma divulgação em nossos canais de comunicação para informar os usuários sobre a nova parceria. Além disso, materiais promocionais serão disponibilizados para que você também possa divulgar a parceria em seu próprio espaço e mídias.</li>
                </ul>
                <h4 class="section-title">Requisitos para Ser um Parceiro</h4>
                <ul class="benefits-list">
                    <li class="benefit-item"><strong>Qualidade no Atendimento:</strong> O EfyCard prioriza parceiros que oferecem um atendimento de alta qualidade, com profissionais capacitados e infraestrutura adequada.</li>
                    <li class="benefit-item"><strong>Transparência e Ética:</strong> Todos os parceiros devem agir com transparência e ética, garantindo um relacionamento de confiança com os pacientes e com a administração do EfyCard.</li>
                    <li class="benefit-item"><strong>Adesão aos Benefícios:</strong> Os parceiros devem estar dispostos a oferecer os descontos e benefícios acordados no contrato para todos os usuários do EfyCard.</li>
                </ul>
                <p class="conclusion-text"><strong>Conclusão:</strong> Ser um parceiro do EfyCard é uma oportunidade única de crescer junto com uma rede inovadora que valoriza a saúde e o bem-estar dos seus usuários. O processo de credenciamento é simples, mas rigoroso, garantindo que apenas os melhores estabelecimentos façam parte dessa rede. Se você deseja aumentar sua base de pacientes, melhorar a visibilidade do seu serviço e contribuir para uma saúde de qualidade, não perca tempo e se credencie já como parceiro do EfyCard. Juntos, podemos transformar a experiência de saúde de muitas pessoas!</p>
            </div>
        `,
        link: "/blog-details?id=2"
    },
    {
        id: 3,
        news_thumb: news_thumb_3,  // Thumbnail 3
        title: "Parceria com o EfyCard: Como Maximizar seus Benefícios",
        news_blog: "Neste artigo, vamos explorar como maximizar os benefícios ao se tornar parceiro do EfyCard.",
        news_detail: ` 
            <div class="info">
                <h3 class="article-title">Parceria com o EfyCard: Como Maximizar seus Benefícios</h3>
                <p class="article-text">
                    O EfyCard não é apenas um cartão de saúde, é uma oportunidade para clínicas, hospitais e consultórios aumentarem sua visibilidade e atrair mais pacientes. Mas como maximizar os benefícios de ser um parceiro do EfyCard? Neste artigo, vamos explorar algumas dicas valiosas para garantir que você aproveite ao máximo essa parceria.
                </p>
                <h4 class="section-title">1. Use as Ferramentas de Marketing do EfyCard</h4>
                <p class="article-text">
                    O EfyCard oferece várias ferramentas de marketing para seus parceiros, como banners digitais, posts em redes sociais e materiais impressos. Ao utilizá-las, você pode aumentar significativamente a visibilidade de sua clínica e atrair novos pacientes que estão em busca de benefícios exclusivos.
                </p>
                <h4 class="section-title">2. Ofereça Descontos Atraentes</h4>
                <p class="article-text">
                    Quanto mais atrativos forem os seus descontos para os portadores do EfyCard, maior será a demanda pelos seus serviços. Pense estrategicamente sobre quais serviços podem ser oferecidos com desconto para atrair mais pacientes.</p>
            </div>
        `,
        link: "/blog-details?id=3"
    }
];


export default news_data;
