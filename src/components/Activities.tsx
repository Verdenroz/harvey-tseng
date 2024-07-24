import gswep from "../assets/gswep.png";
import headstarter from "../assets/headstarter.png";

interface ActivityProps {
  name: string;
  description: string;
  img: string;
}

const ActivityCard = ({ name, description, img }: ActivityProps) => {
  return (
    <div className="flex flex-col items-center">
          <img
            src={img}
            alt={name}
            className="w-48 h-48 rounded-3xl object-cover"
          />
        <h2 className="text-2xl font-bold font-display mt-2">
          {name}
        </h2>
      <p className="text-lg text-[#43474C]">{description}</p>
    </div>
  );
};

const Activities = () => {
  return (
    <section className="w-full rounded-2xl p-8 bg-[#f5f5f5]">
      <h1 className="text-3xl font-bold font-display text-center">
        🌟Current Activities🌟
      </h1>
      <div className="flex flex-wrap gap-16 mt-8 px-4 items-stretch justify-around">
        <ActivityCard
          name="GSWEP"
          description="Mentoring under Google SWE"
          img={gswep}
        />
        <ActivityCard
          name="Headstarter AI"
          description="7-Week Tech Fellowship"
          img={headstarter}
          />
      </div>
    </section>
  );
};

export default Activities;
