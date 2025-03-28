import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// utils.ts
// utils.ts
export function formatDateTime(dateString: Date) {
  const dateoptions: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', dateoptions).format(dateString);

  return {
    dateOnly: formattedDate.split(' ')[0],
    timeOnly: formattedDate.split(' ')[1],
    dateTime: formattedDate, // Include the full formatted date and time
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

import qs, { ParsedQs } from 'qs';

type UrlQueryParams = {
  params: string;
  key: string;
  keysToRemove: string[];
  value: string;
};

export function formUrlQuery({ params, key, value, keysToRemove = [] }: UrlQueryParams): string {
  const currentUrl = qs.parse(params) || {};

  if (typeof currentUrl !== 'object' || currentUrl === null) {
    console.error('Error parsing URL parameters.');
    return params;
  }

  currentUrl[key] = value;
  keysToRemove.forEach((keyToRemove: string | number) => {
    delete currentUrl[keyToRemove];
  });
  return window.location.pathname + '?' + qs.stringify(currentUrl, { skipNulls: true });
}
const query: string = getDynamicQuery(); // Replace getDynamicQuery() with the actual way you obtain the query

formUrlQuery({
  params: URLSearchParams.toString(),
  key: 'query',
  value: query,
  keysToRemove: ['someKey', 'anotherKey']

});

export function removekeysFromQuery({params, keysToRemove }:
  UrlQueryParams) {
    const currentUrl =qs.parse(params)
    keysToRemove.forEach(key => {
      delete currentUrl[key]
    })
    return qs.stringify(currentUrl)
  }
function getDynamicQuery(): string {
  throw new Error("Function not implemented.");
}

