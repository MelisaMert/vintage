import React, {useState} from 'react';
import Information from "../../components/Information"
import Detail from '../../components/Detail';
import {InformationContext} from '../../components/Contexts/InformationContext';

export default function Vintage(){
    const [name, setName] = useState("");
    const [saveInformation, setSaveInformation] = useState(false);
    return (<>
        <InformationContext.Provider value={{name,setName,setSaveInformation}}>
            {saveInformation ? <Detail/> : <Information/>}
        </InformationContext.Provider>
    </>)
}