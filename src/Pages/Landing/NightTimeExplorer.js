import React from 'preact/compat';
import Card from "../../Components/Card";
import GithubIcon from "../../Images/GithubIcon";
import CircuitIcon from "../../Images/CircuitIcon";

const NightTimeExplorer = () => {
    return (
        <div className='technologies'>
            <div className='row-0 -rev'>
                <Card label='Electronics' getIcon={CircuitIcon}/>
                <Card label='Github' getIcon={GithubIcon}/>
                <div className='text'>Night time Explorer</div>
            </div>
        </div>
    );
};

export default NightTimeExplorer;
