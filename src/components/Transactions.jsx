import Search from "../assets/icons/Search.svg";
import Sort from "../assets/icons/Sort.svg";
import Download from "../assets/icons/Download.svg";
import TriangleIcon from "../assets/icons/TriangleIcon.svg";
import Help from "../assets/icons/Help.svg";
import Pagination from "./Pagination";


export default function Transactions() {
  return (
    <>
      <div className=" mt-2 text-zinc-900 text-xl font-medium font-GalanoGrotesque-medium font-['Galano Grotesque'] leading-7">
        Transactions | This Month
      </div>

      <div className="w-full mt-5 p-3 bg-white rounded-lg shadow flex-col justify-start items-start inline-flex">
        <div className="w-full mb-5 h-10 justify-between items-center inline-flex">
          <div className="w-[250px] h-10 justify-start items-start flex">
            <div className="grow shrink basis-0 h-10 px-4 py-2.5 bg-white rounded border-[1.5px] border-zinc-200 justify-start items-center gap-2 flex">
              <img className="w-3.5 h-3.5 relative" src={Search} />
              <input
                type="text"
                placeholder="Order ID or transaction ID"
                className="w-[200px] bg-transparent border-0 outline-none text-neutral-500 text-sm font-normal font-GalanoGrotesque-regular font-['Galano Grotesque'] leading-tight"
              />
            </div>
          </div>
          <div className="justify-start items-center gap-3 flex">
            <div className="justify-start items-center gap-3 flex">
              <div className="justify-end items-center gap-4 flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="px-3 cursor-pointer py-1.5 bg-white rounded border border-zinc-300 justify-start items-center gap-1.5 flex">
                    <div className="text-neutral-600 text-base font-normal font-GalanoGrotesque-regular font-['Galano Grotesque'] leading-normal">
                      Sort
                    </div>
                    <img className="w-4 h-4 relative" src={Sort} />
                  </div>
                </div>
                <div className="w-9 h-9 relative cursor-pointer">
                  <div className="w-9 h-9 left-0 top-0 absolute rounded border border-zinc-300" />
                  <img
                    className="w-5 h-5 left-[8px] top-[8px] absolute"
                    src={Download}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="bg-neutral-100">
              <th className="text-left p-3 text-neutral-600 w-1/6 font-medium font-GalanoGrotesque-medium">
                Order ID
              </th>
              <th className="text-left p-3 rounded-l-lg text-neutral-600 w-1/6 font-medium font-GalanoGrotesque-medium">
                <div className="flex">
                 Order Date <img className="pl-2" src={TriangleIcon} />
                </div>
              </th>
             
              <th className="text-right p-3 text-neutral-600 w-1/6 font-medium font-GalanoGrotesque-medium">
                Order amount
              </th>
              <th className="text-right p-3 text-neutral-600 w-1/6 font-medium font-GalanoGrotesque-medium">
                <span className="inline-flex">Transaction fees
                  <img className="ml-2 w-4 h-6 cursor-pointer" src={Help} />
                </span>
              </th>
            </tr>
          </thead>

          <tbody className="overflow-y-scroll">
            {
              Array.from(Array(10).keys()).map((item, index) => (
                <tr className="">
                  <td className="text-left p-3 text-[#146EB4] border-b text-sm font-medium font-GalanoGrotesque-medium">
                  #281209
                  </td>
                  <td className="text-left p-3 border-b text-zinc-900 text-sm font-normal font-GalanoGrotesque-regular">
                    7 July, 2023
                  </td>
                  <td className="text-right p-3 border-b text-zinc-900 text-sm font-normal font-GalanoGrotesque-regular">
                    ₹1,278.23
                  </td>
                  <td className="text-right p-3 border-b text-zinc-900 text-sm font-normal font-GalanoGrotesque-regular">
                    ₹22
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <Pagination  />
      </div>
    </>
  );
}
