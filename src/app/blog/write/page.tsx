import React from 'react';
import Container from "@/components/shared/container/Container";
import WrittingField from "@/components/blog/WrittingField";
const Page = () => {
    return (
        <Container>
            <div>
            <h3 className="text-center mb-5"> Write a blog  </h3>
          </div>
            <div>
               <WrittingField/>
            </div>
        </Container>
    );
};

export default Page;