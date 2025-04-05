import { useState } from "react";

export const useToggleMenuHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuHamburger = () => setIsOpen((prev) => !prev);

  return { isOpen, toggleMenuHamburger };
};