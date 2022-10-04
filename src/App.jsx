import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import EmpleadoList from './components/EmpleadoList';
import { useState } from "react";


function App() {
  const empleados= [{
    id: 1,
    fullName: "Laya Dueñas",
    title: "CEO",
    department: "Business",
    pic: "https://media.istockphoto.com/photos/young-support-woman-cute-iconic-character-3d-rendering-picture-id1389898060?k=20&m=1389898060&s=612x612&w=0&h=1ZeTF5ruWDtOMbsiFiveHqjVwU8ltFGoXusdCkw8YW4=",
  },
  {
    id: 2,
    fullName: "Astryd Vallés",
    title: "CMO",
    department: "Marketing",
    pic: "https://media.istockphoto.com/photos/cute-girl-iconic-character-with-glasses-3d-rendering-picture-id1389898237?k=20&m=1389898237&s=612x612&w=0&h=lx_TV7J4KzPBoLB_xu888NwkprTT4qRl9l1Ap6u6mAQ=",
  },
  {
    id: 3,
    fullName: "Shantell Meza",
    title: "CFO",
    department: "Business",
    pic: "https://media.istockphoto.com/photos/young-adult-woman-cute-iconic-character-3d-rendering-picture-id1389898187?s=612x612",
  },
  {
    id: 4,
    fullName: "Sergio Ocampo",
    title: "CTO",
    department: "Engineering",
    pic: "https://media.istockphoto.com/photos/hairless-bearded-man-cute-iconic-character-3d-rendering-picture-id1389898138?k=20&m=1389898138&s=612x612&w=0&h=4Xq3UXfQmiFOz_JYgVgjtn7VKbXMqIknuvYntdjSWDg=",
  },
  {
    id: 5,
    fullName: "Ares Jiménez",
    title: "Art Director",
    department: "Marketing",
    pic: "https://media.istockphoto.com/photos/young-woman-chewing-gum-cute-iconic-character-3d-rendering-picture-id1389898125?s=612x612",
  },
  {
    id: 6,
    fullName: "Marta Pérez",
    title: "Frontend Dev",
    department: "Engineering",
    pic: "https://media.istockphoto.com/photos/young-support-woman-cute-iconic-character-3d-rendering-picture-id1389898060?k=20&m=1389898060&s=612x612&w=0&h=1ZeTF5ruWDtOMbsiFiveHqjVwU8ltFGoXusdCkw8YW4=",
  },
  {
    id: 7,
    fullName: "Ellen Balderas",
    title: "Digital Strategist",
    department: "Marketing",
    pic: "https://media.istockphoto.com/photos/cute-girl-iconic-character-with-glasses-3d-rendering-picture-id1389898237?k=20&m=1389898237&s=612x612&w=0&h=lx_TV7J4KzPBoLB_xu888NwkprTT4qRl9l1Ap6u6mAQ=",
  },
  {
    id: 8,
    fullName: "Cynthia Valentín",
    title: "Backend Dev",
    department: "Engineering",
    pic: "https://media.istockphoto.com/photos/young-adult-woman-cute-iconic-character-3d-rendering-picture-id1389898187?s=612x612",
  },
  {
    id: 9,
    fullName: "Bernard Jung",
    title: "DevOps Engineer",
    department: "Engineering",
    pic: "https://media.istockphoto.com/photos/hairless-bearded-man-cute-iconic-character-3d-rendering-picture-id1389898138?k=20&m=1389898138&s=612x612&w=0&h=4Xq3UXfQmiFOz_JYgVgjtn7VKbXMqIknuvYntdjSWDg=",
  },
  
  ]
  return (
    <Container>
               {
    empleados.map((empleados)=><EmpleadoList key={empleados.id} fullName={empleados.fullName} title={empleados.title} department={empleados.department} pic={empleados.pic}  />)
    }
    </Container>
  );
}

export default App;
