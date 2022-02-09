import React from "react"
import "../smiley/Smile.css"
import very_angry from "../../images/very_angry.png";
import angry from "../../images/angry.jpg";
import neutral from "../../images/neutral.png";
import happy from "../../images/happy.png";
import very_happy from "../../images/very_happy.png";

type SmileProps = {
    value : number
}

export const Smile = ({value} : SmileProps) => {
    
    const getSmile = (value : number): string => {
        console.log("hej: ", value)
        switch(value) {
            case 1:
                return very_angry;
            case 2:
                return angry;
            case 3:
                return neutral;
            case 4:
                return happy;
            case 5:
                return very_happy;
            default:
                return ''
          }
    }
    
    return (
        <div className="smile">
            <img src={getSmile(value)} alt="" height={50} width={50} />
        </div>
    )
}