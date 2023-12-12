import { useEffect, useState } from "react";

export default function RecordModal({ status, msg, initialQuantity = 0 }) {
	const [recordCount, setRecordCount] = useState(initialQuantity);

	useEffect(() => {
		setRecordCount(initialQuantity);
	}, [initialQuantity]);

	return (
		<>
			
		</>
	);
}
