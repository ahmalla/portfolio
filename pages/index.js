import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import js from "../public/js.png";
import react from "../public/react.png";
import django from "../public/django.png";
import html from "../public/html.png";
import mongo from "../public/mongo.png";
import node from "../public/node.png";
import python from "../public/python.png";
import { useState } from "react";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ahmad Mahmoud Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-gray-200">Developed By Ahmad</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://docs.google.com/document/d/e/2PACX-1vS34KEtNsUtIIRhX8_74s8--A4XwVRT4C1QnCAzKaQ--sN_Vg1X2FQNWCl3DSetk4SOFHCEqHfdbEVr/pub" target={"_blank"} rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-burtons font-medium md:text-6xl">
              Ahmad Mahmoud
            </h2>
            <h3 className="text-2xl py-2 font-burtons md:text-3xl dark:text-gray-200">Full-Stack Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto  dark:text-gray-200">
            As a highly motivated and dedicated software engineer with a background in team management and leadership, I possess a unique combination of strong leadership skills and a results-driven mindset. Although new to the tech industry, I am eager to embark on my journey and bring my skills and experience to a team. I am punctual, organized, and an enthusiastic team player who thrives in challenging environments, and I am not afraid of a challenge. My persistent and curious nature drives me to continuously learn and grow in the field, making me passionate about shaping a better future for the company I am joining. I am excited to contribute to success, gain valuable experience and continuously strive for improvement.{" "}
            </p>
          
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600  dark:text-gray-200">
            <a href="https://github.com/ahmalla" target={"_blank"} rel="noreferrer">
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmad-mahmoud-dev/"
              target={"_blank"} rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </div>
          <div className="flex align-items justify-center  dark:bg-gray-900">
            <Image src={js} alt="js"/>
            <Image src={react} alt="react"/>
            <Image src={html} alt="html"/>
            <Image src={node} alt="node"/>
            <Image src={mongo} alt="mongo"/>
            <Image src={python} alt="python"/>
            <Image src={django} alt="django"/>
          </div>
          </div>
        </section>
        <section>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <div>
              <h2 className="text-3xl font-burtons underline-offset-8 py-1 text-blue-400"><a href="https://ahmalla.github.io/Memory-Game/" target={"_blank"} rel="noreferrer">Memory Game</a></h2>
              <p className="text-md py-2 leading-8 text-gray-800  dark:text-gray-200">
              This game marked the starting point of my coding journey, and I am proud to present it in its raw and unrefined state as a testament to my progression as a developer. As my first ever coding project, it holds a special place in my journey and serves as a reminder of how far I have come. By clicking on the title, you will have the opportunity to not only view the game, but also play it and experience first hand the primitive yet promising beginnings of my coding journey. It is a humbling and nostalgic experience to look back at my first steps in the world of coding and I hope you will find it interesting to see where it all began.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-burtons py-1  dark:text-gray-200">Languages used in this project</h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto  dark:text-gray-200">
                {" "}
                JavaScript, HTML 5, CSS 3
              </p>
            </div>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <div>
              <h2 className="text-3xl font-burtons underline-offset-8 py-1 text-blue-400"><a href="https://young-shore-22684.herokuapp.com/" target={"_blank"} rel="noreferrer">Finch Collector</a></h2>
              <p className="text-md py-2 leading-8 text-gray-800  dark:text-gray-200">
              The Finch Collector was a significant milestone in my coding journey as it marked my third project and my introduction to the powerful Django Framework, which is built using the versatile Python programming language. Developing this application allowed me to gain a deeper understanding of the intricacies of the Django Framework, and demonstrated my proficiency in utilizing the full potential of the Python language. This project was not only a learning experience, but also a showcase of my abilities to implement and utilize these tools to create a functional and user-friendly application.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-burtons py-1  dark:text-gray-200">Languages I used in the Finch Collector</h3>
              <p className="text-md py-5 leading-8 text-gray-800  dark:text-gray-200">
                {" "}
                Django, Python, Materialize 
              </p>
            </div>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <div>
              <h2 className="text-3xl font-burtons underline-offset-8 py-1 text-blue-400"><a href="https://gentle-brushlands-78744.herokuapp.com/" target={"_blank"} rel="noreferrer">Chore Tracker</a></h2>
              <p className="text-md py-2 leading-8 text-gray-800  dark:text-gray-200">
                The Chore Tracker was my final project in my coding journey and my first Team project using Django and Python. This was my first time working in a team with the git workflow. It was also my first experience as a scrum leader.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-burtons py-1  dark:text-gray-200">Languages I used in the Chore Tracker</h3>
              <p className="text-md py-5 leading-8 text-gray-800  dark:text-gray-200">
                {" "}
                Django, Python, Materialize 
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
