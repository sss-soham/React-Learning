import seriesData from '../api/data.json';
import {Card} from './Card';
export const NetflixCard = () => {
    return (
        <ul className='m-4' style={{display:"grid" ,  gridTemplateColumns: "repeat(3, 1fr)",gap:"1rem"}}>
            {
                seriesData.map((curr)=> (
                    <Card key ={curr.id} data = {curr}><p>Hello bot</p></Card>
                ))
            }
        </ul>
    )
}
export default NetflixCard;