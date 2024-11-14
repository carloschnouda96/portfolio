import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { transition, variants } from '@/utils/framer_variants'
import { MotionButton, MotionDiv, MotionImage, MotionTabs } from '@/utils/motionTags'
import React from 'react'

function page() {
  return (
    <div className='max-w-4xl mx-auto min-h-screen pt-32 2xl:pt-60 pb-4'>
      <div className='flex md:flex-row flex-col items-center justify-between gap-7 md:gap-0 w-full'>

        {/* profile */}
        <div className='flex md:flex-row flex-col gap-x-7 sm:gap-y-0 gap-y-4 items-center '>

          <MotionImage
            initial='initial'
            animate='animate'
            variants={variants.scale}
            transition={transition.scale}
            src="/avatar.png"
            alt="profile"
            width={155}
            height={155}
            className='md:w-36 w-28'
          />

          <MotionDiv initial='initial' animate='animate' variants={variants.moveDown} transition={transition.moveDown} className='sm:text-left text-center'>
            <h3 className='mb-2'>
              Carlos <span>Chnouda.</span>
            </h3>
            <h5>
              Lebanon, Beirut
            </h5>
          </MotionDiv>
        </div>

        <MotionButton
          initial='initial'
          animate='animate'
          variants={variants.moveDown}
          transition={transition.moveDown}
          variant='outline'
          size='lg'
        >
          Full Stack Web Developer
        </MotionButton>
      </div>

      {/* Profile Details */}

      <MotionTabs
        initial='initial'
        animate='animate'
        variants={variants.moveUp}
        transition={transition.moveUp}
        className='leading-7 mt-10'
        defaultValue="about"
      >

        {/* Tabs Menu */}
        <TabsList>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
        </TabsList>

        {/* Tabs Content */}
        <TabsContent value="about">
          <h6>Who I&apos;m </h6>
          <p className="text-accent-foreground mt-2">
            Jack Ashford is a dedicated UI/UX Designer known for his
            unwavering commitment to creating captivating digital experiences.
            With a blend of creativity and technical prowess, he navigates the
            intersection of design and functionality, ensuring every detail
            contributes to an intuitive user journey. With a diverse skill set
            and a passion for innovation, Jack continuously pushes the
            boundaries of design, seeking to redefine the way users interact
            with technology.
          </p>
          <p className="text-accent-foreground mt-2">
            Jack Ashford is a dedicated UI/UX Designer known for his
            unwavering commitment to creating captivating digital experiences.
            With a blend of creativity and technical prowess, he navigates the
            intersection of design and functionality.
          </p>
        </TabsContent>

        <TabsContent value="skills">
          <h6>What I can do</h6>
          <p className="text-accent-foreground mt-2">
            Jack Ashford is a dedicated UI/UX Designer known for his
            unwavering commitment to creating captivating digital experiences.
            With a blend of creativity and technical prowess, he navigates the
            intersection of design and functionality, ensuring every detail
            contributes to an intuitive user journey. With a diverse skill set
            and a passion for innovation, Jack continuously pushes the
            boundaries of design, seeking to redefine the way users interact
            with technology.
          </p>
        </TabsContent>

        <TabsContent value="experience">
          <h6>My Work</h6>
          <p className="text-accent-foreground mt-2">
            Jack Ashford is a dedicated UI/UX Designer known for his
            unwavering commitment to creating captivating digital experiences.
            With a blend of creativity and technical prowess, he navigates the
            intersection of design and functionality, ensuring every detail
            contributes to an intuitive user journey. With a diverse skill set
            and a passion for innovation, Jack continuously pushes the
            boundaries of design, seeking to redefine the way users interact
            with technology.
          </p>
        </TabsContent>

      </MotionTabs>

    </div>
  )
}

export default page