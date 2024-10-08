import { Angular, AstroIcon, Aws, Bootstrap, Django, Docker, ExpressIcon, FastApi, 
    Figma, Flask, Flutter, Git, IconSkill, Java, Javascript, Mongo, MySql, NodeJs, PostgreSQL, 
    Postman, Python, React, Rive, Selenium, SQLite, Tailwind, Typescript } 
    from "@src/components/icons/index"

import GenHoraCapture from "@public/assets/captures/capture_genhora.webp";
import MyPdfToolkitCapture from "@public/assets/captures/capture_pdf.webp";
import MyPortfolioCapture from "@public/assets/captures/catpure_portfolio.webp";
import TechstoreCapture from "@public/assets/captures/capture_techstore.png";
import RealAltoCapture from "@public/assets/captures/capture_real_alto_app.webp";

export const englishProjects = [
    {image:MyPdfToolkitCapture.src, title:"My PDF Toolkit", 
        description:"Application for PDF manipulation", 
        website:"https://mmgkxuq3hr.us-east-1.awsapprunner.com/", 
        repository:"https://github.com/francisdayl/my_pdf_toolkit",
        technologies:[Python,Flask,Aws,Docker,Bootstrap,Git]
    },
    {image:GenHoraCapture.src, title:"GenHora", 
        description:"Program that allows to generate all possible schedules based on student/user preferences. The schedules are saved on excel files", 
        website:"", 
        repository:"https://github.com/francisdayl/GenHora",
        technologies:[Python,Selenium,Git]
    },
    {image:TechstoreCapture.src, title:"TechStore", 
        description:"Technical test consisting on a Full Stack application with CRUD operations.", 
        website:"", 
        repository:"https://github.com/francisdayl/prueba_tecnica_royaltic",
        technologies:[Angular,Django,MySql,Python,Typescript,Docker,Git]
    },
    {image:RealAltoCapture.src, title:"Real Alto App", 
        description:"Augmented reality mobile app for the Real Alto museum", 
        website:"",
        repository:"",
        video: "https://youtu.be/2grFiHItiJ0",
        technologies:[Flutter,Git]
    },
    {image:MyPortfolioCapture.src, title:"Portfolio", 
        description:"Web Portfolio showcasing profile and skillset", 
        website:"", 
        repository:"https://github.com/francisdayl/portfolio",
        technologies:[AstroIcon,Tailwind,Aws,Git]
    },
]
