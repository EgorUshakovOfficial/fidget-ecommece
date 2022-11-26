import { CircularProgress } from "@mui/material"

export default function Loading(){
    return <CircularProgress style={{
        color:"black",
        position:"absolute",
        top:"50%",
        left:"50%"
    }} />
}