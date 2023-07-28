import {Dropdown} from "primereact/dropdown";
import {useEffect, useState} from "react";
import {useNewsStore} from "store/zustand/news";
import {useSourcesStore} from "store/zustand/sources";

export default function Filter() {
  const [selected, setSelected] = useState("bbc-news");
  const sources = useSourcesStore();
  const news = useNewsStore();
  useEffect(() => {
    sources.fetchData();
  }, []);
  console.log(sources.data);
  return (
    <>
      <div className="mb-5">
        <div className="row">
          <div className="col-md-6">
            <div>
              <Dropdown
                value={selected}
                onChange={(e) => {
                  console.log(e.value);
                  news.fetchData(e.value);
                  setSelected(e.value);
                }}
                options={sources.data}
                optionLabel="name"
                optionValue="id"
                placeholder={"Sources"}
                className={`w-100 `}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <p className="h6 mb-3">Category</p> */}
      {/* <div>
        {categories.map((category) => {
          return (
            <>
              <span className="btn btn-sm btn-light me-3">{category}</span>
            </>
          );
        })}
      </div> */}
    </>
  );
}
