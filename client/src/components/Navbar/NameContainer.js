import React,{Component} from 'react';
import CourseName from './CourseName';
const NameContainer=({names})=>{
    
        return(
            <div>
                {names.map(CourseName => <CourseName CourseName = {CourseName}></CourseName>)}
            </div>
        )
    
}
export default NameContainer;