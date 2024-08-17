import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import NuevoVideo from "./Pages/NuevoVideo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import EditarVideo from "./Components/EditCards";

const cards = [
  {
    id: 1,
    generoPelicula: "ACCIÓN",
    titulo: "VENGANZA SILENCIOSA",
    linkVideo: "https://www.youtube.com/watch?v=w4GDNK0QYcA",
    urlImg:
      "https://m.media-amazon.com/images/S/pv-target-images/eea5ede031aeadac35a6edb0f04f2bcdc272a90ffa653afd6efcbab17f765c1a.jpg",
  },
  {
    id: 11,
    generoPelicula: "ACCIÓN",
    titulo: "RED ONE",
    linkVideo: "https://www.youtube.com/watch?v=mFQ5AjUUQcU",
    urlImg: "https://i.ytimg.com/vi/kZnd055HO70/maxresdefault.jpg",
  },
  {
    id: 111,
    generoPelicula: "ACCIÓN",
    titulo: "AMBULANCE - PLAN DE HUIDA",
    linkVideo: "https://www.youtube.com/watch?v=o8LGXCQXEwY",
    urlImg:
      "https://www.lascosasquenoshacenfelices.com/wp-content/uploads/2022/04/concurso-ambulance-plan-huida_98-e1650546517293.jpg",
  },
  {
    id: 2,
    generoPelicula: "COMEDIA",
    titulo: "EL REY DEL BARRIO",
    linkVideo: "https://www.youtube.com/watch?v=plOG1RuKJqc",
    urlImg:
      "https://www.nochedecine.com/wp-content/uploads/2020/09/nt_20_El-rey-del-barrio-destacada.jpg",
  },
  {
    id: 22,
    generoPelicula: "COMEDIA",
    titulo: "RICKY STANICKY: EL IMPOSTOR",
    linkVideo: "https://www.youtube.com/watch?v=7DJDQcHNcR0",
    urlImg:
      "https://i0.wp.com/portalgeek.co/wp-content/uploads/2024/01/el-impostor.jpg?fit=1029%2C545&ssl=1",
  },
  {
    id: 222,
    generoPelicula: "COMEDIA",
    titulo: "EL OTRO GUARDAESPALDAS",
    linkVideo: "https://www.youtube.com/watch?v=itWr1vz1zOo",
    urlImg:
      "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/el-otro-guardaespaldas/135276593-5-esl-ES/El-otro-guardaespaldas.jpg?crop=1xw:0.521875xh;center,top&resize=1200:*",
  },
  {
    id: 2222,
    generoPelicula: "COMEDIA",
    titulo: "MI PAPÁ ES UN PELIGRO",
    linkVideo: "https://www.youtube.com/watch?v=f1mX-bf5qkA",
    urlImg: "https://i.ytimg.com/vi/w-T62IHt_gM/maxresdefault.jpg",
  },
  {
    id: 3,
    generoPelicula: "SUPÉRHEROES",
    titulo: "DEADPOOL & WOLVERINE",
    linkVideo: "https://www.youtube.com/watch?v=BRGBYU7iW1g&t=15s",
    urlImg:
      "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/04/deadpool-lobezno-2024-3299530.jpg?tf=3840x",
  },
  {
    id: 33,
    generoPelicula: "SUPÉRHEROES",
    titulo: "CAPITÁN AMÉRICA: UN NUEVO MUNDO",
    linkVideo: "https://www.youtube.com/watch?v=i0zaDSsk08w",
    urlImg:
      "https://media.vandalsports.com/i/640x360/12-2023/20231214105416_1.jpg",
  },
  {
    id: 4,
    generoPelicula: "ROMANTICA",
    titulo: "THE RIGHT ONE",
    linkVideo: "https://www.youtube.com/watch?v=KyAYPOvUO1c",
    urlImg:
      "https://m.media-amazon.com/images/S/pv-target-images/51850abd2bbd1e6d21674905342d8d4b2dc3969317bacc81b5f5682f4d01171a.jpg",
  },
  {
    id: 44,
    generoPelicula: "ROMANTICA",
    titulo: "IMPERDONABLE",
    linkVideo: "https://www.youtube.com/watch?v=Eoe4dlj5ZBM",
    urlImg:
      "https://i.ytimg.com/vi/Eoe4dlj5ZBM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDkqkF5Sm7HUwTeqNOy7pHnXTi64w",
  },
  {
    id: 444,
    generoPelicula: "ROMANTICA",
    titulo: "TRUST (CONFIANZA)",
    linkVideo: "https://www.youtube.com/watch?v=OLWRDYySgcY",
    urlImg:
      "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVbpPd116_Mt6JrNAlWsnS8DKjtSN7Fez5CC1xqWLtwc-c-85Wyq7XtI_JPNKK2TY4kVCLVqM39sBHbMB-8VWw6YYXjw6fhY4oGd.jpg?r=c77",
  },
  {
    id: 5,
    generoPelicula: "TERROR",
    titulo: "INMACULADA",
    linkVideo: "https://www.youtube.com/watch?v=1lz5tE0Mkh0",
    urlImg:
      "https://tn.com.ar/resizer/jObYdsODcwDopZ-84E2olyzLwyM=/1440x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/LVGQ2CDFPFAGZHPLKIHVZGTBUA.jpg",
  },
  {
    id: 555,
    generoPelicula: "TERROR",
    titulo: "EL CONJURO 4",
    linkVideo: "https://www.youtube.com/watch?v=dr9bnUkjyWw",
    urlImg: "https://i.ytimg.com/vi/dr9bnUkjyWw/maxresdefault.jpg",
  },
  {
    id: 6,
    generoPelicula: "MUSICALES",
    titulo: "LA LA LAND",
    linkVideo: "https://www.youtube.com/watch?v=0pdqf4P9MB8",
    urlImg:
      "https://chajarialdia.com.ar/wp-content/uploads/2023/01/screen-shot-2016-11-17-at-3-25-50-pm.png",
  },
  {
    id: 66,
    generoPelicula: "MUSICALES",
    titulo: "WICKED",
    linkVideo: "https://www.youtube.com/watch?v=6COmYeLsz4c",
    urlImg: "https://i.ytimg.com/vi/YZy2hnJc0b8/maxresdefault.jpg",
  },
  {
    id: 777,
    generoPelicula: "CIENCIA FICCIÓN",
    titulo: "GÉMINIS",
    linkVideo: "https://www.youtube.com/watch?v=IGPukyWo9vY",
    urlImg:
      "https://media.c5n.com/p/a891b780031a7abe5eaec8edcac1697c/adjuntos/326/imagenes/000/223/0000223583/1200x675/smart/geminis-netflix-1jpg.jpg",
  },
  {
    id: 77777,
    generoPelicula: "CIENCIA FICCIÓN",
    titulo: "LA LLEGADA (ARRIVAL)",
    linkVideo: "https://www.youtube.com/watch?v=uWs5lsWXLbo",
    urlImg: "https://i.ytimg.com/vi/uWs5lsWXLbo/maxresdefault.jpg",
  },
  {
    id: 777777,
    generoPelicula: "CIENCIA FICCIÓN",
    titulo: "ANIQUILACIÓN",
    linkVideo: "https://www.youtube.com/watch?v=VGRaBxmdLbQ",
    urlImg: "https://i.ytimg.com/vi/jtPpSq3bW3o/maxresdefault.jpg",
  },
  {
    id: 741477,
    generoPelicula: "CIENCIA FICCIÓN",
    titulo: "12 HORAS PARA EL FIN DEL MUNDO (MIRA)",
    linkVideo: "https://www.youtube.com/watch?v=BLMIySq3kW8",
    urlImg: "https://i.ytimg.com/vi/OFqmdVuiEBI/maxresdefault.jpg",
  },
];

function App() {

  
  const [ dataCard, setDataCard] = useState(cards)
    
  const addVideo = (card) =>{
    setDataCard([...dataCard, card])
  }

  const deleteVideo = (id) => {
    const nuevaCard = dataCard.filter(
      (card) => card.id !== id
    );
    setDataCard(nuevaCard);
  };

  const updateVideo = (updatedVideo) => {
    const updatedCards = dataCard.map((card) => 
      card.id === updatedVideo.id ? updatedVideo : card
    );
    setDataCard(updatedCards);
  };

  
  return (
    <Router>
      <div className="contenedor-global">
        <Header />
        <Routes>
          <Route path="/" element={<Home dataCard={dataCard} deleteVideo={deleteVideo}/>} />
          <Route path="/nuevo_video" element={<NuevoVideo addVideo={addVideo}/>} />
          <Route path="/editar_video/:id" element={<EditarVideo videos={dataCard} updateVideo={updateVideo} />} />
        </Routes>
        <Footer />
     </div>
    </Router>
  );
}

export default App;
