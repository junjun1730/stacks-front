import Image from "next/image";
import { redirect } from "next/navigation";

const Home = () => {
  redirect("/company/list");
  return <h1>Stacks</h1>;
};

export default Home;
