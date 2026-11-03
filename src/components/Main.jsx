import { IoMail, IoLogoLinkedin } from "react-icons/io5";

export default function Main() {
    return (
        <div className="px-8 pt-5 pb-7 flex flex-col gap-6 text-white">
            <div className="text-center">
                <h1 className="text-2xl font-bold tracking-normal leading-tight text-white">
                    Reshad Mammedov
                </h1>
                <p className="text-xs text-[#F3BF99] font-normal mt-1">
                    Frontend Developer
                </p>
                <a
                    href="https://resad505.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#F5F5F5] hover:underline focus:underline focus:outline-none transition-all mt-2 inline-block opacity-80"
                >
                    resad505.vercel.app
                </a>
            </div>

            <div className="flex gap-4">
                <a
                    href="mailto:resadmammedov@proton.me"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md bg-white text-[#374151] text-sm font-medium shadow-sm hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                    <IoMail className="text-base text-gray-700" aria-hidden="true" />
                    <span>Email</span>
                </a>
                <a
                    href="www.linkedin.com/in/reshadmammedov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md bg-[#5093E2] text-white text-sm font-medium shadow-sm hover:bg-[#417ec6] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5093E2]"
                >
                    <IoLogoLinkedin className="text-base" aria-hidden="true" />
                    <span>LinkedIn</span>
                </a>
            </div>

            <div className="text-left space-y-4">
                <section>
                    <h2 className="text-base font-bold text-[#F5F5F5]">About</h2>
                    <p className="text-xs text-[#DCDCDC] leading-relaxed mt-1">
                        I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                    </p>
                </section>
                <section>
                    <h2 className="text-base font-bold text-[#F5F5F5]">Interests</h2>
                    <p className="text-xs text-[#DCDCDC] leading-relaxed mt-1">
                        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                    </p>
                </section>
            </div>
        </div>
    );
}
