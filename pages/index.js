import Image from "next/image";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

const Home = () => {
    return <div className="bg-primary/60 h-full">
        <div>
            <div className="text-center flex flex-col justify-center">
                <h1 className="h1">
                    Tranforming ideas <br/> Into
                    <span className="text-accent">Digital reality</span>
                </h1>
                <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-0 xl:mb-16">
                    Lorem ipsum dolor sit amet consectour adipcing elit.
                    Lorem ipsum dolor sit amet consectour adipcing elit.
                    Lorem ipsum dolor sit amet consectour adipcing elit.
                    Lorem ipsum dolor sit amet consectour adipcing elit.
                </p>
            </div>
        </div>
        <div>
            image
        </div>
    </div>;
};

export default Home;
