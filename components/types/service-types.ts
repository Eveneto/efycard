import { StaticImageData } from "next/image";


interface services_data_type {
    id: number;
    img: StaticImageData;
    title: string;
    sm_des: string   // Permite tanto string quanto JSX Element

}

export default services_data_type

 