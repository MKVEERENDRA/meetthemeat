import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// utils.ts
// utils.ts
export function formatDateTime(dateString: Date)  {
  const dateoptions: Intl.DateTimeFormatOptions = {
    weekday:'short',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };
  const dateTimeoptions: Intl.DateTimeFormatOptions = {
    weekday:'short',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }
  const timeoptions: Intl.DateTimeFormatOptions = {
    weekday:'short',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }
  const formattedDate = new Intl.DateTimeFormat('en-US', dateoptions).format(dateString);

  return {
    dateOnly: formattedDate.split(' ')[0],
    timeOnly: formattedDate.split(' ')[1],
  };
   
}
export const convertFileToUrl =(file: File) => URL.createObjectURL(file)

export function handleError(error: unknown) {
  console.error('An error occurred:', error);

  throw error;
}
export const formatPrice =(price: string)=>{
  const amount =parseFloat(price)
  const formattedPrice =new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD',
  }).format(amount)
  return formattedPrice
}


// util.ts
import qs, { ParsedQs } from 'qs';

type UrlQueryParams = {
  params: string;
  key: string;
  keysToRemove: string[];
  value: string;
};

export function formUrlQuery({ params, key, value }: UrlQueryParams): string {
  const currentUrl = qs.parse(params) || {};

  if (typeof currentUrl !== 'object' || currentUrl === null) {
    console.error('Error parsing URL parameters.');
    return params;
  }

  currentUrl[key] = value;

  return window.location.pathname + '?' + qs.stringify(currentUrl, { skipNulls: true });
}




//// lib/utils.js
export function removekeysFromQuery({params, keysToRemove }:
  UrlQueryParams) {
    const currentUrl =qs.parse(params)
    keysToRemove.forEach(key => {
      delete currentUrl[key]
    })
    return qs.stringify(currentUrl)
  }
