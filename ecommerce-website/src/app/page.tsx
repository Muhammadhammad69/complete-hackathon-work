"use client";
import { Herosection } from "@/components/homepage/herosection";
import { Logosection } from "@/components/homepage/logosection";
import { Arrivalsection } from "@/components/homepage/arrivals";
import { Topselling } from "@/components/homepage/topselling";
import { DressStyleSec } from "@/components/homepage/dressStyle";
import { CustomerReviewSec } from "@/components/homepage/customerReviewSec";
export default function Home() {
 
  
  return (
    <>
      <Herosection />
      <Logosection />
      
      <Arrivalsection />
      <Topselling />
      <DressStyleSec />
      <CustomerReviewSec />
      
    </>
  );
}
