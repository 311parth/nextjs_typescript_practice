export interface postData {
  data: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
}

export default function Home({ data }: postData) {
  return (
    <main>

      {Array.from({ length: 15 }, (_, index) => (
        <>
        <a href={`/post/${index + 1}`} key={index} target="_blank">
          Post {index + 1}
        </a>
        <br/>
        
        </>
      ))}
    </main>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
  const data = await res.json();
  console.log(data);

  return {
    props: { data },
  };
}
