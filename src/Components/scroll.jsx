import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Scroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Scroll effect triggered for:", pathname);
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
