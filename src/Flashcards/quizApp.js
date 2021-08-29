import React, {useState} from 'react'


import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi'

const MyAccordion = ({ question, answer}) => {
    
    const [full, setFull] = useState(false)

    const ShowMore = () => {
        setFull(!full)
    }
    
    return (
        <>
        
                <div className="article">
                   
                    <h2>{question}</h2>
                    <div onClick={ShowMore}>{full ?<div><FiMinusCircle color="red"/></div>:<div><FiPlusCircle color="green"/></div>}</div>
                    {full && <p>{answer}</p>}
                    
                    
                </div>
            
       
        </>
    )
}

export default MyAccordion