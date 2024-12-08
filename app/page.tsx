import Appointment from '@/components/sections/Appointment';
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
        <TracingBeam>
          <div className="px-4 xs:px-8 py-10">
            <section className="">
              <Intro />
            </section>

            <section className="">
              <Services />
            </section>

            <section className="">
              <Vehicles />
            </section>

            <section className="">
              <Testimonials />
            </section>

            <section className="h-fit">
              <Appointment />
            </section>
          </div>
        </TracingBeam>
      </div>
    </>
  );
}
