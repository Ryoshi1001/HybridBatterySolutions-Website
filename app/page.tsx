import Appointment from '@/components/sections/Appointment';
import Hero from '@/components/sections/Hero';
import Intro from '@/components/sections/Intro';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import Vehicles from '@/components/sections/Vehicles';
import { TracingBeam } from '@/components/ui/tracing-beam';

//TracingBeam element has max-w-7xl for main container


export default function Home() {
  return (
    <>
      <div className="h-auto">
        <section className="">
          <Hero />
        </section>
        <TracingBeam>
          <div className="px-4 xs:px-8 py-10 relative">
            <section className="">
              <Intro />
            </section>

            <section className="mt-4">
              <Services />
            </section>

            <section className="mt-4">
              <Vehicles />
            </section>

            <section className="mt-4">
              <Testimonials />
            </section>

            <section className="h-fit mt-4">
              <Appointment />
            </section>
          </div>
        </TracingBeam>
      </div>
    </>
  );
}
