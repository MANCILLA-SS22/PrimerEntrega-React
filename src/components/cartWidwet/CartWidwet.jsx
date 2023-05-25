import { Badge, IconButton } from "@mui/material"
import { BsFillCartCheckFill } from "react-icons/bs"

function CartWidwet(){
  return (
    <div>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={1} color="error">
                <BsFillCartCheckFill color="disabled" fontSize={"30px"} />
            </Badge>
        </IconButton>
    </div>
  )
}

export default CartWidwet