const Project = ({title, description, link}) => { 
    return(  
    <div className="pro-container">
        <h1>{title}</h1>
        <p>{description}</p>
        {link && (
            <a href={link} target="_blank" rel="noreferrer">
                Learn More
            </a>
        )}
    </div>
    )
}

export default function Projects() {
    const ProjectData = [
        {title: "project 1", description: "this is the template to a not yet made project", link: "#"},
        {title: "project 2", description: "this is the template to a not yet made project", link: "#"},
        {title: "project 3", description: "this is the template to a not yet made project", link: "#"},
        {title: "project 4", description: "this is the template to a not yet made project", link: "#"}
    ]



    return(
        <div id="projects">
            <h2>My Work</h2>
            {ProjectData.map((project, index) => (
                <Project key={index} { ...project }/>
            )) }
        </div>
    )
}