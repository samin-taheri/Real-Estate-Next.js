export const getPostData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error('Failed to fetch user data');
      }
      return res.json();
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error; // You can choose to rethrow the error if needed
    }
  };
  
export const getUserData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) {
        throw new Error('Failed to fetch user data');
      }
      return res.json();
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error; // You can choose to rethrow the error if needed
    }
  };
  