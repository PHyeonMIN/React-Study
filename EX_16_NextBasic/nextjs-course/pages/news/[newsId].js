//our-domain.com/news/something-important
//[].js : 동적 경로
import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();

  // 동적 경로 세그먼트의 구체적인 값에 접근 
  // 라우터는 페이지를 처음 렌더링할 때 즉시 실행되는데 이 시점에서는 URL이 무엇인지 몰라서 undefined가 뜸
  // 해당 정보가 들어오면 컴포넌트는 다시 렌더링하고 구체적인 값을 얻음
  console.log(router.query.newsId);

  const newsId = router.query.newsId;

  return <h1>The Detail Page</h1>;
};

export default DetailPage;
