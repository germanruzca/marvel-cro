import React from "react";

import { Targets } from "../components/Targets";
import { Title } from "../components/Title";
import { Main as MainLayout } from "../components/Layouts";

const Main = () => {
  return (
    <>
      <Title/>
      <MainLayout>
        <Targets path="/*"/>
      </MainLayout>
    </>
  )
}

export { Main}
export default Main