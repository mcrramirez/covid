import { useState, useEffect } from "react";
import Stats from "../components/Stats";
import CountrySelector from "../components/CountrySelector";

export default function IndexPage() {
  return (
    <React.Fragment>
      <CountrySelector></CountrySelector>
    </React.Fragment>
  );
}
