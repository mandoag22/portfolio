"use client";

import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from "@/utils/animations";

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a passionate Full Stack Developer with expertise in building
          modern web applications. With a strong foundation in both frontend and
          backend technologies, I create seamless user experiences and robust
          server-side solutions. Currently, working as IT Specialist
          troubleshooting software and hardware issues.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Skills
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Javascript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
              
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Linux</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>CI/CD</li>
              
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Experience
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
            <p className="text-primary mb-2">Udemy Courses • 2024 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>
                Developed multiple frontend, backend and fullstack web
                applications using React, Next.js and Node.js.
              </li>
              <li>
                Fixed bugs that presented in the code using debugging tools
                along with chrome dev tools and console logs. documented the
                process and solution for future reference.
              </li>
              <li>
                Uploaded and deployed applications through github using cloud
                platforms such as render, vercel and netlify.
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-xl font-semibold mb-2">IT Desktop Support</h3>
            <p className="text-primary mb-2">Discover • 2022 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>
                troubleshoot software and hardware issues for windows, mac and
                mobile. Issues included password resets, network connectivity,
                vpn, and software diagnostics.
              </li>
              <li>
                In person solutions with hardware components such as hard drive
                replacements, memory upgrades, and peripheral installations.
              </li>
              <li>
                Used tools such as active directory, sccm, intunes and jamf to
                fix software issues for windows and mac operating systems. Along
                with solutions for virtual machines such as AWS and Citrix.
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              Associate of Science in Computer Science
            </h3>
            <p className="text-primary mb-2">
              Okton Community College • 2017 - 2020
            </p>
            <p className="text-secondary">
              Graduated with a Focus on programming and web development, along
              with networking and system courses.
            </p>
            <h2 className="text-xl font-semibold mb-2">
              Certificate in Programming
            </h2>
            <p className="text-primary mb-2">
              Okton Community College • 2019 - 2020
            </p>
            <p className="text-secondary">Main focus on web development</p>
            <h2 className="text-xl font-semibold mb-2">
              Udemy Course Certificates in Web Development
            </h2>
            <p className="text-primary mb-2">
              The Complete Javascript Course • Instructor: Jonas Schmedtmann
            </p>
            <p className="text-secondary">
              Learned Javascript through theory, coding exercises, projects and
              quizzes.
            </p>
            <p className="text-primary mb-2">
              The Complete React and Nextjs course • Instructor: Jonas
              Schmedtmann
            </p>
            <p className="text-secondary">
              Learned React and Nextjs through theory, coding exercises,
              projects and quizzes.
            </p>
            <p className="text-primary mb-2">
              The Complete Bootcamp Nodejs and MongoDB course • Instructor:
              Jonas Schmedtmann
            </p>
            <p className="text-secondary">
              Learned Nodejs and MongoDB through theory, coding exercises,
              projects and quizzes.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
