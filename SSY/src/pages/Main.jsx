import { RecordModal, useRecordModalStatus } from "../components/RecordModal";
import { Button } from "@mui/material";
import useRecordsState from "../hooks";
import CountNumber from "../components/CountNumber";

function RecordAddModal({ status }) {
    const recordsState = useRecordsState();

    const saveRecord = (recordCount) => {

    }

    return(
        <>
            <RecordModal
                msg="몇회 진행하셨나요?"
                status={status}
                saveRecord={saveRecord}
            />
        </>
    )
}

function Main() {
    const RecordModalStatus = useRecordModalStatus()

    return (
        <>
            <RecordModal 
                status={ RecordModalStatus }
            />
            <div className="flex-1 flex items-center justify-center">
                <div>
                    <div className="text-[70px] text-red-300 select-none font-mono">
                        <CountNumber
                            start={0}
                            end={100}
                            duration={3}
                        />
                    </div>
                    <div className="flex justify-center">
                        <Button variant="contained" onClick={RecordModalStatus.onOpen}> 
                            스쿼트 횟수 기록하기
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;