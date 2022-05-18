import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://helpx.adobe.com/content/dam/help/en/photoshop/how-to/compositing/jcr%3acontent/main-pars/image/compositing_1408x792.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://helpx.adobe.com/content/dam/help/en/photoshop/how-to/compositing/jcr%3acontent/main-pars/image/compositing_1408x792.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a first meetup!",
  },
];

const Homepage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default Homepage;
