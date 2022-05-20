import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    // jest객체는 테스팅 코드 내에서 전역적으로 활용 가능
    window.fetch = jest.fn(); // fn() : mock함수(더미)를 만듬
    window.fetch.mockResolvedValueOnce({
      // fetch 함수가  호출되었을 떄 결정되어야하는 값을 설정
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    //find : get과 달리 프로미스를 반환 // 리액트 테스팅 라이브러리는 이 과정이 성공할 때까지 screen을 여러차례 재평가
    // 두번째인자 exact / 세번째인자 timeout
    expect(listItemElements).not.toHaveLength(0);
  });
});
