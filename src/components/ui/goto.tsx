import * as React from "react";
import { useState } from "react";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function GoTo({ itemShown, goTo }){

  const [text, setText] = useState(itemShown);

  function handleChange(e) {
    setText(e.target.value);
  }

  function clickHandler() {
    goTo(text);
  }
  
  return (
   <div className="flex items-center justify-center bg-gray-100 mt-2">
    <TextField
        aria-label="Number of the item to show"
        placeholder="Go to item…"
        size="small"
        margin="dense"
        onChange={handleChange}
        value={text}
        type="number"
      />
       <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={clickHandler}>
        <SearchIcon />
      </IconButton>
   </div>
  )
}

export {
  GoTo,
}