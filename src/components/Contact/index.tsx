"use client";

import React, { useRef, useState, Suspense, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import toast from "react-hot-toast";
import Image from "next/image";

import Logo from "../../../public/astronaut.webp";
import { useThemeContext } from "@/providers/ThemeColor";
import { useTranslation } from "@/providers/TranslateProvider";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { currentTheme } = useThemeContext();
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (
      form.name.length === 0 ||
      form.email.length === 0 ||
      form.message.length === 0
    ) {
      setLoading(false);
      return toast.error("Missing input");
    }
    emailjs
      .send(
        "service_jyhly6j",
        "template_nphzdk9",
        {
          from_name: form.name,
          to_name: "Phong Phạm",
          from_email: form.email,
          to_email: "phong.thanh971997@gmail.com",
          message: form.message,
        },
        "MY9xl5ESKec1cMU-p"
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Thank you!");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);
          setLoading(false);
          toast.error("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      id="contact"
      className="pt-0 lg:pt-52 pb-20 w-full grid grid-cols-1 lg:grid-cols-10 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{
          x: -150,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        className=" bg-black-100 p-8 rounded-2xl col-span-4 hidden lg:block z-10 bg-[#100d25]"
      >
        <p className="text-gray-400 text-lg m-auto">{t("get-in-touch")}</p>
        <h3 className="text-4xl font-bold uppercase tracking-widest my-4 text-stone-100">
          {t("contact")}
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {t("your-name")}
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t("what-your-name")}
              className="bg-gray-400/60 py-4 px-6 placeholder:text-secondary text-stone-100 rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {t("your-email")}
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t("what-your-email")}
              className="bg-gray-400/60 py-4 px-6 placeholder:text-secondary text-stone-100 rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {t("your-message")}
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t("text-message")}
              className="bg-gray-400/60 py-4 px-6 placeholder:text-stone-100 text-stone-100 rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className={`py-2 px-8 border rounded flex justify-center items-center bg-tertiary  w-fit text-white font-bold shadow-md shadow-primary `}
          >
            <div
              className={`spinning ease-linear rounded-full border-2 border-t-2 h-4 w-4 mr-1 ${
                loading ? "block" : "hidden"
              }`}
            ></div>
            {t("send")}
          </button>
        </form>
      </motion.div>
      <motion.div
        initial={{
          y: -150,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex relative col-span-6"
      >
        <Canvas className="">
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2}>
              <MeshDistortMaterial
                color={`${currentTheme.bgDark}`}
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Suspense>
        </Canvas>
        <Image
          className="w-80 h-96 lg:w-[450px] lg:h-[350px] object-contain absolute top-0 bottom-8 left-8 right-0 m-auto animation"
          src={Logo}
          alt="logo"
        />
      </motion.div>
      <motion.div
        initial={{
          x: -150,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        className=" bg-black-100 p-8 rounded-2xl col-span-4 lg:hidden"
      >
        <p className="text-gray-400 text-lg m-auto">Get in touch</p>
        <h3 className="text-4xl font-bold uppercase tracking-widest my-4">
          Contact
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className={`py-2 px-8 border rounded flex justify-center items-center bg-tertiary  w-fit text-white font-bold shadow-md shadow-primary `}
          >
            <div
              className={`spinning ease-linear rounded-full border-2 border-t-2 h-4 w-4 mr-1 ${
                loading ? "block" : "hidden"
              }`}
            ></div>
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
