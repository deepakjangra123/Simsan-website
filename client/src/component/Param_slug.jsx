import React from "react";
import { useParams, useNavigate ,Navigate} from "react-router-dom";

const Param_slug = () => {
  let { x } = useParams();
  // let navigate = useNavigate();
  console.log(x);
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="error-template">
              <h2>Slug = {x} ERROR</h2>
              {/* when using useNavigate */}
              {/* {x == 0 ? navigate("/contact") : "slug is not 0"} */}
              {/* when using Navigate */}
              {x == 0 ?<Navigate to={"/contact"}/> : "slug is not 0"}
              <div class="error-details">
                Sorry, an error has occured, Requested page not found!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Param_slug;
