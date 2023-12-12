import RecordModal from "../components/RecordModal";

function RecordAddModal() {
    const status = {opened: true}

    return(
        <>
            <RecordModal
                msg="몇회 진행하셨나요?"
                status={status}
            />
        </>
    )
}

function Main() {

    return (
        <>
            <RecordModal />
            <div className="flex-1 flex items-center justify-center">
                <div className="text-[70px] text-blue-300 select-none">
                    <span>10</span>
                </div>
                <div className="flex justify-center">
                    <button className="btn btn-outline btn-info" variant="contained" onClick="{}"> 
                        스쿼트 횟수 기록하기
                    </button>
                </div>
            </div>
        </>
    );
}

export default Main;