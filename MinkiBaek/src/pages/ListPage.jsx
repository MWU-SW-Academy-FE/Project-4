import { data } from "../data/test";

function ListPage() {
    return ( 
        <>
            <ul>
                {data.workouts.map((work) => (
                    <li key={work.date}>
                        {work.date} | {work.exercise} 
                    </li>
                ))} 
                
            </ul>
        </>
     );
}

export default ListPage;