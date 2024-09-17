import { Angular, AstroIcon, Aws, Bootstrap, Django, Docker, ExpressIcon, FastApi, 
    Figma, Flask, Flutter, Git, IconSkill, Java, Javascript, Mongo, MySql, NodeJs, PostgreSQL, 
    Postman, Python, React, Rive, Selenium, SQLite, Tailwind, Typescript } 
    from "@src/components/icons/index"

import GenHoraCapture from "@public/assets/captures/capture_genhora.webp";
import MyPdfToolkitCapture from "@public/assets/captures/capture_pdf.webp";
import MyPortfolioCapture from "@public/assets/captures/catpure_portfolio.webp";
import TechstoreCapture from "@public/assets/captures/capture_techstore.png";

export const spanishProjects = [
    {image:MyPdfToolkitCapture.src,
        title:"My PDF Toolkit", 
        description:"Aplicación web para manipular PDF", 
        website:"https://mmgkxuq3hr.us-east-1.awsapprunner.com/", 
        repository:"https://github.com/francisdayl/my_pdf_toolkit",
        technologies:[Python,Flask,Aws,Docker,Bootstrap,Git]
    },
    {image:GenHoraCapture.src, title:"GenHora", 
        description:"Programa que permite generar todos los horarios posibles basados en las preferencias del estudiante/usuario. Los horarios son guardados en archivos excel.", 
        website:"", 
        repository:"https://github.com/francisdayl/GenHora",
        technologies:[Python,Selenium,Git]
    },
    {image:TechstoreCapture.src, title:"TechStore", 
        description:"Prueba técnica que consiste en un aplicación web Full Stack con operaciones CRUD.", 
        website:"", 
        repository:"https://github.com/francisdayl/prueba_tecnica_royaltic",
        technologies:[Angular,Django,MySql,Python,Typescript,Docker,Git]
    },
    {image:MyPortfolioCapture.src, title:"Portfolio", 
        description:"Portafolio web para mostrar mi perfil y habilidades", 
        website:"", 
        repository:"https://github.com/francisdayl/portfolio",
        technologies:[AstroIcon,Tailwind,Aws,Git]
    },
]
