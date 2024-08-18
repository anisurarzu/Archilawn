// pages/slider.js

import axios from "axios";
import { Slider } from "@/components/pages/Slider";

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      "https://archilawn-server.onrender.com/api/sliders"
    );
    const slides = response.data;

    return {
      props: {
        slides,
      },
    };
  } catch (error) {
    console.error("Error fetching slider data:", error);
    return {
      props: {
        slides: [],
      },
    };
  }
}

export default function SliderPart({ slides }) {
  return <Slider slides={slides} />;
}
