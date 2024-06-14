import React from 'react';
import Link from 'next/link';

interface BlogEntryProps {
  imageUrl: string;
  date: { day: number; year: number; month: string };
  title: string;
  excerpt: string;
  author: string;
  commentsCount: number;
}

const BlogEntry: React.FC<BlogEntryProps> = ({ imageUrl, date, title, excerpt, author, commentsCount }) => (
  <div className="col-md-6 col-lg-4 d-flex ftco-animate">
    <div className="blog-entry">
      <Link href="/single" passHref>
        <a className="block-20" style={{ backgroundImage: `url(${imageUrl})` }} />
      </Link>
      <div className="text float-right d-block">
        <div className="d-flex align-items-center pt-2 mb-4 topp">
          <div className="one mr-2">
            <span className="day">{date.day}</span>
          </div>
          <div className="two">
            <span className="yr">{date.year}</span>
            <span className="mos">{date.month}</span>
          </div>
        </div>
        <h3 className="heading">
          <Link href="/single">
            <a>{title}</a>
          </Link>
        </h3>
        <p>{excerpt}</p>
        <div className="d-flex align-items-center mt-4 meta">
          <p className="mb-0">
            <Link href="/single">
              <a className="btn btn-primary">
                상세보기 <span className="ion-ios-arrow-round-forward" />
              </a>
            </Link>
          </p>
          <p className="ml-auto mb-0">
            <Link href="#">
              <a>{author}</a>
            </Link>
            <Link href="#" className="meta-chat">
              <span className="icon-chat" /> {commentsCount}
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default BlogEntry;
