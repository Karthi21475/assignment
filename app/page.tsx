import Hero from "./components/Hero";
import Nav from "./components/Nav";
import grid1 from "./assets/1.svg";
import grid2 from "./assets/2.svg";
import grid3 from "./assets/3.svg";
import grid4 from "./assets/4.svg";
import grid5 from "./assets/5.svg";
import Grid from "./components/Grid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Nav />
      <Hero />
      <br />
      <br />
      <div className="grid grid-rows-2 grid-cols-3 h-[763px] w-[85%] mx-auto gap-6 py-12">
        <div>
          <p className="text-[#9E2349]">About Us</p>
          <h1 className="text-4xl font-[DM_Serif_Display]">
            Lillypad is the only Real Estate Investment tool you need for your
            business
          </h1>
        </div>
        <Grid
          image={grid1}
          heading="Become a Data-Driven Investor"
          para="Lilypads is the cloud-based real estate investment platform that helps you make data-driven investment decisions and assists with reaching your long term investment objectives."
        />
        <Grid
          image={grid2}
          heading="Lilypads can help you make smarter decisions."
          para="Streamline your investment evaluation process and collaborate in reaching your long term investment objectives"
        />
        <Grid
          image={grid3}
          heading="Manager Due Diligence"
          para="Evaluate managers against your objectives using traditional risk metrics with the addition of factor analysis. All it takes is a set of returns"
        />
        <Grid
          image={grid4}
          heading="Optimize Asset Allocation"
          para="Serving a constellation of global subscribers Pension funds, Funds of Funds, Banks, Family offices, Asset managers, Wealth Managers"
        />
        <Grid
          image={grid5}
          heading="Our Subscribers"
          para="Serving a constellation of global subscribers Pension funds, Funds of Funds, Banks, Family offices, Asset managers, Wealth Managers"
        />
      </div>
      <Footer/>
    </div>
  );
}
