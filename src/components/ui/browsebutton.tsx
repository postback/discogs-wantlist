import * as React from "react"
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { cn } from "@/lib/utils"

function BrowseButton({
  variant,
  onClick,
  ...props
}) {

  const StatusIcon = ({variant}) => {
    switch (variant) {
      case "next":
        return <ArrowForwardIosIcon fontSize="inherit"/>;
      case "previous":
        return <ArrowBackIosIcon fontSize="inherit"/>;
      default:
        return <ArrowForwardIosIcon fontSize="inherit"/>;
    }
  };

  return (
    <IconButton aria-label="Next" size="large" onClick={onClick}>
     <StatusIcon variant={variant}/>
    </IconButton>
  )
}

export { BrowseButton }
