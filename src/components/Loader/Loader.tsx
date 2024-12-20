import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="relative w-full h-full">
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70 z-40"></div>

      <p className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-2xl text-center z-50">
        Please wait...
      </p>

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 mt-10">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#F43F5E"
          radius="9"
          ariaLabel="three-dots-loading"
        />
      </div>
    </div>
  );
}
