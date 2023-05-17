export interface postData {
    data: {
      userId: number;
      id: number;
      title: string;
      body: string;
    };
  }
  
  export default function Post({ data }: postData) {
    return (
      <main>
        Userid: {data?.id}
        {data?.body}
      </main>
    );
  }
  
  // This gets called on every request
  export async function getServerSideProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
    const data = await res.json();
    // console.log(data);
  
    return {
      props: { data },
    };
  }
  