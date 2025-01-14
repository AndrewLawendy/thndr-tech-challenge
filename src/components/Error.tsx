import ErrorImage from "../assets/error.svg";

type ErrorProps = {
  title?: string;
  message?: string;
  retry?: () => void;
};

const Error = ({
  title = "Oops! Something went wrong",
  message = "We're sorry, but we couldn't execute your last request.",
  retry,
}: ErrorProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-text-primary p-4">
      <div className="w-full max-w-md">
        <img src={ErrorImage} alt="Error image" />
      </div>
      <h1 className="text-3xl font-bold mt-8 mb-4 text-center">{title}</h1>
      <p className="text-lg text-center mb-8">{message}</p>
      {retry && (
        <button
          onClick={retry}
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default Error;
