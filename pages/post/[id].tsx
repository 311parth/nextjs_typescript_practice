import { useRouter } from 'next/router';

export interface postData {
  data: {
    userId: number;
    id: number;
    title: string;
    body: string; 
  };
}

export default function Page({ data }: postData) {
  const router = useRouter();
  const { query } = router;
  const postId = query.id as string;
  
  return (
    <main>
      <h3>{data?.title}</h3>
    <p>
      {data?.body}
    </p>
    </main>
  );
}

export async function getServerSideProps({ params }: any) {
  const { id } = params;
  

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  // console.log(data);

  if(res.status!==200){
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { data },
  };
}
