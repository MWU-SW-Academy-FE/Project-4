
function History() {
    const goalCount = 10000;
    const doneCount = 0;
    const restCount = goalCount - doneCount;

    return (
    <div className="flex-1 flex-shrink-0 flex justify-center items-center">
        <div>
            <div>남은 횟수 {restCount}회</div>
            <div>수행 횟수 {doneCount}회</div>
        </div>
        <div className="mt-5">
            <h1 className="font-bold text-xl">기록</h1>
            <button className="btn btn-primary">button</button>
        </div>

        
    </div>);
}

export default History;