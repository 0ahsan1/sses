import Link from "next/link";

export default function Sidebar({ data }) {
  const handleToggled = () => {
      document.body.classList.remove("mobile-menu-visible");
  };
  return (
    <>
      <ul className="navigation">
        {data && data.map((menu, index) => {
          return (
            <li key={index}>
              <Link href={menu.link} onClick={handleToggled}>{menu.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
