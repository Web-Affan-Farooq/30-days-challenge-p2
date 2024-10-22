import React from 'react';
import Card_1 from '../Card/Card-1';
import projects from '../../data/data.json';

const Section_1 = () => {
    return (
        <div>
            <section className='text-center'>
                <br />
                <h1 className='text-3xl font-bold'>Projects Showcase</h1>
                <br />
                <br />
                <br />
                <div className=' p-5 flex flex-row justify-center align-middle flex-wrap gap-5'>
                    {
                        projects.map((project: any) => { return <Card_1 img={project.image} path={project.link} projectName={project.projectName} description={project.description} key={project.id} /> })
                    }
                </div>
            </section>
        </div>
    )
}

export default Section_1