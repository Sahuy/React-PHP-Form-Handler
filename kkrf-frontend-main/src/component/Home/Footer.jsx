import React from "react";

const Footer = () => {
  return (
    <div className="  container mt-9 ">
      <div className="border-colorThree border-2 p-4 rounded-2xl ">
        <img src="logo/logo.png" className="w-28 mix-blend-multiply	" alt="logo" />

        <div className="grid md:flex justify-between mt-9 gap-6">

          <div className="flex gap-4">
            <ul>

              <li></li>
            </ul>



          </div>

          <div className="space-y-9 text-colorTwo font-medium">
            <div>#1 website designing company in Delhi NCR</div>
            <div>
              <div>Level 18, DLF Cyber City, Building No. 5, Tower A,</div>
              <div>Phase III, Gurgaon 122002, India.</div>
            </div>
          </div>

          <div>
            <div>Follow us on</div>
            <div className="flex gap-4 text-2xl mt-2">
              <ion-icon
                name="logo-facebook"
                className="cursor-pointer"
              ></ion-icon>
              <ion-icon
                name="logo-instagram"
                className="cursor-pointer"
              ></ion-icon>
              <ion-icon
                name="logo-linkedin"
                className="cursor-pointer"
              ></ion-icon>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-12 text-gray-400 font-normal">
            Copyright 2008 2024 KKRF Group. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
