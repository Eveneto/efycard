import Link from "next/link";


const social_links = [
  {
    link: "", // Adicione o link do Instagram aqui
    target: "_blank",
    icon: "fab fa-instagram",
  },
  {
    link: "", // Adicione o link do WhatsApp aqui
    target: "_blank",
    icon: "fab fa-whatsapp",
  },
];


const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <a
          key={i}
          href={l.link} 
          target={l.target ? l.target : ""}
        >
          <i className={l.icon}></i>
        </a>
      ))}
    </>
  );
};

export default SocialLinks;






const copy_right_text = { 
  copy_right: <>Copyright © {new Date().getFullYear()} Efycard por <a href="#" target="_blank">Ser Digital</a>. Todos os Direitos Reservados.</>,
}
const {copy_right}  = copy_right_text

export const CopyRight = ()  => {
  return (
    <>
    {copy_right}
    </>
  )
}




// home 04 social link
const social_links_two = [
  {
    link: "https://www.facebook.com/themepure.net",
    target: "_blank",
    icon: "fab fa-facebook-f",
    color: "1", 
  },
  {
      link: "https://www.instagram.com",
      target: "_blank",
      icon: "fab fa-instagram", 
      color: "2",
  },

  {
    link: "https://twitter.com/themepure_net",
    target: "_blank",
    icon: "fab fa-twitter", 
    color: "3",
  },
  {
    link: "https://www.linkedin.com/in/theme-pure-2a276518b/?originalSubdomain=bd",
    target: "_blank",
    icon: "fab fa-linkedin-in",
    color: "4", 
  }, 
];

export const  SocialLinksTwo = ()  => {
   return (
     <>
        {social_links_two.map((link, i) => (
          <Link
            key={i}
            target={link.target}
            className={`icon-color-${link.color}`}
            href={link.link}
          >
            <i className={link.icon}></i>
            <span></span>
          </Link>
        ))}
     </>
   );
}