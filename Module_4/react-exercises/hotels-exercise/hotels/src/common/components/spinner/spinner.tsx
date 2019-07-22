import * as React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";
import "./spinner.css";

interface Props {
  children: React.ReactElement;
}

export const LoadingSpinerComponent = (props: Props) => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <div>
      {
        (promiseInProgress === true) ?
          <div className="spinner">
            <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
          </div>
          :
          props.children
      }
    </div>
  )
};
