import { numberFormat } from "../util/numberFormat";

function ListPage() {
    const goalCount = 10000;
    const doneCount = 0;
    const restCount = goalCount - doneCount;

    return ( 
        <div className="flex-1 flex-shrink-0 flex justify-center items-center">
            <div>
                <h1 className="font-bold text-xl">현황</h1>
                <div>남은 횟수{numberFormat(restCount)}회</div>
                <div>수행 횟수{numberFormat(doneCount)}회</div>
            </div>
                <h1 className="font-bold text-xl">기록</h1>
            <div className="flex gap-2 items-center">
                <span>40</span>
                <button className="btn btn-primary">적용</button>
                <button className="btn btn-primary">취소</button>
            </div>
            <div className="flex gap-2 items-center">
                <span>40</span>
                <button className="btn btn-primary">적용</button>
                <button className="btn btn-primary">취소</button>
                <button className="btn btn-primary">취소</button>
                <button className="btn btn-primary">취소</button>
            </div>
        </div>
     );
}

export default ListPage;