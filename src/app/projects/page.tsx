'use client';
import projectData from '../data/project.json';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/footer';
export default function AllProject() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="bg-zinc-800 text-white animate__animated animate__fadeInDown">
        <div className="text-center pt-10 pb-10">
          <p className="text-xl sm:text-3xl font-mono pb-3 font-bold">
            Projects
          </p>
          <p className="px-5">
            I show you to all the big and small websites I have done so far I
            show you to all the big and small websites I have done so far
          </p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 px-10 justify-center items-center gap-10 pb-5 ">
          {projectData.map((projects) => {
            return (
              <Link
                href={`${projects.url}`}
                target="_blank"
                key={projects.id}
                className="text-center border-2 border-gray-600 p-5 font-serif h-50 rounded-xl cursor-pointer hover:translate-y-[-10px]"
              >
                <p className="md:text-xl mb-3 ">{projects.projectName}</p>
                <Image
                  width={300}
                  height={300}
                  src={projects.image}
                  alt="image_project"
                  className="object-cover md:object-contain  w-full mx-auto rounded-lg"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
