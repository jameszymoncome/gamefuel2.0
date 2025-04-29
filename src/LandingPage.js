import React, { useState } from 'react';
import './LandingPage.css';

function LandingPage() {
  const [page, setPage] = useState(0); // 0 = cover, 1 = title, etc.
  const [direction, setDirection] = useState(''); // '' | 'next' | 'prev'

  const pages = [
    {
      type: 'cover',
      content: (
        <div className="book-cover" onClick={() => {setPage(1); setDirection('next'); }}>
          <img src="/images/book-cover.png" alt="Book Cover" className="book-image" />
        </div>
      )
    },
    {
      type: 'title',
      content: (
        <div className="book-page">
          <h1>GameFuel</h1>
          <p>A Dietary Guide for Student-Athletes</p>
        </div>
      )
    },
    {
        type: 'page',
        content: (
            <div className="book-page">
                <div className="toc-container">
                    <h2 className="toc-title">TABLE OF CONTENTS</h2>
                    <div className="toc-separator"></div>
                    <ol className="toc">
                    <li onClick={() => { setPage(3); handleNav(); }}>Introduction</li>
                    <li onClick={() => { setPage(4); handleNav(); }}>Importance of Nutrition in Athletic Performance</li>
                    <li onClick={() => { setPage(5); handleNav(); }}>Nutritional Needs of Student-Athletes</li>
                    <li onClick={() => { setPage(6); handleNav(); }}>Scientifically-Backed Dietary Guidelines</li>
                    <li onClick={() => { setPage(7); handleNav(); }}>One-Month Meal Plan (With Portion Sizes & Intensity Levels)</li>
                    <li onClick={() => { setPage(17); handleNav(); }}>Hydration Strategies</li>
                    <li onClick={() => { setPage(18); handleNav(); }}>Pre-Game and Post-Game Nutrition</li>
                    <li onClick={() => { setPage(19); handleNav(); }}>Common Myths and Misconceptions</li>
                    <li onClick={() => { setPage(20); handleNav(); }}>Practical Tips for Busy Student-Athletes</li>
                    <li onClick={() => { setPage(21); handleNav(); }}>Final Recommendations</li>
                    </ol>
                </div>
            </div>

        )
      },      
    {
  type: 'page',
  content: (
    <div className="book-page">
      <div className="bordered-content page1-content" id="introduction">
        <h2>Introduction</h2>
        <p>
          Welcome to GameFuel, your complete nutrition guide designed to empower
          Basud National High School student-athletes. This eBook serves to
          provide practical, science-based nutrition advice to help you perform
          better, recover faster, and stay healthy. 📖
        </p>
      </div>
    </div>
  )
},
{
  type: 'page',
  content: (
    <div className="book-page">
      <div className="page2-content">
        <h2 className="page-title">Importance of Nutrition in Athletic Performance</h2>
        <div className="page2-image-container">
          <img 
            src="/images/2.jpg" 
            alt="Nutrition and Athletic Performance" 
            className="page2-image" 
          />
        </div>
        <div className="page2-text">
          <ul className="benefits-list">
            <li>Nutrition fuels energy systems during training and games.</li>
            <li>Helps in muscle growth and recovery.</li>
            <li>Prevents injury and boosts immunity.</li>
            <li>Improves focus and academic performance.</li>
          </ul>
        </div>
      </div>
    </div>
  )
},
{
  type: 'page',
  content: (
    <div className="book-page">
      <div className="page3-content">
        <h2 className="page-title">Nutritional Needs of Student-Athletes</h2>

        <ul className="main-list">
          <li>
            <strong>Macronutrients:</strong>
            <ul className="circle-list">
              <li>Carbohydrates (55–65%) – Primary energy source.</li>
              <li>Protein (12–15%) – Muscle repair and growth.</li>
              <li>Fats (20–30%) – Supports hormone production and recovery.</li>
            </ul>
          </li>
          <li>
            <strong>Micronutrients:</strong>
            <ul className="circle-list">
              <li>Iron, calcium, vitamin D, B-complex vitamins.</li>
            </ul>
          </li>
          <li>
            <strong>Calories:</strong> Varies by age, sex, and sport. Ranges from 2,000–3,500 kcal/day.
          </li>
        </ul>
      </div>
    </div>
  )
},
    {
      type: 'page',
      content: (
        <div className="book-page">
            <div className='page4-content'>
                <h2>Scientifically-Backed Dietary Guidelines</h2>
                    <table className="meal-table">
                        <thead>
                        <tr>
                            <th>Meal Timing</th>
                            <th>What to Eat</th>
                            <th>Why It Matters</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>2–4 hrs before training</td>
                            <td>Carbs + protein (e.g., rice + egg)</td>
                            <td>Fuel energy stores</td>
                        </tr>
                        <tr>
                            <td>30–60 min before</td>
                            <td>Light carbs (banana, granola bar)</td>
                            <td>Quick energy</td>
                        </tr>
                        <tr>
                            <td>During (if &gt;60 min)</td>
                            <td>Water or electrolyte drink</td>
                            <td>Maintain hydration</td>
                        </tr>
                        <tr>
                            <td>Post-Training (within 30 mins)</td>
                            <td>Protein + carbs (chocolate milk, sandwich)</td>
                            <td>Muscle recovery</td>
                        </tr>
                        </tbody>
                    </table>
            </div>
        </div>
      )
    },
    {
      type: 'page',
      content: (
        <div className="book-page">
            <div className='page6-14-content'>
                <section id="week1" class="meal-plan">
                    <h2>📅 One-Month Meal Plan</h2>

                    <div class="day">
                    <h3>Day 1 – Moderate Intensity</h3>
                    <ul>
                        <li><strong>Breakfast:</strong> Oatmeal, banana, boiled egg</li>
                        <li><strong>Morning Snack:</strong> Peanut butter sandwich, water</li>
                        <li><strong>Lunch:</strong> Chicken adobo, brown rice, side salad</li>
                        <li><strong>Afternoon Snack:</strong> Apple, yogurt</li>
                        <li><strong>Dinner:</strong> Grilled fish, sweet potato, steamed veggies</li>
                        <li><strong>Hydration:</strong> 8–10 glasses water + electrolyte drink</li>
                    </ul>
                    </div>

                    <div class="day">
                    <h3>Day 2 – Moderate Intensity</h3>
                    <ul>
                        <li><strong>Breakfast:</strong> Oatmeal, banana, boiled egg</li>
                        <li><strong>Morning Snack:</strong> Peanut butter sandwich, water</li>
                        <li><strong>Lunch:</strong> Chicken adobo, brown rice, side salad</li>
                        <li><strong>Afternoon Snack:</strong> Apple, yogurt</li>
                        <li><strong>Dinner:</strong> Grilled fish, sweet potato, steamed veggies</li>
                        <li><strong>Hydration:</strong> 8–10 glasses water + electrolyte drink</li>
                    </ul>
                    </div>

                    <div class="day">
                    <h3>Day 3 – Moderate Intensity</h3>
                    <ul>
                        <li><strong>Breakfast:</strong> Oatmeal, banana, boiled egg</li>
                        <li><strong>Morning Snack:</strong> Peanut butter sandwich, water</li>
                        <li><strong>Lunch:</strong> Chicken adobo, brown rice, side salad</li>
                        <li><strong>Afternoon Snack:</strong> Apple, yogurt</li>
                        <li><strong>Dinner:</strong> Grilled fish, sweet potato, steamed veggies</li>
                        <li><strong>Hydration:</strong> 8–10 glasses water + electrolyte drink</li>
                    </ul>
                </div>

                </section>
            </div>
        </div>
      )
    },
    {
      type: 'page',
      content: (
        <div className="book-page">
            <div className='page6-14-content'>
                <section id="week1" class="meal-plan">
                    <div class="day">
                    <h3>Day 4 – Moderate Intensity</h3>
                    <ul>
                        <li><strong>Breakfast:</strong> Oatmeal, banana, boiled egg</li>
                        <li><strong>Morning Snack:</strong> Peanut butter sandwich, water</li>
                        <li><strong>Lunch:</strong> Chicken adobo, brown rice, side salad</li>
                        <li><strong>Afternoon Snack:</strong> Apple, yogurt</li>
                        <li><strong>Dinner:</strong> Grilled fish, sweet potato, steamed veggies</li>
                        <li><strong>Hydration:</strong> 8–10 glasses water + electrolyte drink</li>
                    </ul>
                    </div>
                    <div class="day">
                    <h3>Day 5 – Low Intensity</h3>
                    <ul>
                        <li><strong>Breakfast:</strong> Boiled egg, pandesal, hot cocoa</li>
                        <li><strong>Morning Snack:</strong> Oatmeal cookies, water</li>
                        <li><strong>Lunch:</strong> Grilled tilapia, rice, cucumber salad</li>
                        <li><strong>Afternoon Snack:</strong> Mango slices</li>
                        <li><strong>Dinner:</strong> Chicken tinola (soup with green papaya and spinach)</li>
                        <li><strong>Hydration:</strong> 7–8 glasses water</li>
                    </ul>
                    </div>

                    <div class="day">
                    <h3>Day 6 – High Intensity</h3>
                    <ul>
                        <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                        <li><strong>Morning Snack:</strong> Trail mix, water</li>
                        <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                        <li><strong>Afternoon Snack:</strong> Peanut butter sandwich</li>
                        <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                        <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
                    </ul>
                    </div>

                </section>
            </div>
          </div>
      )
    },
    {
      type: 'page',
      content: (
        <div className="book-page">
            <div className='page6-14-content'>
            <section id="week1" class="meal-plan">
            <div class="day">
              <h3>Day 7 – Low Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Boiled egg, pandesal, hot cocoa</li>
                <li><strong>Morning Snack:</strong> Oatmeal cookies, water</li>
                <li><strong>Lunch:</strong> Grilled tilapia, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Mango slices</li>
                <li><strong>Dinner:</strong> Chicken tinola</li>
                <li><strong>Hydration:</strong> 7–8 glasses water</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 8 – Moderate Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Peanut butter sandwich</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 9 – Low Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Breakfast	Boiled egg, pandesal with cheese, banana, water</li>
                <li><strong>Morning Snack:</strong> Oatmeal cookies, milk</li>
                <li><strong>Lunch:</strong> Grilled tilapia, rice, steamed kangkong, water</li>
                <li><strong>Afternoon Snack:</strong> Mango slices</li>
                <li><strong>Dinner:</strong> Chicken tinola, rice, sautéed sayote</li>
                <li><strong>Hydration:</strong> 7–8 glasses of water</li>
              </ul>
            </div>

          </section>
            </div>
        </div>
      )
    },
    {
      type: 'page',
      content: (
        <div className="book-page">
            <div className='page6-14-content'>
            <section id="week1" class="meal-plan">
            <div class="day">
              <h3>Day 10 – Moderate  Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Oatmeal with banana, boiled egg, water</li>
                <li><strong>Morning Snack:</strong> Peanut butter sandwich</li>
                <li><strong>Lunch:</strong> Chicken adobo, brown rice, steamed vegetables</li>
                <li><strong>Afternoon Snack:</strong> Apple + yogurt</li>
                <li><strong>Dinner:</strong> Grilled fish, sweet potato, cucumber salad</li>
                <li><strong>Hydration:</strong> 8–10 glasses of water + electrolyte drink after training</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 11 – High Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Peanut butter sandwich</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 12 – High Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

          </section>
            </div>
        </div>
      )
    },
    {
      type: 'page',
      content: (
        <div className="book-page">
            <div className='page6-14-content'>
            <section id="week1" class="meal-plan">
            <div class="day">
              <h3>Day 13 – High Intensity</h3>
              <ul>
              <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 14 – High Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Peanut butter sandwich</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 15 – Low Intensity</h3>
              <ul>
              <li><strong>Breakfast:</strong> Breakfast	Boiled egg, pandesal with cheese, banana, water</li>
                <li><strong>Morning Snack:</strong> Oatmeal cookies, milk</li>
                <li><strong>Lunch:</strong> Grilled tilapia, rice, steamed kangkong, water</li>
                <li><strong>Afternoon Snack:</strong> Mango slices</li>
                <li><strong>Dinner:</strong> Chicken tinola, rice, sautéed sayote</li>
                <li><strong>Hydration:</strong> 7–8 glasses of water</li>
              </ul>
            </div>

          </section>
            </div>
        </div>
      )
    },
    {
      type: 'page',
      content: (
        <div className="book-page">
            <div className='page6-14-content'>
            <section id="week1" class="meal-plan">
            <div class="day">
              <h3>Day 16 – High Intensity</h3>
              <ul>
              <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 17 – Low Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Boiled egg, pandesal with cheese, banana, water</li>
                <li><strong>Morning Snack:</strong> Oatmeal cookies, milk</li>
                <li><strong>Lunch:</strong> Grilled tilapia, rice, steamed kangkong, water</li>
                <li><strong>Afternoon Snack:</strong> Mango slices</li>
                <li><strong>Dinner:</strong> Chicken tinola, rice, sautéed sayote</li>
                <li><strong>Hydration:</strong> 7–8 glasses of water</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 18 – Moderate Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Oatmeal with banana, boiled egg, water</li>
                <li><strong>Morning Snack:</strong> Peanut butter sandwich</li>
                <li><strong>Lunch:</strong> Chicken adobo, brown rice, steamed vegetables</li>
                <li><strong>Afternoon Snack:</strong> Apple + yogurt</li>
                <li><strong>Dinner:</strong> Grilled fish, sweet potato, cucumber salad</li>
                <li><strong>Hydration:</strong> 8–10 glasses of water + electrolyte drink after training</li>
              </ul>
            </div>

          </section>
            </div>
        </div>
      )
    },
    {
      type: 'page',
      content: (
        <div className="book-page">
            <div className='page6-14-content'><section id="week1" class="meal-plan">
            <div class="day">
              <h3>Day 19 – High Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 20 – High Intensity</h3>
              <ul>
              <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 21 – High Intensity</h3>
              <ul>
              <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

          </section></div>
        </div>
      )
    },
    {
      type: 'page',
      content: (
        <div className="book-page">
            <div className='page6-14-content'>
            <section id="week1" class="meal-plan">
            <div class="day">
              <h3>Day 22 – Low Intensity</h3>
              <ul>
              <li><strong>Breakfast:</strong> Boiled egg, pandesal with cheese, banana, water</li>
                <li><strong>Morning Snack:</strong> Oatmeal cookies, milk</li>
                <li><strong>Lunch:</strong> Grilled tilapia, rice, steamed kangkong, water</li>
                <li><strong>Afternoon Snack:</strong> Mango slices</li>
                <li><strong>Dinner:</strong> Chicken tinola, rice, sautéed sayote</li>
                <li><strong>Hydration:</strong> 7–8 glasses of water</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 23 – Moderate Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Oatmeal with banana, boiled egg, water</li>
                <li><strong>Morning Snack:</strong> Peanut butter sandwich</li>
                <li><strong>Lunch:</strong> Chicken adobo, brown rice, steamed vegetables</li>
                <li><strong>Afternoon Snack:</strong> Apple + yogurt</li>
                <li><strong>Dinner:</strong> Grilled fish, sweet potato, cucumber salad</li>
                <li><strong>Hydration:</strong> 8–10 glasses of water + electrolyte drink after training</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 24 – Moderate Intensity</h3>
              <ul>
                <li><strong>Breakfast:</strong> Oatmeal with banana, boiled egg, water</li>
                <li><strong>Morning Snack:</strong> Peanut butter sandwich</li>
                <li><strong>Lunch:</strong> Chicken adobo, brown rice, steamed vegetables</li>
                <li><strong>Afternoon Snack:</strong> Apple + yogurt</li>
                <li><strong>Dinner:</strong> Grilled fish, sweet potato, cucumber salad</li>
                <li><strong>Hydration:</strong> 8–10 glasses of water + electrolyte drink after training</li>
              </ul>
            </div>

          </section>
            </div>
        </div>
      )
    },
    {
      type: 'page',
      content: (
        <div className="book-page">
            <div className='page6-14-content'>
            <section id="week1" class="meal-plan">
            <div class="day">
              <h3>Day 25 – Low Intensity</h3>
              <ul>
              <li><strong>Breakfast:</strong> Boiled egg, pandesal with cheese, banana, water</li>
                <li><strong>Morning Snack:</strong> Oatmeal cookies, milk</li>
                <li><strong>Lunch:</strong> Grilled tilapia, rice, steamed kangkong, water</li>
                <li><strong>Afternoon Snack:</strong> Mango slices</li>
                <li><strong>Dinner:</strong> Chicken tinola, rice, sautéed sayote</li>
                <li><strong>Hydration:</strong> 7–8 glasses of water</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 26 – Moderate Intensity</h3>
              <ul>
              <li><strong>Breakfast:</strong> Boiled egg, pandesal with cheese, banana, water</li>
                <li><strong>Morning Snack:</strong> Oatmeal cookies, milk</li>
                <li><strong>Lunch:</strong> Grilled tilapia, rice, steamed kangkong, water</li>
                <li><strong>Afternoon Snack:</strong> Mango slices</li>
                <li><strong>Dinner:</strong> Chicken tinola, rice, sautéed sayote</li>
                <li><strong>Hydration:</strong> 7–8 glasses of water</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 27 – High Intensity</h3>
              <ul>
              <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

          </section>
            </div>
        </div>
      )
    },
    {
      type: 'page',
      content: (
        <div className="book-page">
            <div className='page6-14-content'>
            <section id="week1" class="meal-plan">
            <div class="day">
              <h3>Day 28 – High Intensity</h3>
              <ul>
              <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 29 – High Intensity</h3>
              <ul>
              <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

            <div className="day">
              <h3>Day 30 – High Intensity</h3>
              <ul>
              <li><strong>Breakfast:</strong> Fried rice, scrambled eggs, apple, milk</li>
                <li><strong>Morning Snack:</strong> Trail mix, water</li>
                <li><strong>Lunch:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Afternoon Snack:</strong> Beef steak, rice, cucumber salad</li>
                <li><strong>Dinner:</strong> Baked chicken, mashed potatoes, steamed broccoli</li>
                <li><strong>Hydration:</strong> 10–12 glasses water + sports drink after training</li>
              </ul>
            </div>

          </section>
            </div>
        </div>
      )
    },
    {
      type: 'page',
      content: (
        <div className="book-page">
          <div className="page15-content">
            <h2>Hydration Strategies</h2>
            <ul>
              <li>Drink 250–500 mL of water two hours before activity.</li>
              <li>Sip 100–150 mL of water every 20 minutes during training.</li>
              <li>For events longer than 60 minutes, include electrolytes (sports drinks or oral rehydration salts).</li>
              <li>Check urine color — pale yellow indicates good hydration.</li>
            </ul>
          </div>
        </div>
      )
    },    
    {
      type: 'page',
      content: (
        <div className="book-page">
            <div className='page16-content'>
            <h2>Pre-Game and Post-Game Nutrition</h2>
          <h5>Before Game:</h5>
        <ul>
          <li>3 hours before: Rice + lean meat + fruits</li>
          <li>30 mins before: Banana + water</li>
        </ul>
        <h5>After Game:</h5>
        <ul>
          <li>Within 30 minutes: Chocolate milk, sandwich</li>
          <li>1–2 hours after: Balanced meal (carbs + protein + vegetables)</li>
        </ul>
            </div>
        </div>
      )
    },
    {
      type: 'page',
      content: (
        <div className="book-page">
          <div className="page17-content">
            <h2>Common Nutrition Myths</h2>
            <div className="myths-circle-container">
              <div className="myth-item red-item">
                <span className="icon">❌</span>
                <span className="text">“Skipping breakfast makes you lighter for sports.”</span>
              </div>
              <div className="myth-item green-item">
                <span className="icon">✅</span>
                <span className="text"><strong>Truth:</strong> Skipping breakfast drains energy stores and hinders performance.</span>
              </div>
              <div className="myth-item red-item">
                <span className="icon">❌</span>
                <span className="text">“More protein = more muscle.”</span>
              </div>
              <div className="myth-item green-item">
                <span className="icon">✅</span>
                <span className="text"><strong>Truth:</strong> Excess protein won’t build muscle without proper training.</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      type: 'page',
      content: (
        <div className="book-page">
            <div className='page18-content'>
            <h2>Practical Tips for Busy Student-Athletes</h2>
          <ul>
          <li>Pack healthy snacks: boiled eggs, trail mix, fruits.</li>
          <li>Avoid energy drinks and sugary sodas.</li>
          <li>Eat rainbow-colored fruits and vegetables daily.</li>
          <li>Don’t skip meals—even on rest days.</li>
        </ul>
            </div>
        </div>
      )
    },
    {
      type: 'page',
      content: (
        <div className="book-page">
            <div className='page19-content'>
            <h2>Final Recommendations</h2>
          <ul>
          <li>Make small, consistent changes.</li>
          <li>Stay hydrated throughout the day.</li>
          <li>Listen to your body.</li>
          <li>Prioritize sleep and recovery.</li>
          <li>Seek help from coaches, teachers, or health professionals when unsure</li>
        </ul>
            </div>
        </div>
      )
    },
   {
  type: 'page',
  content: (
    <div className="book-page">
      <img 
        src="/images/book.png" 
        alt="Thank You" 
      />
      <h2 className="ty">Thank You for Reading!</h2>
      <a
        href="/ebook_content.pdf"
        download="GameFuel_Ebook.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="download-button"
      >
        Download PDF
      </a>
    </div>
  )
},
    // Add more pages if you want
  ];

  const handleNext = () => {
    if (page < pages.length - 1) {
      setDirection(''); // Reset direction to trigger re-render
      setTimeout(() => {
        setDirection('next');
        setPage((prev) => prev + 1);
      }, 0); // Delay to allow React to reapply the class
    }
  };
  
  const handlePrev = () => {
    if (page > 1) {
      setDirection(''); // Reset direction to trigger re-render
      setTimeout(() => {
        setDirection('prev');
        setPage((prev) => prev - 1);
      }, 0); // Delay to allow React to reapply the class
    }
  };

  const handleNav = () => {
    setDirection(''); // Reset direction to trigger re-render
    setDirection('prev');
  };

  const handleCloseBook = () => {
    setDirection(''); // Reset direction to trigger re-render
      setTimeout(() => {
        setDirection('prev');
        setPage(0);
      }, 0); // Delay to allow React to reapply the class
  };

  return (
    <div className="landing-container">
      <div className="book-wrapper">
        {page > 0 && (
            <div className='close-button-container'>
            <button onClick={handleCloseBook} className="close-button">Close Book</button>
        </div>
            )}
        <div className={`page-content ${direction}`}>
          {pages[page].content}
          {page >= 3 && <div className="page-number">{page - 2}</div>}
        </div>

        {/* Navigation Buttons */}
        {page > 0 && (
          <div className="navigation-buttons">
            {page > 1 && <button onClick={handlePrev} className='prev-button'>Previous Page</button>}
            {page < pages.length - 1 && <button onClick={handleNext} className='next-button'>Next Page</button>}
          </div>
        )}
      </div>
    </div>
  );
}

export default LandingPage;
