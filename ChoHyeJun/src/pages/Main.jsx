import { useRecoilState } from "recoil";
import { todosAtom } from "../states";
import RecordModal from "../components/RecordModal";

function RecordAddModal() {
	return (
		<>
			<RecordModal />
		</>
	)
}

export default function Main() {
  //const [todos, setTodos] = useRecoilState(todosAtom)

  return (
		<>
			<RecordAddModal />
			<div className="flex-1 flex items-center justify-center"></div>
			<div className="text-[70px] text-[color:gray] select-none">
				<span>10</span>
			</div>
			<div className="flex justify-center">
				<button className="btn btn-accent" variant="contained" onClick="{}">
					스쿼트 횟수 기록하기
				</button>
			</div>
		</>
	);
}
