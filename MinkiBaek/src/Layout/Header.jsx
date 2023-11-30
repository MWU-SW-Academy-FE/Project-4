import { Link } from "react-router-dom";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Header() {
    return ( 
        <header>
           <Stack spacing={2} direction="row">
           <Button variant="text"><Link to="/">운동 작성하기</Link></Button>
            <Button variant="contained"><Link to="/listpage">운동 내역 확인하기</Link></Button>
           </Stack>
      
   
      <hr/>
  
      </header>
     );
}

export default Header;