import * as React from "react";
import { SampleComponent1 } from "../components/SampleComponents1";
import { SampleComponent2 } from "../components/SampleComponents2";

const IndexPage = () => {
  return (
    <div>
      <SampleComponent1 />
      <SampleComponent2 name="My Counter for TypeScript" />
    </div>
  );
};

export default IndexPage;
