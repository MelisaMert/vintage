import { useContext } from "react"
import { InformationContext } from "./Contexts/InformationContext"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from "next/link";

export default function Detail(){
    
    const {name} = useContext(InformationContext);

    return (<>
        <h3>{`Hello ${name}, welcome to Vintage Detail Page`}</h3>
        <Link href="/"><ArrowBackIosNewIcon/></Link>
    </>)
}