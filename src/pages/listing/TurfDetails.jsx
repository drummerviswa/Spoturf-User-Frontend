import React, { useState } from "react";
import Booking from "../../components/Booking";
import moment from "moment";
import { Link } from "react-router-dom";

const product = {
  name: "VV Turf 137",
  location: "Santhome",
  price: "400",
  timing: "9am - 12pm",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Chennai", href: "#" },
    { id: 2, name: "Alandur", href: "#" },
  ],
  images: [
    {
      src: "https://turftown.in/_next/image?url=https%3A%2F%2Fturftown.s3.ap-south-1.amazonaws.com%2Fsuper_admin%2Ftt-1724315703275.webp&w=1920&q=75",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://turftown.in/_next/image?url=https%3A%2F%2Fturftown.s3.ap-south-1.amazonaws.com%2Fsuper_admin%2Ftt-1724318861658.webp&w=1920&q=75",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://turftown.in/_next/image?url=https%3A%2F%2Fturftown.s3.ap-south-1.amazonaws.com%2Fsuper_admin%2Ftt-1709736019379.webp&w=640&q=75",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TurfDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className="bg-white">
      <div className="pt-2 flex flex-col">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <button className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </button>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <button
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </button>
            </li>
          </ol>
        </nav>

        <div className="max-w-full grid grid-cols-1 lg:grid-cols-12 lg:gap-4 mx-auto">
          <div className="mx-20 col-span-1 lg:col-span-8 flex flex-col items-center mt-6 sm:px-6 lg:grid lg:max-w-6xl lg:grid-cols-2 lg:gap-x-4 lg:px-12">
            <div className="aspect-w-3 aspect-h-4 my-8 lg:my-0 hover:scale-125 scale-125 lg:scale-100 block rounded-lg overflow-hidden">
              <img
                alt={product.images[0].alt}
                src={product.images[0].src}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 hover:scale-125 overflow-hidden rounded-lg">
                <img
                  alt={product.images[1].alt}
                  src={product.images[1].src}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-2 aspect-w-3 hover:scale-125 overflow-hidden rounded-lg">
                <img
                  alt={product.images[2].alt}
                  src={product.images[2].src}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-3 flex flex-col items-center w-full p-4">
            <Booking />
            <Link
              to={"/booking"}
              className="mt-4 w-full sm:w-3/4 lg:w-full text-center items-center justify-center rounded-md border border-transparent bg-primary px-6 py-2 text-base font-medium text-white hover:bg-darkTheme focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Book Now!
            </Link>
          </div>
        </div>

        <div className="max-w-2xl mx-auto lg:mx-32 px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:pt-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="lg:pr-8">
              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">
                {product.name}
              </h1>
              <h3 className="text-lg sm:text-2xl flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={15}
                  height={15}
                  viewBox="0 0 12 12"
                >
                  <path
                    fill="#588157"
                    d="M6 .5A4.5 4.5 0 0 1 10.5 5c0 1.863-1.42 3.815-4.2 5.9a.5.5 0 0 1-.6 0C2.92 8.815 1.5 6.863 1.5 5A4.5 4.5 0 0 1 6 .5m0 1A3.5 3.5 0 0 0 2.5 5c0 1.355 1.059 2.918 3.224 4.653L6 9.871l.276-.218C8.441 7.918 9.5 6.355 9.5 5A3.5 3.5 0 0 0 6 1.5M6 4a1 1 0 1 1 0 2a1 1 0 0 1 0-2"
                  ></path>
                </svg>
                {product.location}
              </h3>
              <p className="mt-2 sm:mt-4 text-lg sm:text-3xl font-Mulish flex items-center tracking-tight text-gray-900">
                ₹{product.price} <sup className="text-sm">*</sup> / Hour
              </p>
              <p className="mt-4 text-base sm:text-lg font-medium text-gray-600">
                Timing: {product.timing}
              </p>
              <h2 className="mt-4 text-sm font-medium text-gray-900">
                Address
              </h2>
              <p className="flex flex-col gap-1">
                1244, 1245 TNHB, Avadi, Chennai - 600054
                <div className="flex flex-row gap-3">
                  <button
                    type="button"
                    class="w-1/8 flex-row flex px-3 py-2 text-sm font-medium text-center items-center text-white bg-primary/90 rounded-lg hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary/20 dark:bg-primary/40"
                  >
                    Get Direction
                  </button>
                  <button
                    type="button"
                    class="w-1/8 flex-row flex px-3 py-2 text-sm font-medium text-center items-center text-white bg-primary/90 rounded-lg hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary/20 dark:bg-primary/40"
                  >
                    ☎ Contact
                  </button>
                </div>
              </p>
            </div>
            <div className="mt-10 sm:mt-12 lg:mt-0">
              <h2 className="text-sm font-medium text-gray-900 my-2">
                Amenities
              </h2>
              <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                <li class="flex items-center">
                  <svg
                    class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Parking
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Mode of payment - Cash, Card, UPI
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Restroom
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section class="py-24 relative">
        <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 class="font-manrope font-bold text-4xl text-black text-center mb-11">
            Ratings
          </h2>
          <div class="grid grid-cols-1 gap-8">
            <div class="grid grid-cols-12 max-w-sm sm:max-w-full mx-auto">
              <div class="col-span-12 lg:col-span-10 ">
                <div class="sm:flex gap-6">
                  <img
                    src="https://pagedone.io/asset/uploads/1704364459.png"
                    alt="Robert image"
                    class="w-32 h-32 rounded-full object-cover"
                  />
                  <div class="text">
                    <p class="font-medium text-lg leading-8 text-gray-900 mb-2">
                      Robert Karmazov
                    </p>
                    <p class="font-normal text-base leading-7 text-gray-400 mb-4 lg:pr-8">
                      Its nice
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-span-12 lg:col-span-2 max-lg:hidden flex lg:items-center flex-row lg:flex-col justify-center max-lg:pt-6 ">
                <p class="font-medium text-xl leading-8 lg:text-center whitespace-nowrap">
                  ⭐ {4.5}
                </p>
                <p class="font-medium text-lg leading-8 text-gray-400 lg:text-center whitespace-nowrap">
                  {moment().format("ll")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
