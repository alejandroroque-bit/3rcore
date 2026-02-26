import ClientsSection from "@/components/layout/ClientSection";
import ContactForm from "@/components/layout/ContactForm";
import ProjectsSection from "@/components/sections/home/ProjectsSection";
import FeaturesSection from "@/components/sections/servicios/featuresSection";
import HeroServicios from "@/components/sections/servicios/heroServicios";
import ServiceAbout from "@/components/sections/servicios/serviciesAbout";

export default function Servicios() {
  return (
    <main>
      <ServiceAbout></ServiceAbout>
      <FeaturesSection></FeaturesSection>
      <ProjectsSection/>
      <ClientsSection/>
      <ContactForm></ContactForm>
      
    </main>
  );
}