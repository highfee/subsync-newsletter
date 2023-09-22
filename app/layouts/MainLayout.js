import GeneralNavbar from "@/components/generalNavbar/GeneralNavbar";
import GeneralFooter from "@/components/generalFooter/GeneralFooter";

export default function MainLayout({ children }) {
  return (
    <main>
      <div>
        <GeneralNavbar />
        {children}
      </div>
      <GeneralFooter />
    </main>
  );
}
