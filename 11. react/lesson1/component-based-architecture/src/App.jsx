import Header from "./header";
import UserCard from "./UserCard";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />

      <UserCard name="Param" age={25} />
      <UserCard name="Viany" age={30} />
      <UserCard name="Chirag" age={28} />

      <Footer />
    </div>
  );
}

export default App;