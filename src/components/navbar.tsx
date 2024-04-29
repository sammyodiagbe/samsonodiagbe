import Link from "next/link";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const NavbarComponent = () => {
  return (
    <nav className="flex justify-between px-[100px] py-[30px] sticky top-0 bg-white">
      <h1 className="font-black text-2xl">samsonodiagbe</h1>

      <ul className="flex min-w-[300px] justify-between">
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
      <ul className="flex w-[100px] justify-between">
        <li>
          <Link href={"https://www.instagram.com/bluapedev/"}>
            <BsInstagram size={25} />
          </Link>
        </li>
        <li>
          <Link href={"https://www.twitter.com/samiodiagbe/"}>
            <BsTwitterX size={25} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
