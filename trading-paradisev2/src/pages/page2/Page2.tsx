
import './Page2.css'
import Graph from '../../components/Graph/Graph'
import FloatingPanel from '../../components/Floatingpanel/FloatingPanel'
import Navbar from '../../components/Navbar';
import Ticker from '../../components/ticker';


function Page2(){
    return(
        
        <div className='page2-container'>
            <Navbar/>
        <Ticker />
            <div className='graph-title'>
                Entrez dans le nouveau monde.
            </div>
            <Graph/>
            <FloatingPanel />
        </div>
    )
}

export default Page2;