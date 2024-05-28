import MessageDetails from '@/components/message/details/MessageDetails';
import Container from '@/components/shared/container/Container';
import React from 'react';

const page = (props) => {
    let id=props.searchParams['id'];
    return (
           <Container>
               <MessageDetails id={id} />
           </Container>
    );
};

export default page;