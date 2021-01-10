import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div 
      className="left-column"
      style={{
        background: "url(" + profilePicture + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      />
      <div className="right-column">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum
        enim augue, a feugiat neque eleifend vel. Nunc aliquam dignissim semper.
        Duis tristique commodo est, at rutrum est lacinia vitae. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Mauris in luctus sem. Ut facilisis, risus efficitur aliquet
        commodo, ante elit ornare quam, at sodales ipsum elit eu nisi. Duis
        vehicula sodales rhoncus. Fusce vehicula luctus ex, sed rhoncus quam.
        Suspendisse imperdiet nunc tellus, nec vulputate eros sollicitudin id.
        Pellentesque quis est maximus, fermentum turpis sit amet, condimentum
        dui. Mauris vel tellus lectus. Fusce ac semper dui. Pellentesque sit
        amet facilisis libero, non ullamcorper elit. Nunc placerat vitae nisl eu
        aliquam. In a leo a nibh sollicitudin pharetra. In interdum purus in
        aliquet elementum. Phasellus pharetra elementum suscipit. Duis vitae
        quam congue, pretium sem ut, aliquam mi. Curabitur eget eros vitae lorem
        placerat convallis. Suspendisse sagittis ultrices bibendum. Integer
        vestibulum dui sed justo elementum lacinia. Fusce at sem vel purus
        vulputate condimentum. Donec id tincidunt felis, non interdum massa.
        Nulla at libero nec purus maximus aliquam. Maecenas ut est tellus.
        Aenean dapibus est nec felis euismod, ut bibendum tortor feugiat. Etiam
        ipsum nibh, pellentesque in molestie eu, ultrices non tellus. Vivamus
        nec metus lectus. Curabitur luctus nulla risus, sed tristique quam
        accumsan ac. Nullam eu odio consectetur, dignissim erat id, hendrerit
        metus. Etiam at dolor sed nunc dignissim placerat.
      </div>
    </div>
  );
}
