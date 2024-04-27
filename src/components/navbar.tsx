import Link from "next/link";
import { BiSolidMessage } from "react-icons/bi";
import { BsInstagram, BsMailbox, BsTwitter, BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const NavbarComponent = () => {
  return (
    <nav className="flex justify-between px-[100px] py-[30px] sticky top-0 bg-white">
      <h1 className="font-black text-2xl">samsonodiagbe</h1>

      <ul className="flex min-w-[300px] justify-between">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/"}>Portfolio</Link>
        </li>
        <li>
          <Link href={"/"}>Contact</Link>
        </li>
      </ul>
      <ul className="flex w-[150px] justify-between">
        <li>
          <Link href={""}>
            <BsInstagram size={25} />
          </Link>
        </li>
        <li>
          <Link href={""}>
            <BsTwitterX size={25} />
          </Link>
        </li>
        <li>
          <Link href={""}>
            <MdEmail size={25} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
