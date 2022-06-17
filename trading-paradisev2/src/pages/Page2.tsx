
import './Page2.css'
import Graph from '../components/Graph/Graph'
import FloatingPanel from '../components/Floatingpanel/FloatingPanel'



export default function Page2(){
    return(
        
        <div className='page2-container'>
            <div className='graph-title'>
                Entrez dans le nouveau monde.
            </div>
            <Graph/>
            <FloatingPanel />
        </div>
    )
}