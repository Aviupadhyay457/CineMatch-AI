import React from "react"
import ConditionList from "./Components/ConditionList"
import GenerateMovies from "./Components/GenerateMovies"
import MoviesData from "./MoviesData"
export default function MainComponent(){

    const [ConditionArr, setConditionArr]=React.useState([])
    const[movieDataString, setMovieDataString]=React.useState("")

    function conditionArrUpdate(val){
        setConditionArr(function(arr){
            return[...arr,val]
        
        })
    }
    function conditionArrUpdateTwo(arr){
        setConditionArr(arr)
    }



    function addCondition(formData){
        const input=formData.get("input")
        if(input.trim()!=""){
           conditionArrUpdate(input) 
        }
        
    }

    function getDataFromAI(){
        
    }



    return(
        <main>
            <form action={addCondition}>
                <input type="text" name="input" id="input" placeholder="Tell us your ideal movie features..."/>
                <button className="add-condition-btn">Add Condition</button>
            </form>
            {ConditionArr.length>0 &&<ConditionList
                ConditionArr={ConditionArr}
                conditionArrUpdateTwo={conditionArrUpdateTwo}
            />}
            {ConditionArr.length>2 &&<GenerateMovies getDataFromAI={getDataFromAI}/>}
            {movieDataString&&<MoviesData movieDataString={movieDataString}/>}
        </main>
    )
}