import Head from 'next/head';

import Date from '../../components/date';
import Layout from '../../components/Layout';
import { PostProps } from './[id]';

export default function Post({ postData }: PostProps) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            {postData.title}
            <br />
            {postData.id}
            <br />
            <Date dateString={postData.date} />
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    );
}
