import { Linkedin, Github } from 'lucide-react';

export function SocialLinks() {
    const socialItems = [
        {name: 'Linkedin', icon: Linkedin, link: 'https://www.linkedin.com/in/sarahkahe'},
        {name: 'Github', icon: Github, link: 'https://github.com/kahesr' }
    ];

    return (
        <>
            {socialItems.map((item) => (
                <a key={item.name} href={item.link} title={item.name} target='_blank' rel='noopener noreferrer'>
                    <item.icon size={18} className="text-primary-600 dark:text-primary-400 flex-shrink-0 hover:text-primary-700 dark:hover:text-primary-300"/>
                </a>
            ))}
        </>
    );
}