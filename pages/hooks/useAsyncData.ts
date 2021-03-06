import { useEffect, useState } from "react";

type AsyncDataReturnValue<T> = {
  data?: T;
  error?: any;
  isFetching: boolean;
};

const useAsyncData = <T>(promise: Promise<T>): AsyncDataReturnValue<T> => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    promise
      .then((res) => setData(res))
      .catch((reason) => setError(reason))
      .finally(() => setIsFetching(false));
  }, []);

  return {
    data,
    error,
    isFetching,
  };
}

export default useAsyncData;
