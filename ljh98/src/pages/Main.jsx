import { useState } from "react";
import RecordModal, { useRecordModalState } from "../components/RecordModal";
import { Button } from "@mui/material";
import useRecordState from "../hooks";
import CountNumber from "../components/CountNumber";

function RecordAddModal({ status }){
    const recordState = useRecordState()

    const saveRecord = (recordCount) => {

    }
    return (
    <>
        <RecordModal
            message="몇회 진행하셨나요?"
            status={status}
            saveRecord={saveRecord}
        />
    </>
    )
}

function Main() {
    const recordModalState = useRecordModalState()

    return (
    <>
        <RecordAddModal
            status={recordModalState}
        />
        <div className="flex-1 flex items-center justify-center">
            <div>
                <div className="text-[70px] text-[color:gray] select-none">
                    <CountNumber 
                        start={0}
                        end={5000}
                        duration={3}
                    />
                </div>
                <div className="flex justify-center">
                    <Button variant="contained" onClick={recordModalState.onOpen}>
                        스쿼드 횟수 기록하기
                    </Button>
                </div>
            </div>
        </div>
    </>
    );
}

export default Main;