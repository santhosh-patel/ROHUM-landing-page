import React, { useEffect, useState } from "react";
import SectionHeading from "../Components/SectionHeading";
import { AnimatePresence, motion } from "framer-motion";
import FaqsSmall from "../Components/FaqsSmall";

const FaqsPage = () => {
  const [IshHovered, setIshHovered] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const variants = {
    initial: { opacity: 0, maxHeight: 0, overflow: "hidden" },
    animate: { opacity: 1, maxHeight: 200 }, // Adjust maxHeight dynamically
    exit: { opacity: 0, maxHeight: 0 },
  };

  return (
    <div className="mt-20 min-h-screen">
      <SectionHeading smallHeading="FAQS" mainHeading="Have a Question?" />

      <div className="hidden md:grid gap-3 relative grid-cols-10 px-1 lg:px-2 grid-rows-4 mt-20 w-full mx-auto">
        <div className="semi-light absolute"></div>

        <div
          className="faqs-card col-span-3 shadow-lg row-span-15 flex flex-col rounded-lg z-20 justify-center md:p-1 lg:p-5 overflow-hidden items-center cursor-default"
          onMouseEnter={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 0 ? true : item))
            );
          }}
          onMouseLeave={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 0 ? false : item))
            );
          }}
        >
          <h2 className="text-center text-lg text-white font-semibold">
            What makes ROHUM.tech's avatars emotionally intelligent?
          </h2>{" "}
          <AnimatePresence>
            {IshHovered[0] && (
              <motion.p
                className="text-sm mt-5 text-gray-500"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                Our AI-driven avatars analyze tone, facial expressions, and user
                interactions to provide personalized responses, enhancing
                engagement and making digital interactions more human-like.
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div
          className="faqs-card col-span-7 row-span-15 flex flex-col rounded-lg z-20 justify-center md:p-1 lg:p-3 overflow-hidden items-center cursor-default"
          onMouseEnter={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 1 ? true : item))
            );
          }}
          onMouseLeave={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 1 ? false : item))
            );
          }}
        >
          <h2 className="text-center text-lg text-white font-semibold">
            How can businesses benefit from emotionally intelligent avatars?
          </h2>{" "}
          <AnimatePresence>
            {IshHovered[1] && (
              <motion.p
                className=" text-sm mt-5 text-gray-500"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                These avatars improve customer interactions, provide empathetic
                support, and adapt to users’ emotions in real time, leading to
                better user satisfaction and retention.
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div
          className="faqs-card col-span-3 row-span-30  flex flex-col rounded-lg z-20 justify-center md:p-1 lg:p-3 overflow-hidden items-center cursor-default"
          onMouseEnter={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 2 ? true : item))
            );
          }}
          onMouseLeave={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 2 ? false : item))
            );
          }}
        >
          <h2 className="text-center text-lg text-white font-semibold">
            How does ROHUM.tech simplify cryptocurrency for beginners?
          </h2>{" "}
          <AnimatePresence>
            {IshHovered[2] && (
              <motion.p
                className="text-sm mt-5 text-gray-500"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                We break down complex crypto concepts into simple, step-by-step
                guidance. Our tools offer easy-to-understand insights, making
                cryptocurrency investing accessible to all.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div
          className="faqs-card col-span-4 row-span-15  flex flex-col rounded-lg z-20 justify-center md:p-1 lg:p-3 overflow-hidden items-center cursor-default"
          onMouseEnter={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 3 ? true : item))
            );
          }}
          onMouseLeave={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 3 ? false : item))
            );
          }}
        >
          <h2 className="text-center text-lg text-white font-semibold">
            What business solutions does ROHUM.tech provide?
          </h2>{" "}
          <AnimatePresence>
            {IshHovered[3] && (
              <motion.p
                className="text-sm mt-5 text-gray-500"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                We offer an all-in-one business solution, including task
                automation, workflow management, and collaboration tools to help
                businesses and startups streamline operations.
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div
          className="faqs-card col-span-3 row-span-15 flex flex-col rounded-lg z-20 justify-center md:p-1 lg:p-3 overflow-hidden items-center cursor-default"
          onMouseEnter={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 4 ? true : item))
            );
          }}
          onMouseLeave={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 4 ? false : item))
            );
          }}
        >
          <h2 className="text-center text-lg text-white font-semibold">
            How does ROHUM.tech personalize learning and training?
          </h2>{" "}
          <AnimatePresence>
            {IshHovered[4] && (
              <motion.p
                className="text-sm mt-5 text-gray-500"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                Our platform provides step-by-step lessons in dance, exercise,
                and Kung Fu, adapting to user behavior for a more effective and
                engaging learning experience.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div
          className="faqs-card col-span-3 row-span-35 flex flex-col rounded-lg z-20 justify-center md:p-1 lg:p-3 overflow-hidden items-center cursor-default"
          onMouseEnter={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 5 ? true : item))
            );
          }}
          onMouseLeave={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 5 ? false : item))
            );
          }}
        >
          <h2 className="text-center text-lg text-white font-semibold">
            What differentiates this avatar from existing chatbots or virtual
            assistants?
          </h2>{" "}
          <AnimatePresence>
            {IshHovered[5] && (
              <motion.p
                className="text-sm mt-5 text-gray-500"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                Unlike traditional assistants focused on transactional tasks,
                our avatar combines emotional intelligence with multimodal
                interaction (voice, text, facial expressions). It adapts
                dynamically to users’ emotional states, remembers personal
                preferences, and acts as a proactive companion for mental
                wellness, productivity, and social connection—not just task
                execution.
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div
          className="faqs-card col-span-4 row-span-35 flex flex-col rounded-lg z-20 justify-center md:p-1 lg:p-3 overflow-hidden items-center cursor-default"
          onMouseEnter={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 6 ? true : item))
            );
          }}
          onMouseLeave={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 6 ? false : item))
            );
          }}
        >
          <h2 className="text-center text-lg text-white font-semibold">
            How do you ensure accuracy in emotion detection across diverse
            cultures and demographics?
          </h2>{" "}
          <AnimatePresence>
            {IshHovered[6] && (
              <motion.p
                className="text-sm mt-5 text-gray-500"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                Our AI models are trained on diverse, global datasets to account
                for cultural nuances in expressions, tone, and language. We also
                use reinforcement learning to refine accuracy over time based on
                user feedback. Third-party audits ensure bias mitigation and
                inclusivity.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div
          className="faqs-card col-span-3 row-span-20 flex flex-col rounded-lg z-20 justify-center md:p-1 lg:p-3 overflow-hidden items-center cursor-default"
          onMouseEnter={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 7 ? true : item))
            );
          }}
          onMouseLeave={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 7 ? false : item))
            );
          }}
        >
          <h2 className="text-center text-lg text-white font-semibold">
            What’s the monetization strategy?
          </h2>{" "}
          <AnimatePresence>
            {IshHovered[7] && (
              <motion.p
                className="text-sm mt-5 text-gray-500"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                We use a freemium model: Free tier: Basic emotional support and
                task management. Premium subscription: Advanced features,
                personalized therapy sessions, productivity coaching, VR/AR
                integration. Enterprise partnerships: Licensing to healthcare,
                education, and corporate wellness sectors. In-app purchases:
                Custom avatars, exclusive content.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div
          className="faqs-card col-span-4 row-span-15  flex flex-col rounded-lg z-20 justify-center md:p-1 lg:p-3 overflow-hidden items-center cursor-default"
          onMouseEnter={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 8 ? true : item))
            );
          }}
          onMouseLeave={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 8 ? false : item))
            );
          }}
        >
          <h2 className="text-center text-lg text-white font-semibold">
            How will you address privacy concerns, especially with facial/voice
            data?
          </h2>{" "}
          <AnimatePresence>
            {IshHovered[8] && (
              <motion.p
                className="text-sm mt-5 text-gray-500"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                Data security is core to our design: End-to-end encryption for
                all interactions. On-device processing for sensitive biometric
                data, no cloud storage. Granular user controls to opt out of
                data collection. Compliance with GDPR, CCPA, and HIPAA for
                healthcare integrations.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div
          className="faqs-card col-span-3 row-span-15  flex flex-col rounded-lg z-20 justify-center md:p-1 lg:p-3 overflow-hidden items-center cursor-default"
          onMouseEnter={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 9 ? true : item))
            );
          }}
          onMouseLeave={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 9 ? false : item))
            );
          }}
        >
          <h2 className="text-center text-lg text-white font-semibold">
            What’s the scalability plan for handling millions of users while
            maintaining personalization?
          </h2>{" "}
          <AnimatePresence>
            {IshHovered[9] && (
              <motion.p
                className="text-sm mt-5 text-gray-500"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                Our architecture leverages edge computing for real-time
                emotional analysis and distributed cloud systems to manage
                user-specific memory profiles. As users grow, we’ll use
                federated learning to improve AI models without compromising
                individual data.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div
          className="faqs-card col-span-3 row-span-15  flex flex-col rounded-lg z-20 justify-center md:p-1 lg:p-3 overflow-hidden items-center cursor-default"
          onMouseEnter={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 10 ? true : item))
            );
          }}
          onMouseLeave={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 10 ? false : item))
            );
          }}
        >
          <h2 className="text-center text-lg text-white font-semibold">
            How will you compete with established mental health apps?
          </h2>{" "}
          <AnimatePresence>
            {IshHovered[10] && (
              <motion.p
                className="text-sm mt-5 text-gray-500"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                Unlike traditional assistants focused on transactional tasks,
                our avatar combines emotional intelligence with multimodal
                interaction (voice, text, facial expressions). It adapts
                dynamically to users’ emotional states, remembers personal
                preferences, and acts as a proactive companion for mental
                wellness, productivity, and social connection—not just task
                execution.
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div
          className="faqs-card col-span-7 row-span-15  flex flex-col rounded-lg z-20 justify-center md:p-1 lg:p-3 overflow-hidden items-center cursor-default"
          onMouseEnter={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 12 ? true : item))
            );
          }}
          onMouseLeave={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 12 ? false : item))
            );
          }}
        >
          <h2 className="text-center text-lg text-white font-semibold">
            What’s the long-term vision for this technology?
          </h2>{" "}
          <AnimatePresence>
            {IshHovered[12] && (
              <motion.p
                className="text-sm mt-5 text-gray-500"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                We aim to become the default emotional layer for human-AI
                interaction, expanding into: <br />
                Healthcare: Supporting therapy adherence and remote patient
                monitoring. <br /> Education: Empathetic tutoring avatars for
                students. Enterprise: Enhancing employee well-being and
                productivity. <br />
                Metaverse: Lifelike avatars for immersive social experiences.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div
          className="faqs-card col-span-3 row-span-15 flex flex-col rounded-lg z-20 justify-center md:p-1 lg:p-3 overflow-hidden items-center cursor-default"
          onMouseEnter={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 11 ? true : item))
            );
          }}
          onMouseLeave={() => {
            setIshHovered((prev) =>
              prev.map((item, index) => (index === 11 ? false : item))
            );
          }}
        >
          <h2 className="text-center text-lg text-white font-semibold">
            How will you prove user retention and long-term value?
          </h2>{" "}
          <AnimatePresence>
            {IshHovered[11] && (
              <motion.p
                className="text-sm mt-5 text-gray-500"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                Dynamic content updates: Seasonal updates and programs. <br />
                Gamification: Rewards for achieving emotional well-being goals.{" "}
                <br />
                Social features: Shared avatar experiences in VR spaces.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
      <FaqsSmall IshHovered={IshHovered} setIshHovered={setIshHovered} />
    </div>
  );
};

export default FaqsPage;
