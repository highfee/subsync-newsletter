import UserNavbar from "@/components/userNavbar/userNavbar";

export default function UserLayout({ children }) {
  return (
    <main>
      <UserNavbar />
      {children}
    </main>
  );
}
