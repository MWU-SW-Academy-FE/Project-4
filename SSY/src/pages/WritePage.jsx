import { useRecoilState } from "recoil";
import { todosAtom } from "../states"

function WritePage() {
    const [todos, setTodos] = useRecoilState(todosAtom)

    return (
        <>
            <h1>작성페이지</h1>
            <div>현재 글 개수: {todos.length}</div>
            <form>
                <input type="text" placeholder="할 일을 입력해주세요." />
                <input type="sumbit" value="작성" />
            </form>
        </>
    );
}

export default WritePage;