'use client'

import { SOCIAL_ICONS } from "@/utils/data";
import { transition, variants } from "@/utils/framer_variants";
import { MotionButton, MotionDiv, MotionImage } from "@/utils/motionTags";
import { DownloadIcon } from "lucide-react";
import { Luckiest_Guy } from "next/font/google";


const luck = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
export default function Home() {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Adjust this path if your resume is named differently
    link.download = "resume.pdf"; // Optional: rename file on download
    link.click();
  };

  return (
    <div className="h-dvh flex overflow-hidden md:flex-row flex-col items-center justify-between pt-5 w-full">

      {/* Col 1 */}
      <div className="flex flex-col  h-full justify-center space-y-6 md:items-end items-center relative max-w-xl md:ml-auto  flex-1">
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.rise}
          transition={transition.rise}
          className="absolute flex items-center gap-x-4 -rotate-90 md:-left-8 -left-28 md:top-auto top-[50%] text-accent-foreground">
          <MotionDiv
            className="border-4 size-12 rounded-full grid place-items-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1
            }}
          >
            <div className="size-3 rounded-full bg-accent-foreground"></div>
          </MotionDiv>
          <h4 className="text-2xl">Developer</h4>
        </MotionDiv>

        {/* Name Tag */}
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveRight}
          transition={transition.moveRight}
          className={`md:text-right text-center  ${luck.className}`}
        >

          <h1>CARLOS <br /> <span>CHNOUDA</span></h1>
        </MotionDiv>

        <br />

        <MotionButton
          whileHover={{ scale: 0.95 }}
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transition.moveUp}
          onClick={handleDownload}
        >
          <DownloadIcon className="mr-2" />
          Download CV
        </MotionButton>

        <div className="flex gap-x-3 items-center md:absolute bottom-6 left-2">
          {
            SOCIAL_ICONS.map((item, index) => (
              <MotionImage key={index}
                whileHover={{ scale: 1.1 }}
                initial="initial"
                animate="animate"
                variants={variants.moveUp}
                transition={{
                  ...transition.moveUp,
                  delay: index * 0.3
                }}
                src={item.icon}
                alt={item.name}
                width={25}
                height={25}>
              </MotionImage>
            ))
          }
        </div>

      </div>


      {/* Col 2 */}
      <div className="flex md:max-w-[50%] max-w-lg items-end md:h-[95%]  self-end  ">
        <MotionImage
          src={"/hero.svg"}
          alt="hero"
          height={720}
          width={820}
          initial="initial"
          animate="animate"
          variants={variants.moveLeft}
          transition={{
            ...transition.moveLeft,
            delay: 1.5,
          }}
          className="object-cover  max-h-full"
        />
      </div>
    </div>
  );
}
