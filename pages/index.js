import Filter from "components/Filter";
import Image from "next/image";
import Link from "next/link";
import {useEffect} from "react";
import {useNewsStore} from "store/zustand/news";

export default function Home() {
  const news = useNewsStore();

  useEffect(() => {
    news.fetchData("bbc-news");
  }, []);

  console.log(news.data);

  return (
    <>
      <section>
        <div className="container">
          <div className="col-md-12">
            <div className="text-center my-5">
              <h3>New API Implementation</h3>
            </div>
            <div className="mb-3">
              <h1 className="h4 text-dark mb-3">Sources</h1>
              <div>
                <Filter />
              </div>
            </div>
            <div className="row">
              {news.data?.map((post) => {
                return (
                  <>
                    <Link
                      className="col-lg-4 col-lg-3 mb-3 pointer transition-up"
                      href={post.url}
                      target="_blank"
                    >
                      <div className="card h-100 border-0 shadow">
                        <div className="card-body">
                          <div>
                            <p className="text-muted fw-semibold">
                              By: {post.author}
                            </p>
                          </div>
                          <h5 className="fs-5 fw-semibold mb-3">
                            {post.title}
                          </h5>
                          <div className="">{post.description}</div>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
