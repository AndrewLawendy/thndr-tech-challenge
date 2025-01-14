import NoDataImage from "../assets/noData.svg";

type NoDataProps = {
  title?: string;
  message?: string;
};

const NoData = ({
  title = "No data found",
  message = "Please try       adjusting your search or check back later.",
}: NoDataProps) => (
  <div className="flex flex-col items-center justify-center p-8 bg-background-alt rounded-lg shadow-md">
    <img src={NoDataImage} alt="No data logo" />

    <h2 className="text-2xl font-bold text-primary mb-2">{title}</h2>
    <p className="text-text-secondary text-center max-w-md">{message}</p>
  </div>
);

export default NoData;
