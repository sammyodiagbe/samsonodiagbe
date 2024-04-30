import { CgSpinner } from "react-icons/cg";
import { Button } from "../ui/button";

type ElementType = {
  sendingEmail?: boolean;
};

type ButtonType = {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null;
  content: string;
  sendingEmail?: boolean;
};
const CustomButton: React.FC<ButtonType> = ({
  variant,
  content,
  sendingEmail,
}) => {
  return (
    <Button variant={variant} className="py-[30px] mr-2 w-[250px] rounded-full">
      {sendingEmail ? <CgSpinner className=" animate-spin" /> : content}
    </Button>
  );
};

export default CustomButton;
