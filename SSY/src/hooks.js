import { useState } from "react";

export default function useRecordsState() {
    const goalCount = 1000;

    const [records, setRecords] = useState([])

    const saveRecord = () => {
        setRecords()
    }
}