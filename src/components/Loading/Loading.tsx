import React from "react";

interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  return isLoading ? (
    <div className="loader-cdk">
      <div className="loader"></div>
    </div>
  ) : (
    <></>
  );
};

export default Loading;
