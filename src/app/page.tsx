import CustomButton from "@/components/app-ui/button";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="grid grid-cols-2 gap-[20px] p-[100px]">
        <section className="grid gap-[40px]">
          <h1 className="text-8xl font-black">
            Hi, I am <br />
            Samson Odiagbe
          </h1>
          <p className="leading-9">
            As a seasoned software developer with over 5 years of hands-on
            experience, I have honed my skills and expertise in crafting
            innovative solutions that drive efficiency and excellence in the
            digital realm. From conceptualization to execution, I thrive on
            transforming complex ideas into user-friendly applications that
            exceed expectations. With a keen eye for detail and a passion for
            continuous learning, I am dedicated to pushing the boundaries of
            technology and creating impactful solutions that truly make a
            difference. Let's collaborate and shape the future together.
          </p>
          <div>
            <CustomButton content="Hire me" />
            <CustomButton variant={"outline"} content="Send a message" />
          </div>
        </section>
      </header>
    </>
  );
}
