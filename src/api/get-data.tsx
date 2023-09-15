export const getPostData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
} 
export const getUserData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
} 