import GeneralNavbar from "@/components/generalNavbar/GeneralNavbar";

export default function AuthLayout({ children }) {
  return (
    <main>
      <div className="relative min-h-[100dvh]">
        <GeneralNavbar />
        {children}
      </div>
    </main>
  );
}
