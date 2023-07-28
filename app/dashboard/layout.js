import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Header />
          <div className="h-screen px-8 pt-8 pb-[7rem] overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
