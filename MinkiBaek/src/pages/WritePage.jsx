import { useState } from "react";
function WritePage() {
    const [state, setState] = useState(false);

    return (
    <>
        <h1>작성 페이지</h1>
        <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-primary bg-gray-2 hover:bg-green-700" onClick={() => setState(!state)}>toogle</button>

        {state ? (
            <div>
                <Stack spacing={2} direction="row">
                <Button variant="text"><Link to="/">운동 작성하기</Link></Button>
                <Button variant="contained"><Link to="/listpage">운동 내역 확인하기</Link></Button>
                </Stack>
            </div>
        )  
        : <p>운동 기록을 남기고싶으면 버튼을 클릭하세요</p>}
    </>
    
    );
}

export default WritePage;