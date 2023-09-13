import { useRouter } from 'next/router'
 
export default function PostDetails() {
  const router = useRouter()
  return <p>Post: {router.query.slug}</p>
}