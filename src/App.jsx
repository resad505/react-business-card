import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <main className="min-h-screen bg-[#23252C] flex items-center justify-center p-4">
      <article className="w-[317px] bg-[#1A1B21] rounded-[10px] overflow-hidden shadow-2xl flex flex-col">
        <Header />
        <Main />
        <Footer />
      </article>
    </main>
  );
}
