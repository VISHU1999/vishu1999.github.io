"use client"

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "../components/RainbowHighlight";

interface loaderProps {}

const loader = ({ }) => {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
    
    return (
        <div className="flex h-full w-full flex-col items-center py-14">
        <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
          <RoughNotationGroup show={true}>
            <RainbowHighlight color={colors[3]} iterations={4}>
              <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
                Loading..
              </h1>
                </RainbowHighlight>
                <RainbowHighlight color={colors[3]} iterations={4}>
              <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
                Loading.....
              </h1>
            </RainbowHighlight>
          </RoughNotationGroup>
        </div>
      </div>
    );
}
export default loader;