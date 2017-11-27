import React from "react";

import AnnieMirror from "../../assets/images/annie_mirror_small.jpg";

export default function About() {
  return (
    <div className="offset-content -large row">
      <div className="col-1-2 break-small-col-1-1 hide-small">
        <img
          className="image -full"
          src={AnnieMirror}
          alt="Phinney Home Interiors - Annie Doornink"
        />
      </div>
      <div className="col-1-2 break-small-col-1-1">
        <h2 className="description-header">
          At Phinney Home Interiors we want to help you love your home.
        </h2>
        <p className="description-body">
          So often we find that clients want their home to be beautiful and
          functional, but they aren’t exactly sure how to make that happen.
          Phinney Home Interiors will come alongside you to help you figure out
          how to make your space work for you and your family.
        </p>
        <p className="description-body">
          Being based in Seattle, we know that many people feel like they are
          outgrowing their home, but it’s not financially possible to buy a
          bigger house. We love to create space where you feel like there isn’t
          any by adding the extra storage you need or squeezing a home office
          into your space. We want you to love the home that you are in!
        </p>
        <p className="description-body">
          Phinney Home Interiors would love to help you with your next project,
          whether that is picking a paint color for your bedroom, planning your
          new kitchen, selecting new furniture or accessories for your home, or
          simply helping you brainstorm better ways to use your space, we are
          happy to help! We want to help you find your style, organize your home
          and give you a place that you are happy to come home to each evening.
        </p>
        <div className="cursive color-green large-type">annie doornink</div>
        <div className="description-body">Owner {"//"} Lead Designer</div>
        <div className="offset-content" />
      </div>
      <div className="col-1-2 break-small-col-1-1 show-small-only">
        <img
          className="image -full"
          src={AnnieMirror}
          alt="Phinney Home Interiors - Annie Doornink"
        />
      </div>
    </div>
  );
}
