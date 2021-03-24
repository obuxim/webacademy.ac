
import Brand from "../Components/Homepage/Brand";
import CourseTutorials from "../Components/Homepage/Course-Tutorials";
import Facilities from "../Components/Homepage/Facilities";
import FeatureCat from "../Components/Homepage/Feature-cat";
import FeatureCourse from "../Components/Homepage/Feature-Course";
import Hero from "../Components/Homepage/Hero";
import Testimonial from "../Components/Homepage/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCourse />
      <FeatureCat />
      <Facilities />
      <CourseTutorials />
      <Testimonial />
      <Brand />
    </>
  )
}
