import { Button } from "../ui/button";

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
};
const CustomButton: React.FC<ButtonType> = ({ variant, content }) => {
  return (
    <Button variant={variant} className="py-[30px] mr-2 w-[250px] rounded-full">
      {content}
    </Button>
  );
};

export default CustomButton;
