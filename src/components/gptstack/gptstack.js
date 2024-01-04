import React from 'react';
import './gptstack.css'; // Make sure to create the appropriate CSS file
import htmlLogo from '../../assets/logos/html.png'; // Update these paths to the actual paths of your icons
import cssLogo from '../../assets/logos/css.png';
import jsLogo from '../../assets/logos/javascript.png';
import react from '../../assets/logos/react.png';
import vscode from '../../assets/logos/vscode.png'
import bootstrap from '../../assets/logos/bootstrap.png'
import github from '../../assets/logos/github.png'

// ... import other technology logos

function GptStack() {
    // Array of objects for each tech stack item
    const techStack = [
        { id: 'html', name: 'HTML5NAME', logo: htmlLogo },
        { id: 'css', name: 'CSS3', logo: cssLogo },
        { id: 'js', name: 'JavaScript', logo: jsLogo },
        { id: 'react', name: 'React', logo: react },
        { id: 'github', name: 'GitHub', logo: github },
        { id: 'boostrap', name: 'Bootstrap', logo: bootstrap },
        { id: 'vscode', name: 'VSCode', logo: vscode },

        // ... add other technology items here
    ];

    return (
        <div className="tech-stack-container">
            <h2>My Tech Stack</h2>
            <p>Technologies I've been working with recently</p>
            <div className="tech-stack-grid">
                {techStack.map((tech) => (
                    <div key={tech.id} className="tech-stack-item">
                        <img src={tech.logo} alt={tech.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GptStack;
