import { useState } from "react";
import Input from "../components/Input";
function WritePage() {
    const [state, setState] = useState({value : ''});

   

    return (
    <>
        <h1>작성 페이지</h1>
        <button onClick={() => setState(!state)}>toogle</button>

        {state ? (
            <Input />
        )  
        : <p>운동 기록을 남기고싶으면 버튼을 클릭하세요</p>}
    </>
    
    );
}

export default WritePage;