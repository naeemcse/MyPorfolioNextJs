import React from 'react';
import UpdateField from "@/components/blog/update/UpdateField";
import Container from "@/components/shared/container/Container";
import UpdateProject from "@/components/project/update/UpdateProject";

async function getData(id) {
    let post = (await (await fetch(`${process.env.HOST}/api/project/details/?id=${id}`)).json())['data'];
    return { post: post };
}
const Page = async (props) => {
    let id=props.searchParams['id'];
    let data=await getData(id);
    return (
        <Container>
            {/*<UpdateField post={data.post}/>*/}
          <UpdateProject post={data.post} />
        </Container>
    );
};

export default Page;