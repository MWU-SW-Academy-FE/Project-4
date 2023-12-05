import { useRecoilState } from "recoil";
import { todosAtom } from "../states";

function WritePage() {
    const [todos, setTodos] = useRecoilState(todosAtom)
    return (
    <>
        <h1>작성 페이지</h1>
        <div>현재 글 개수 : {todos.length}</div>
        <form>
            <input type="text" placeholder="할 일을 입력해주세요." />
        </form>
    </>
    );
}

export default WritePage;