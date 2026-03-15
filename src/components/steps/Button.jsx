import { Fragment } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Button = ({ handleClick, handlePrevios, step }) => {
  return (
    <div className="flex gap-2">
      {step === 1 ? (
        <Fragment>
          {" "}
          <button
            onClick={handleClick}
            className="py-2.5 px-3 bg-black border rounded-lg flex gap-1 text-[16px] text-white justify-center items-center w-full"
          >
            Continue <span>{step}</span>/ <span>{3}</span>{" "}
            <ChevronRight className="w-6 h-6" />
          </button>
        </Fragment>
      ) : (
        <Fragment>
          <button
            onClick={handlePrevios}
            className="py-2.5 px-3 border-gray-200 border rounded-lg flex gap-1 text-[16px] justify-center items-center w-32"
          >
            <ChevronLeft className="w-6 h-6" /> Back
          </button>
          <button
            onClick={handleClick}
            className="py-2.5 px-3 bg-black border rounded-lg flex gap-1 text-[16px] text-white justify-center items-center w-70"
          >
            Continue <span>{step}</span>/ <span>{3}</span>{" "}
            <ChevronRight className="w-6 h-6" />
          </button>
        </Fragment>
      )}
    </div>
  );
};
