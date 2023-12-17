import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import * as Cheerio from "cheerio";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  // {
  //   name: "About",
  //   link: "/about",
  // },
  // {
  //   name: "Service",
  //   link: "/service",
  // },
  {
    name: "Get in Touch",
    link: "/contact",
  },
  // {
  //   name: "Register Brand",
  //   link: "/brand/login",
  // },
];

export const OPEN_AI_CATEGORY_PROMPT =
  "you will be given the snippet of an email,  categorize the mail into some of the categories listed below, you shouldn't go outside this list: Fashion and Style, Science and Technology, Home and Living, Health and Wellness, Travel, Entertainment, Food, Business, Finance, Education, Automotive, Pets, Parenting, Gaming and Sports,  Shopping, Tech News, Social Media, Charity, Art, Beauty, Gadgets, Career, Fitness, DIY, Movies, Music, Cooking, Photography and Art, Design, Literature, Nature, Outdoor, Relationships, Science Fiction, Sustainability, Virtual Reality, Religion and Spirituality, Miscellaneous, Job listing, Programming, Artificial Intelligence";

// "you will be given the snippet of an email,  categorize the mail into some of the categories listed below, each categories should not be more than one word: Health, Wellness, Sports, Recreation, Technology, Gadgets, Fashion, Style, Finance, Investment, Entertainment, Arts, Food, Cooking, Home, Garden, Automotive, Transportation, Parenting, Family, Pets, Animals, Environment, Sustainability, News, Current Events, Local, Regional, Special Offers, Discounts, Miscellaneous, Relationships, Dating, E-commerce, Shopping, Hobbies, Interests, Science, Nature, Gaming, Technology, Business, Entrepreneurship, Music, Concerts, Books, Literature, Social Media, Influencers, Holiday, Seasonal, Science Fiction, Fantasy, Medical, Healthcare, Charity, Nonprofits, Vintage, Retro, Crafts, Artistry, Self-Improvement, Personal Development, Outdoors, Adventure, Astronomy, Space, Legal, Law, Language, Linguistics, Artificial Intelligence, Technology, Job listing, Spirituality, Religion, Programming, Web Development, Technology";

export const getImageFromMailHTML = (data) => {
  const load = Cheerio.load(data);
  const images = load("img");
  const minimumWidth = 40;
  let firstImageWithMinimumWidth = null;
  let secondImageWithMinimumWidth = null;

  images.each((index, element) => {
    const image = load(element);
    const imageWidth = parseInt(image.attr("width"), 10);

    if (!isNaN(imageWidth) && imageWidth > minimumWidth) {
      if (!firstImageWithMinimumWidth) {
        firstImageWithMinimumWidth = image.attr("src");
      } else if (!secondImageWithMinimumWidth) {
        secondImageWithMinimumWidth = image.attr("src");
        return;
      }
    }
  });
  if (!secondImageWithMinimumWidth && firstImageWithMinimumWidth) {
    secondImageWithMinimumWidth = firstImageWithMinimumWidth;
  }

  if (secondImageWithMinimumWidth) {
    return secondImageWithMinimumWidth;
  } else {
    return firstImageWithMinimumWidth;
  }
};
