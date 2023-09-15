export const getDogData = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    return res.json();
} 
export const getPostData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
} 
export const getUserData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
} 