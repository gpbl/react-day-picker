import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";

type Props = {
  docsPluginId?: string;
  label?: string;
  className?: string;
  mobile?: boolean;
  position?: "left" | "right";
  [key: string]: unknown;
};

export default function VersionedPlaygroundNavbarItem({
  docsPluginId: _docsPluginId,
  label = "Playground",
  className,
  mobile = false,
  position,
  ...props
}: Props) {
  const { pathname } = useLocation();
  const to = "/playground";
  const isActive = /^\/playground\/?$/.test(pathname);
  const activeClassName = mobile
    ? "menu__link--active"
    : "navbar__link--active";
  const link = (
    <Link
      {...props}
      className={[
        mobile ? "menu__link" : "navbar__item navbar__link",
        className,
        isActive ? activeClassName : "",
      ]
        .filter(Boolean)
        .join(" ")}
      to={to}
    >
      {label}
    </Link>
  );

  return mobile ? <li className="menu__list-item">{link}</li> : link;
}
