import { Button, Chip } from "@mui/material";

function History() {
    return (
        <li className="mt-6 sm:mt-8">
            <div className="flex gap-2">
                <Chip label={"1회차"} variant="outlined" className="!pt-1" />
                <Chip 
                    label="2023-12-12" 
                    variant="outlined"
                    className="!pt-1" 
                    color="primary"
                />
            </div>
            <div className="mt-2 sm:mt-4 shadow rounded-[20px] flex">
                <div className="px-5 hover:text-[color:var(--mui-color-primary-main)] flex-grow flex items-center whitespace-pre-wrap leading-relaxed my-5">
                    5회 수행
                </div>
                <Button
                    className="flex-shrink-0 !items-start !rounded-[0_20px_20px_0]"
                    color="inherit"
                >
                    TEST
                </Button>
            </div>
        </li>
    );
}

export default History;