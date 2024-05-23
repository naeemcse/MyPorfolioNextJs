import React from 'react';
import UpdateField from "@/components/blog/update/UpdateField";
import Container from "@/components/shared/container/Container";

async function getData(id) {
    let post = (await (await fetch(`${process.env.HOST}/api/blog/details/?id=${id}`)).json())['data'];
    return { post: post };
}
const Page = async (props) => {
    let id=props.searchParams['id'];
    let data=await getData(id);
    return (
        <Container>

            <UpdateField post={data.post}/>
            {/*{JSON.stringify(data.post)}*/}

        </Container>
    );
};

export default Page;