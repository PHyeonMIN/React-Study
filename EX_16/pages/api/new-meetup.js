// API라우트는 서버에서만 돌아감
// /api/new-meetup 요청이 오면 함수가 트리거됨.

import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  // node.js와 express.js에서 받을 것
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect();
    const db = client.db();

    // MongoDB는 문서들로 가득 찬 컬렉션을 작동시키는 NoSQL 데이터 베이스가 된다.
    // 컬렉션은 SQL 데이터베이스에 있는 tables, 문서는 해당 tables의 항목
    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    
    client.close();

    // 되돌아오는 응답의 HTTP status 코드를 설정하기 위해 응답을 호출
    res.status(201).json({message:'Meetup inserted!'});
  }
};

export default handler;
