import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const Homepage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

/*
// 요청이 들어올 때 마다 실행 -> 요청이 들어올 때까지 페이지가 만들어지길 기다려야함
// 매초 여러 번 바뀌는 데이터를 가지고 있을 때 사용
export const getServerSideProps = async (context) => {
    //context로 요청객체 접속 가능 
  const req = context.req;
  const res = context.res;

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
};
*/

// revalidate 시간마다 실행
// 데이터를 다시 만들고 패치하는 것보다 빠르다. -> 캐시하고 다시 사용하기에
export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://123:Cgjqv93Nzs1OrsoJ@cluster0.jyvgm.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
};

export default Homepage;
