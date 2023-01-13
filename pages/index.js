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


export default function Home() {
  return (
    <>
      <Head>
        <title>Ahmad Mahmoud Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Developed By Ahmad</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://docs.google.com/document/d/e/2PACX-1vS34KEtNsUtIIRhX8_74s8--A4XwVRT4C1QnCAzKaQ--sN_Vg1X2FQNWCl3DSetk4SOFHCEqHfdbEVr/pub" target={"_blank"}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Ahmad Mahmoud
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Full-Stack Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
              Amiable and dedicated software engineer with a background in Team
              Management and leadership. A punctual, organized and enthusiastic
              team player that isn’t afraid of a challenge and can help lead a
              group to success. Persistence keeps me curious and passionate
              about continually pursuing a better tomorrow.{" "}
            </p>
          
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://github.com/ahmalla" target={"_blank"}>
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmad-mahmoud-dev/"
              target={"_blank"}
            >
              <AiFillLinkedin />
            </a>
          </div>
          <div className="flex align-items">
            <Image src={js} />
            <Image src={react} />
            <Image src={html} />
            <Image src={node} />
            <Image src={mongo} />
            <Image src={python} />
            <Image src={django} />
          </div>
          </div>
        </section>
        <section>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <div>
              <h3 className="text-3xl py-1">Projects I have created</h3>
              <p className="text-md py-2 leading-8 text-gray-800">
                Write something about development journey here.
              </p>
            </div>
            <div>
              <h3 className="text-3xl py-1">Languages I am Familiar with</h3>
              <p className="text-md py-5 leading-8 text-gray-800">
                {" "}
                React, Express, MERN stack, Node.js
              </p>
            </div>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <div>
              <h3 className="text-3xl py-1">Projects I have created</h3>
              <p className="text-md py-2 leading-8 text-gray-800">
                Write something about development journey here.
              </p>
            </div>
            <div>
              <h3 className="text-3xl py-1">Languages I am Familiar with</h3>
              <p className="text-md py-5 leading-8 text-gray-800">
                {" "}
                React, Express, MERN stack, Node.js
              </p>
            </div>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <div>
              <h3 className="text-3xl py-1">Projects I have created</h3>
              <p className="text-md py-2 leading-8 text-gray-800">
                Write something about development journey here.
              </p>
            </div>
            <div>
              <h3 className="text-3xl py-1">Languages I am Familiar with</h3>
              <p className="text-md py-5 leading-8 text-gray-800">
                {" "}
                React, Express, MERN stack, Node.js
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">a new section, may delete later</h3>
          </div>
        </section>
      </main>
    </>
  );
}
