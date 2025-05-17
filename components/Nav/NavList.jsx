import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "/", name: "Home" },
  { href: "/", name: "Explore" },
  { href: "/", name: "About" },
  { href: "/", name: "Menu" },
  { href: "/", name: "Contact" },
];

const letterAnim = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.6, 0, 0.2, 0.03],
      delay: i[0],
    },
  }),
  exit: (i) => ({
    opacity: 0,
    y: "100%",
    transition: {
      duration: 0.8,
      ease: [0.6, 0, 0.2, 0.03],
      delay: i[1],
    },
  }),
};

const getLetter = (name) => {
  let letters = [];
  name.split("").forEach((letter, index) => {
    letters.push(
      <motion.span
        variants={letterAnim}
        initial="initial"
        animate="enter"
        exit="exit"
        custom={[index * 0.04, (name.length - index) * 0.01]}
        key={index}
      >
        {letter}
      </motion.span>
    );
  });
  return letters;
};

const NavList = () => {
  return (
    <ul
      className="flex flex-col gap-8 font-primary text-4xl 
    font-semibold text-accent items-center uppercase"
    >
      {links.map((link, index) => {
        return (
          <Link
            href={link.href}
            key={index}
            className="flex-overflow-hidden hover:text-white transition-all duration-300"
          >
            {getLetter(link.name)}
          </Link>
        );
      })}
    </ul>
  );
};

export default NavList;
