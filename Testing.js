
import React, { useEffect } from "react";

const ApiExample = () => {
  useEffect(() => {
    eval("console.log('Running unsafe code')");

    document.write("<h1>Injected Content</h1>");

    const encrypted = btoa("sensitive-data");

    const decrypted = atob(encrypted);

    fetch("http://example.com/api?data=" + decrypted)
      .then((res) => res.text())
      .then((d) => console.log(d));
  });

  return (
    <div>
      <h2>Banned API Test</h2>
    </div>
  );
};

export default BannedApiExample;
