// App.js
import React from 'react';

import CategoryCard from './Categorycard';

function Displaycard() {
  const categories = [
    { name: "Electronics", items: "Mobile phones, laptops, tablets, TVs, cameras, and accessories.", image: "https://via.placeholder.com/150" },
    { name: "Home and Kitchen", items: "Appliances, cookware, furniture, and home decor.", image: "https://via.placeholder.com/150" },
    { name: "Fashion", items: "Clothing, shoes, accessories for men, women, and kids.", image: "https://via.placeholder.com/150" },
    { name: "Beauty and Personal Care", items: "Cosmetics, skincare products, hair care, and fragrances.", image: "https://via.placeholder.com/150" },
    { name: "Books", items: "Physical books, eBooks, audiobooks, textbooks, and more.", image: "https://via.placeholder.com/150" },
    { name: "Toys and Games", items: "Action figures, board games, puzzles, outdoor toys.", image: "https://via.placeholder.com/150" },
    { name: "Sports and Outdoors", items: "Fitness equipment, outdoor gear, and sporting goods.", image: "https://via.placeholder.com/150" },
    { name: "Automotive", items: "Car accessories, parts, and maintenance tools.", image: "https://via.placeholder.com/150" },
    { name: "Groceries", items: "Food items, beverages, and household supplies.", image: "https://via.placeholder.com/150" },
    { name: "Health and Wellness", items: "Vitamins, supplements, medical equipment, and fitness trackers.", image: "https://via.placeholder.com/150" },
    { name: "Office Products", items: "Office furniture, stationery, and printers.", image: "https://via.placeholder.com/150" },
    { name: "Music and Instruments", items: "Instruments, audio gear, and music accessories.", image: "https://via.placeholder.com/150" },
    { name: "Pet Supplies", items: "Pet food, toys, and accessories.", image: "https://via.placeholder.com/150" },
    { name: "Movies, TV Shows, and Music", items: "DVDs, Blu-rays, and CDs.", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="App container-fluid">
    <div>
    <ul class="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style="--bs-nav-link-color: var(--bs-white); --bs-nav-pills-link-active-color: var(--bs-primary); --bs-nav-pills-link-active-bg: var(--bs-white);">
  <li class="nav-item" role="presentation">
    <button class="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Contact</button>
  </li>
</ul></div>
      <div className="row">
        {categories.map((category, index) => (
          <div key={index} className="col-md-4 col-sm-6">
            <CategoryCard name={category.name} items={category.items} image={category.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Displaycard;
