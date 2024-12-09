import Appointment from '@/components/sections/Appointment';
import Intro from '@/components/sections/Intro';
import ModeBtn from '@/components/sections/ModeBtn';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import Vehicles from '@/components/sections/Vehicles';
import { TracingBeam } from '@/components/ui/tracing-beam';
//TracingBeam element has max-w-7xl for main container
export default function Home() {
  return (
    <>
      <div className="h-auto">
        <TracingBeam>
          <div className="px-4 xs:px-8 py-10 relative">
          <ModeBtn/>  
            <section className="">
              <Intro />
            </section>

            <section className="mt-10">
              <Services />
            </section>

            <section className="mt-10">
              <Vehicles />
            </section>

            <section className="mt-10">
              <Testimonials />
            </section>

            <section className="h-fit mt-10">
              <Appointment />
            </section>
          </div>
        </TracingBeam>
      </div>
    </>
  );
}
