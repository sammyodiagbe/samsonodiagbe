import Link from "next/link";
import { BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const NavbarComponent = () => {
  return (
    <nav className="p-[30px] flex justify-between lg:px-[100px] py-[30px] sticky top-0 bg-white z-20">
      <h1 className="font-black text-2xl">samsonodiagbe</h1>

      <ul className="hidden lg:flex min-w-[300px] justify-between">
        <li>
          <Link href={"#about-me"}>About me</Link>
        </li>
        <li>
          <Link href={"#portfolio"}>Portfolio</Link>
        </li>
        <li>
          <Link href={"#contact"}>Contact</Link>
        </li>
      </ul>
      <ul className="flex justify-between">
        <li className="mr-2">
          <Link href={"https://www.instagram.com/bluapedev/"}>
            <BsInstagram size={25} />
          </Link>
        </li>
        <li className="mr-2">
          <Link href={"https://www.twitter.com/samiodiagbe/"}>
            <BsTwitterX size={25} />
          </Link>
        </li>
        <li>
          <Link href={"https://www.github.com/sammyodiagbe/"}>
            <BsGithub size={25} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
