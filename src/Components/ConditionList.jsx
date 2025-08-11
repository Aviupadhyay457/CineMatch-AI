import React from "react"
export default function ConditionList(props){
    function deleteItem(index){
        const newArr=props.ConditionArr.filter(function(val,i){
            if(i!=index){
                return val
            }
        })
        props.conditionArrUpdateTwo(newArr)
    }

    const ConditionListItems=props.ConditionArr.map((condition,index)=>
        <li key={condition}>
            <i className="fa-solid fa-arrow-right"></i>
            {condition}
            <i className="fa-regular fa-trash-can" onClick={()=>deleteItem(index)}></i>  
            </li>
    )

    return(
        <section className="condition-list-section">
            <h2>Your preferences so far:</h2>
            <ul>
                {ConditionListItems}
            </ul>
        </section>
    )

}