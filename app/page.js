import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      {/* <Modal /> */}
      <Navbar />
    </>
  );
}
