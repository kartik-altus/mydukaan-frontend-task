import ChevronDownDark from "../assets/icons/ChevronDownDark.svg";
import Help from "../assets/icons/Help.svg";
import { useState } from "react";

export default function Overview() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="mt-5 w-full h-9 justify-between items-center inline-flex">
        <div className="text-zinc-900 text-xl font-medium font-GalanoGrotesque-medium  leading-7">
          Overview
        </div>
        <div className="justify-start items-center gap-4 flex flex-row">

          <div className="relative">
            <button
              className="flex items-center bg-white rounded border-[1.5px] border-zinc-300 px-3 py-2"
              onClick={toggleDropdown}
            >
              <span className="text-neutral-600 text-base font-normal font-GalanoGrotesque-regular font-GalanoGrotesque leading-normal">
                This Month
              </span>
              <img
                className="w-4 h-4 ml-2"
                src={ChevronDownDark}
                alt="Chevron Down"
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border-[1.5px] border-zinc-300 rounded z-10">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    This month
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    This week
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* analytics card */}

      <div className="w-full h-[154px] justify-start items-start gap-5 mt-6 mb-8 inline-flex">
        <div className="grow shrink basis-0 h-[118px] justify-center items-center gap-6 flex">
          <div className="grow shrink basis-0 p-5 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch h-[78px] flex-col justify-start items-start gap-4 flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="text-neutral-600 text-base font-normal font-GalanoGrotesque-regular font-['Galano Grotesque'] leading-normal">
                  Online orders
                </div>
              </div>
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-zinc-900 text-[32px] font-medium font-GalanoGrotesque-medium font-['Galano Grotesque'] leading-[38px]">
                 231
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 h-[118px] justify-center items-center gap-6 flex">
          <div className="grow shrink basis-0 p-5 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch h-[78px] flex-col justify-start items-start gap-4 flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="text-neutral-600 text-base font-normal font-GalanoGrotesque-regular font-['Galano Grotesque'] leading-normal">
                  Amount Processed
                </div>
                <img className="w-4 h-4 relative cursor-pointer" src={Help} />
              </div>
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="grow shrink basis-0 h-[38px] justify-between items-center flex">
                  <div className="text-zinc-900 text-[32px] font-medium font-GalanoGrotesque-medium font-['Galano Grotesque'] leading-[38px]">
                    ₹23,92,312.19
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
