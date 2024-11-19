import {Header,Card,Container,Button} from "@/components";
import { useData } from "@/hooks";
import Head from "next/head";

export default function Home() {
  const response = useData();
  const {data,isLoading,refetch} = response;
  const {advice,id} = data || {};
  return (
    <>
      <Head>
        <title>Make your day</title>
        <meta name="description" content="A simple advice to make your day"/>
      </Head>
      <Header/>
      <Container>
        <Card advice={advice || ""} loading={isLoading} id={id}/>
        <Button handleClick={refetch}/>
      </Container>
    </>
  );
}
