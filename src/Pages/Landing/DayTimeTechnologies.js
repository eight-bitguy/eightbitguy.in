import React from 'preact/compat';
import Card from "../../Components/Card";
import ReactIcon from "../../Images/ReactIcon";
import ReduxIcon from "../../Images/reduxIcon";
import LaravelIcon from "../../Images/LaravelIcon";
import DockerIcon from "../../Images/DockerIcon";

const DayTimeTechnologies = () => {
    return (
        <div className='technologies'>
            <div className='row-0'>
                <div className='text'>Day time developer</div>
                <Card label='React' getIcon={ReactIcon}/>
                <Card label='Redux' getIcon={ReduxIcon}/>
            </div>
            <div className='row-1'>
                <Card label='Laravel' getIcon={LaravelIcon}/>
                <Card label='Docker' getIcon={DockerIcon}/>
                <Card label='Postgres' getIcon={DockerIcon}/>
            </div>
        </div>
    );
};

export default DayTimeTechnologies;
