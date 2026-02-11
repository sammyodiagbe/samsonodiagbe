import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/data";

interface ProjectComponentProps {
  name: string;
  img: string;
  description: string;
  url: string;
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({
  description,
  img,
  name,
  url,
}) => {
  return (
    <div className="p-0 grid">
      <div className="mb-5">
        <Image
          className="w-full h-auto"
          src={`/assets/images/${img}`}
          alt={name}
          height={302}
          width={413}
        />
      </div>
      <div className="mb-[80px]">
        <h1 className="mb-5 text-[18px] font-bold">{name}</h1>
        <p className="leading-8">{description}</p>
      </div>
      <div className="align-bottom">
        <Link
          href={url}
          className="text-blue-700 font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </Link>
      </div>
    </div>
  );
};

export default ProjectComponent;
