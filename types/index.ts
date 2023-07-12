import { FilterProps } from "@/utils";
import { MouseEventHandler } from "react";



export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface OptionProps {
  title: string;
  value: string;
}


export interface customButtonProps{
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManuFacturerProps {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
  }


  
  export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
  } 