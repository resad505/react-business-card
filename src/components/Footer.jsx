import { IoLogoGithub } from "react-icons/io5";

const socialLinks = [
    { name: "GitHub", href: "https://github.com/resad505", icon: IoLogoGithub },
];

export default function Footer() {
    return (
        <footer className="bg-[#161619] py-5 flex justify-center items-center gap-6">
            {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#918E9B] hover:text-white transition-colors text-2xl flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 rounded"
                    aria-label={name}
                >
                    <Icon aria-hidden="true" />
                </a>
            ))}
        </footer>
    );
}
