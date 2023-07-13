import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserImages } from "../../actions/imageAction";

function Home() {
  const dispatch = useDispatch();
  const { images } = useSelector((state) => state.image);
  console.log("images", images);

  useEffect(() => {
    dispatch(getUserImages());
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        {images.map((image, i) => {
          return (
            <div className="col-md-4 my-3" key={i}>
              <div class="card">
                <div class="card-body">
                  <img src={image.url} className="w-100"/>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
