// @ts-ignore
import React from 'react';
import hljs from "highlight.js";
import parse, { domToReact } from 'html-react-parser';
//import 'highlight.js/styles/github.css'; // Choose a style you like
const BlogDetails = ({body}) => {
    const options = {
        replace: ({ name, children, attribs }) => {
            if (name === 'pre' && children[0].name === 'code') {
                const languageClass = children[0].attribs.class;
                const codeString = domToReact(children[0].children);
                if (languageClass && languageClass.startsWith('language-')) {
                    const language = languageClass.replace('language-', '');
                    return (
                        <pre>
                            <code
                                className={`hljs language-${language}`}
                                dangerouslySetInnerHTML={{
                                    __html: hljs.highlight(codeString, { language }).value,
                                }}
                            />
                        </pre>
                    );
                }
                return (
                    <pre>
                        <code
                            // className="hljs "
                            dangerouslySetInnerHTML={{
                                __html: hljs.highlightAuto(codeString).value,
                            }}
                        />
                    </pre>
                );
            }
        },
    };

    return (
        <div>
            {parse(body, options)}
        </div>
    );
};

export default BlogDetails;