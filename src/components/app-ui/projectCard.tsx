import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";

type ComponentType = {
  detail: string;
  img: string;
  name: string;
};

const ProjectComponent: React.FC<ComponentType> = ({ detail, img, name }) => {
  return (
    <div className="p-0 ">
      <div className="mb-5">
        <Image
          className="w-full h-auto"
          src={`/assets/images/${img}`}
          alt={name}
          height={302}
          width={413}
        />
      </div>
      <div>
        <h1 className="mb-5 text-[18px] font-bold">{name}</h1>
        <p className="leading-8">{detail}</p>
      </div>
    </div>
  );
};

export default ProjectComponent;
