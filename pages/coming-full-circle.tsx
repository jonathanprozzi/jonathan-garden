import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import Layout from '../components/Layout';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';

const ComingFullCircle = () => {
  return (
    <Layout>
      <h1>🌱 jonathan prozzi's digital garden: sprouting soon 🌱</h1>
      <h2>musician, learner, educator, technologist</h2>
    </Layout>
  );
};

export default ComingFullCircle;
