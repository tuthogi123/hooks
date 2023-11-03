import React, { useState, useCallback, useMemo } from 'react';

function MyComponent({ data }) {
  const memoizedCallback = useCallback(() => {
    // do something with data
  }, [data]); // Recreates the callback only when `data` changes

  const memoizedValue = useMemo(() => computeExpensiveValue(data), [data]);
  // Recalculates `memoizedValue` only when `data` changes

  return <div>{memoizedValue}</div>;
}
    