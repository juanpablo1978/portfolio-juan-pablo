import Hero from "@/components/Hero";
import Projects from "@/components/CardProjects";
import Testimonials from "@/components/Testimonials";

const page = () => {
  return (
    <main className="bg-zinc-50 flex justify-center flex-col px-6">
      <Hero />
      <div className="md:flex md:flex-wrap md:gap-10 md:my-10 lg:justify-center">
        <Projects />
      </div>
         <Testimonials />
      
       
    
     
    </main>
  );
}

export default page