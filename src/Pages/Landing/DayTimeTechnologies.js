import React from 'preact/compat';
import Card from "../../Components/Card";
import ReactIcon from "../../Images/ReactIcon";
import LaravelIcon from "../../Images/LaravelIcon";
import DockerIcon from "../../Images/DockerIcon";
import JavascriptIcon from "../../Images/javascriptIcon";
import SpeedIcon from "../../Images/speedIcon";

const DayTimeTechnologies = () => {
    return (
        <div className='technologies'>
            <div className='row-0'>
                <div className='text'>Day time developer</div>
                <Card label='React' getIcon={ReactIcon}/>
                <Card label='Laravel' getIcon={LaravelIcon}/>
            </div>
            <div className='row-1'>
                <Card label='JavaScript' getIcon={JavascriptIcon}/>
                <Card label='Docker' getIcon={DockerIcon}/>
                <Card label='Optimisation' getIcon={SpeedIcon}/>
            </div>
        </div>
    );
};

export default DayTimeTechnologies;
