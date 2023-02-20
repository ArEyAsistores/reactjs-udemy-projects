import VideoCard from "./components/VideoCard";
import videoCards from './components/VideoCard/videoCards';
import './index.css';
function App() {
  
  const getId = (id) => { //avoid start up re-rendering 
    const vcId = videoCards.find((videoCard) =>  videoCard.id === id);
    console.log("hello ", vcId);
  } 

  const listOfVideoCard = videoCards.map((videoCard, index) => {
    return <VideoCard name = { videoCard.name } 
                      key = { videoCard.id }
                      desc = { videoCard.desc }
                      number = { index }
                      getId = { getId } 
                      img = { videoCard.img }
                      id = { videoCard.id } />;
  });

  return (
   <>
    <h1> Lazada best seller!</h1>
    <h3> Checkout na!</h3>
    <section className='gpuList'>
   
     { listOfVideoCard }
    </section >
   </>
  );
}

export default App;
