import { getPostData } from "@/app/api/get-data";

export default async function ListOfPosts() {
    const [posts] = await Promise.all([ getPostData()]);

    return(
        <div className="flex flex-col">
            {posts.map((post: any)=> {
                // eslint-disable-next-line react/jsx-key
                return <p>{post.title}</p>;
            })}
        </div>
    )
}