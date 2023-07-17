import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserImages } from "../../actions/imageAction";
import SimpleImageSlider from "react-simple-image-slider";
import ModalDialog from './Modal';
import { toBeRequired } from "@testing-library/jest-dom/matchers";

function Home() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [image, Setimage] = useState();

  const { images } = useSelector((state) => state.image);
  console.log("images", images);

  useEffect(() => {
    dispatch(getUserImages());
  }, []);

  const handleImage = (id, e) => {
    console.log('id',images.filter(img => img.id === id));
    Setimage(images[id].url);
    setOpen(true);
  }

  const modalClose = () => setOpen(false);  
  return (
    <div className="container-fluid">
      <div className="row">
            <SimpleImageSlider
                  width={"100%"}
                  height={"100vh"}
                  images={images}
                  showNavs={true}
                  onClick={handleImage}
                  showBullets={true}
              />
        {/* {images.map((image, i) => {
          return (
            <div className="col-md-4 my-3" key={i}>
              <div class="card">
                <div class="card-body">
                  <img src={image.url} className="w-100"/>
                </div>
              </div>
            </div>
          );
        })} */}
        <ModalDialog image={image} open={open} modalClose={modalClose}/>
      </div>
    </div>
  );
}

export default Home;