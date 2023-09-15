import { getDogData } from "@/api/get-data";
import Image from "next/image";

export default async function ListOfPosts() {
    const [dogs] = await Promise.all([ getDogData()]);

    return(
        <div className="flex flex-col">
            <Image src={dogs.message} alt="dog" width={300} height={300}/>
            {/* {posts.map((post: any)=> {
                // eslint-disable-next-line react/jsx-key
                return <p>{post.title}</p>;
            })}
            <div>
            {users.map((user: any)=> {
                // eslint-disable-next-line react/jsx-key
                return <p>{user.name}</p>;
            })}  
            </div> */}
        </div>
    )
}