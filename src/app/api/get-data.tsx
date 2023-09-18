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
  

    // async function getCharacters(params: any): Promise<any> {
  //   try {
  //     const response = await fetch("https://rickandmortyapi.com/api/character");
  //     if (!response.ok) {
  //       throw new Error(`Fetch failed with status ${response.status}`);
  //     }
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     console.error("Error fetching characters:", error);
  //     throw error;
  //   }
  // }