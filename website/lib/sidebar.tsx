import { useRouter } from "next/router";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useId,
  useState,
} from "react";

interface SidebarContextProps {
  id: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextProps>({
  id: "sidebar",
  isOpen: false,
  setIsOpen: () => {},
});

export function SidebarProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();
  const router = useRouter();

  useEffect(() => {
    const close = () => setIsOpen(false);
    router.events.on("routeChangeComplete", close);
    window.addEventListener("resize", close);
    return () => {
      router.events.off("routeChangeComplete", close);
      window.removeEventListener("resize", close);
    };
  }, [router.events]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, id }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SectionProvider");
  }
  return context;
}
