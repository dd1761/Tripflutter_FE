import {connectDB} from "@/utils/database";
import {ObjectId} from "bson";

export default async function Detail(props: any){

    const db = (await connectDB).db('forum');
    let result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)})

    console.log(props.params._id);
    return (
        <div>
            <h4>상세 페이지</h4>
            <h4>글 제목</h4>
            <p>글 내용</p>
        </div>
    )
}