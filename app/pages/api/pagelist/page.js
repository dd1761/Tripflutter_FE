import {connectDB} from "@/utils/database";
import PageList from "./pagelist";

export default async function page(){
    const db = (await connectDB).db('forum');
    let result = await db.collection('post').find().toArray();

    console.log(PageList);

    return (
        <div className="list-bg">
            {
                result.map((a, i) => {
                    return (
                        <div className="list" key={i}>
                            <div className="list-title">{a.title}</div>

                        </div>
                    )
                })
            }
        </div>
    )

}