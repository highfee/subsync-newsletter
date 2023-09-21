import GeneralNavbar from "@/components/generalNavbar/GeneralNavbar";

export default function AuthLayout({ children }) {
  return (
    <main>
      <div>
        <GeneralNavbar />
        {children}
      </div>
    </main>
  );
}
