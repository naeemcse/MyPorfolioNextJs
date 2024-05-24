import React from 'react';
import Container from "@/components/shared/container/Container";
import WrittingField from "@/components/blog/WrittingField";
import Postproject from "@/components/project/write/Postporject";
const Page = () => {
    return (
        <Container>
            <div>
            <h3 className="text-center mb-5"> Post a New Project  </h3>
          </div>
            <div>
              <Postproject/>
            </div>
        </Container>
    );
};

export default Page;