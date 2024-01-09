import React from "react";
import { Button } from "./Button";
import { Img } from "./Img";

const Pagination = (props) => {
  return (
    <>
      <div className={"flex mx-auto my-6"}>
        <Button
          className="bg-white-A700 border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center min-w-[100px] pl-[5px] pr-[11px] py-[7px] rounded"
          leftIcon={<Img className="h-[18px] mr-1.5" src="images/img_arrowleft.svg" alt="arrow_left" />}
        >
          <div className="font-inter font-medium text-center text-gray-800 text-sm">{props?.previousbutton}</div>
        </Button>
        <div className="flex  flex-row gap-2 items-start justify-center items-center w-auto sm:w-full">
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <p className="font-inter text-center text-gray-800 text-sm w-full">{props?.columnzerotext}</p>
          </div>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <p className="font-inter text-center text-gray-800 text-sm w-full">{props?.columnzeroonetext}</p>
          </div>
          <Button className="bg-[#146EB4] text-white cursor-pointer font-inter font-medium h-7 py-[5px] rounded text-center text-sm text-white-A700 w-7">
            {props?.tenbutton}
          </Button>
          {
           // generate array from 11 to 18
              Array.from({ length: 8 }, (_, i) => i + 11).map((item) => (
                <div className="flex cursor-pointer flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
                  <p className="font-inter text-center text-gray-800 text-sm w-full">{item}</p>
                </div>
                ))
          }
         
        </div>
        <Button
          className="bg-white-A700 border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center min-w-[74px] pl-[11px] pr-[5px] py-[7px] rounded"
          rightIcon={<Img className="h-[18px] ml-1.5" src="images/img_arrowright.svg" alt="arrow_right" />}
        >
          <div className="font-inter font-medium text-center text-gray-800 text-sm">{props?.nextbutton}</div>
        </Button>
      </div>
    </>
  );
};

Pagination.defaultProps = {
  previousbutton: "Previous",
  columnzerotext: "1",
  columnzeroonetext: "...",
  tenbutton: "10",
  columnzerotwotext: "11",
  columnzerothreetext: "12",
  columnzerofourtext: "13",
  columnzerofivetext: "14",
  columnzerosixtext: "15",
  columnzeroseventext: "16",
  columnzeroeighttext: "17",
  columnzeroninetext: "18",
  nextbutton: "Next",
};

export default Pagination;
