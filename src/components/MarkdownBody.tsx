import {ReactMarkdown} from 'react-markdown/lib/react-markdown';

const MarkdownBody = ({body}: {body: string}) => {
    return <ReactMarkdown children={body} />;
    // components={{
    //     code({inline, className, children, ...props}) {
    //         const match = /language-(\w+)/.exec(className || '');
    //         return !inline && match ? (
    //             //   <SyntaxHighlighter
    //             //     language={match[1]}
    //             //     PreTag="div"
    //             //     {...props}
    //             //     style={docco}
    //             //   >
    //             //     {String(children).replace(/\n$/, '')}
    //             //   </SyntaxHighlighter>
    //             <div>ss</div>
    //         ) : (
    //             <code className={className} {...props}>
    //                 {children}
    //             </code>
    //         );
    //     },
    // }}
};

export default MarkdownBody;
