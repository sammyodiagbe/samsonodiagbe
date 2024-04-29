import AnimatedComponent from "@/components/app-ui/animatedComponent";
import CustomButton from "@/components/app-ui/button";
import FormComponent from "@/components/app-ui/formComponent";
import ProjectComponent from "@/components/app-ui/projectCard";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/data";

export default function Home() {
  return (
    <>
      <header className="grid grid-cols-2 gap-[20px] p-[100px]" id="about-me">
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
            <CustomButton content="Download My Resume" />
            <CustomButton variant={"outline"} content="Send Message" />
          </div>
        </section>
        <section className="flex items-center justify-center">
          <AnimatedComponent />
        </section>
      </header>
      <div className="p-[100px]" id="portfolio">
        <h1 className="text-8xl font-black w-[700px] text-center mx-auto mb-[100px]">
          Some of my projects
        </h1>
        <div className="grid grid-cols-3 gap-[30px]">
          {portfolioData.map((p) => {
            const { name, detail, img, url } = p;
            return (
              <ProjectComponent
                detail={detail}
                name={name}
                img={img}
                key={name}
                url={url}
              />
            );
          })}
        </div>
      </div>
      <div
        className="p-[100px] grid grid-cols-[1fr_700px] gap-[20px]"
        id="contact"
      >
        <section className="grid gap-[30px]">
          <h1 className="text-8xl font-black">
            I would love <br />
            to hear from you
          </h1>
          <p className="leading-8">
            Getting feedbacks is one thing i love because this is how i learn to
            understand what needs to change, how i need to improve and develop
            as a software developer so yeah feel free to send me a shoutout, or
            if you want to collaborate on a project you are currently working on
            that would be very awesome. :) Feel free to send in your words of
            encouragement and critism if your have any ( cause that is where
            growth actually is)
          </p>
        </section>
        <FormComponent />
      </div>
    </>
  );
}
