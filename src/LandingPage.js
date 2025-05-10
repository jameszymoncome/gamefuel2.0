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
          <img src="/images/gamefuel.jpg" alt="Book Cover" className="book-image" />
        </div>
      )
    },
    {
      type: 'title',
      content: (
        <div className="book-page">
          <div className="title-page2">
            <div className="title-border">
              <h1>GameFuel</h1>
              <h2>A Dietary Guideline for Student-Athletes<br />at Pablo S. Villafuerte National High School</h2>
              <p className="tagline">Fuel Smart. Play Hard. Recover Strong.</p>
            </div>
          </div>
          <div className="authors"  >
                <p>By <br></br><br></br><br></br><br></br>Joshua Abel Rawat<br></br></p>
                <p>Girlie Villamar</p>
              </div>
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
                    <li onClick={() => { setPage(22); handleNav(); }}>Hydration Strategies</li>
                    <li onClick={() => { setPage(23); handleNav(); }}>Pre-Game and Post-Game Nutrition</li>
                    <li onClick={() => { setPage(24); handleNav(); }}>Common Myths and Misconceptions</li>
                    <li onClick={() => { setPage(25); handleNav(); }}>Practical Tips for Busy Student-Athletes</li>
                    <li onClick={() => { setPage(26); handleNav(); }}>Final Recommendations</li>
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
          better, recover faster, and stay healthy. 
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
            <div className="info-box macronutrients">
              <strong>Macronutrients:</strong>
              <ul className="circle-list">
                <li>Carbohydrates (55–65%) – Primary energy source.</li>
                <li>Protein (12–15%) – Muscle repair and growth.</li>
                <li>Fats (20–30%) – Supports hormone production and recovery.</li>
              </ul>
            </div>
          </li>

          <li>
            <div className="info-box micronutrients">
              <strong>Micronutrients:</strong>
              <ul className="circle-list">
                <li>Iron, calcium, vitamin D, B-complex vitamins.</li>
              </ul>
            </div>
          </li>

          <li>
            <div className="info-box calories">
              <strong>Calories:</strong> Varies by age, sex, and sport. Ranges from 2,000–3,500 kcal/day.
            </div>
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
                <section id="week1" className="meal-plan">
                  <h2>One-Month Meal Plan</h2>

                  <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 1 - Moderate Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Oatmeal, banana, boiled egg</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Peanut butter sandwich, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Chicken adobo, brown rice, side salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Apple, yogurt</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Grilled fish, sweet potato, steamed veggies</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>8–10 glasses water + electrolyte drink</td>
                      </tr>
                    </tbody>
                  </table>

                  <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 2 - Moderate Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Oatmeal, banana, boiled egg</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Peanut butter sandwich, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Chicken adobo, brown rice, side salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Apple, yogurt</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Grilled fish, sweet potato, steamed veggies</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>8–10 glasses water + electrolyte drink</td>
                      </tr>
                    </tbody>
                  </table>
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
                  <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 3 - Moderate Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Oatmeal, banana, boiled egg</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Peanut butter sandwich, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Chicken adobo, brown rice, side salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Apple, yogurt</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Grilled fish, sweet potato, steamed veggies</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>8–10 glasses water + electrolyte drink</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 4 - Moderate Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Oatmeal, banana, boiled egg</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Peanut butter sandwich, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Chicken adobo, brown rice, side salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Apple, yogurt</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Grilled fish, sweet potato, steamed veggies</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>8–10 glasses water + electrolyte drink</td>
                      </tr>
                    </tbody>
                  </table>

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
              <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 5 - Low Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Boiled egg, pandesal, hot cocoa</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Oatmeal cookies, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Grilled tilapia, rice, cucumber salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Mango slices</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Chicken tinola (soup with green papaya and spinach)</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>7–8 glasses water</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 6 - High Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Fried rice, scrambled eggs, apple, milk</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Trail mix, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Beef steak, rice, cucumber salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Peanut butter sandwich</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Baked chicken, mashed potatoes, steamed broccoli</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>10–12 glasses water + sports drink after training</td>
                      </tr>
                    </tbody>
                  </table>
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
              <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 7 - Low Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Boiled egg, pandesal, hot cocoa</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Oatmeal cookies, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Grilled tilapia, rice, cucumber salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Mango slices</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Chicken tinola (soup with green papaya and spinach)</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>7–8 glasses water</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 8 - Moderate Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Oatmeal, banana, boiled egg</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Peanut butter sandwich, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Chicken adobo, brown rice, side salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Apple, yogurt</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Grilled fish, sweet potato, steamed veggies</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>8–10 glasses water + electrolyte drink</td>
                      </tr>
                    </tbody>
                  </table>
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
              <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 9 - Low Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Boiled egg, pandesal, hot cocoa</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Oatmeal cookies, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Grilled tilapia, rice, cucumber salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Mango slices</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Chicken tinola (soup with green papaya and spinach)</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>7–8 glasses water</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 10 - Moderate Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Oatmeal, banana, boiled egg</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Peanut butter sandwich, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Chicken adobo, brown rice, side salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Apple, yogurt</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Grilled fish, sweet potato, steamed veggies</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>8–10 glasses water + electrolyte drink</td>
                      </tr>
                    </tbody>
                  </table>
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
              <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 11 - High Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Fried rice, scrambled eggs, apple, milk</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Trail mix, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Beef steak, rice, cucumber salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Peanut butter sandwich</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Baked chicken, mashed potatoes, steamed broccoli</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>10–12 glasses water + sports drink after training</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 12 - High Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Fried rice, scrambled eggs, apple, milk</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Trail mix, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Beef steak, rice, cucumber salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Peanut butter sandwich</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Baked chicken, mashed potatoes, steamed broccoli</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>10–12 glasses water + sports drink after training</td>
                      </tr>
                    </tbody>
                  </table>
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
              <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 13 - High Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Fried rice, scrambled eggs, apple, milk</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Trail mix, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Beef steak, rice, cucumber salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Peanut butter sandwich</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Baked chicken, mashed potatoes, steamed broccoli</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>10–12 glasses water + sports drink after training</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 14 - High Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Fried rice, scrambled eggs, apple, milk</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Trail mix, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Beef steak, rice, cucumber salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Peanut butter sandwich</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Baked chicken, mashed potatoes, steamed broccoli</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>10–12 glasses water + sports drink after training</td>
                      </tr>
                    </tbody>
                  </table>
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
              <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 15 - Low Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Boiled egg, pandesal, hot cocoa</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Oatmeal cookies, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Grilled tilapia, rice, cucumber salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Mango slices</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Chicken tinola (soup with green papaya and spinach)</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>7–8 glasses water</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 16 - High Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Fried rice, scrambled eggs, apple, milk</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Trail mix, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Beef steak, rice, cucumber salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Peanut butter sandwich</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Baked chicken, mashed potatoes, steamed broccoli</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>10–12 glasses water + sports drink after training</td>
                      </tr>
                    </tbody>
                  </table>
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
              <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 17 - Low Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Boiled egg, pandesal, hot cocoa</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Oatmeal cookies, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Grilled tilapia, rice, cucumber salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Mango slices</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Chicken tinola (soup with green papaya and spinach)</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>7–8 glasses water</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 18 - Moderate Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Oatmeal, banana, boiled egg</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Peanut butter sandwich, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Chicken adobo, brown rice, side salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Apple, yogurt</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Grilled fish, sweet potato, steamed veggies</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>8–10 glasses water + electrolyte drink</td>
                      </tr>
                    </tbody>
                  </table>
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
              <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 19 - High Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Fried rice, scrambled eggs, apple, milk</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Trail mix, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Beef steak, rice, cucumber salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Peanut butter sandwich</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Baked chicken, mashed potatoes, steamed broccoli</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>10–12 glasses water + sports drink after training</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 20 - High Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Fried rice, scrambled eggs, apple, milk</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Trail mix, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Beef steak, rice, cucumber salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Peanut butter sandwich</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Baked chicken, mashed potatoes, steamed broccoli</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>10–12 glasses water + sports drink after training</td>
                      </tr>
                    </tbody>
                  </table>
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
              <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 21 - High Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Fried rice, scrambled eggs, apple, milk</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Trail mix, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Beef steak, rice, cucumber salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Peanut butter sandwich</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Baked chicken, mashed potatoes, steamed broccoli</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>10–12 glasses water + sports drink after training</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 22 - Low Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Boiled egg, pandesal, hot cocoa</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Oatmeal cookies, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Grilled tilapia, rice, cucumber salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Mango slices</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Chicken tinola (soup with green papaya and spinach)</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>7–8 glasses water</td>
                      </tr>
                    </tbody>
                  </table>
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
              <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 23 - Moderate Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Oatmeal, banana, boiled egg</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Peanut butter sandwich, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Chicken adobo, brown rice, side salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Apple, yogurt</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Grilled fish, sweet potato, steamed veggies</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>8–10 glasses water + electrolyte drink</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 24 - Moderate Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Oatmeal, banana, boiled egg</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Peanut butter sandwich, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Chicken adobo, brown rice, side salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Apple, yogurt</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Grilled fish, sweet potato, steamed veggies</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>8–10 glasses water + electrolyte drink</td>
                      </tr>
                    </tbody>
                  </table>
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
              <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 25 - Low Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Boiled egg, pandesal, hot cocoa</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Oatmeal cookies, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Grilled tilapia, rice, cucumber salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Mango slices</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Chicken tinola (soup with green papaya and spinach)</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>7–8 glasses water</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 26 - Moderate Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Oatmeal, banana, boiled egg</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Peanut butter sandwich, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Chicken adobo, brown rice, side salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Apple, yogurt</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Grilled fish, sweet potato, steamed veggies</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>8–10 glasses water + electrolyte drink</td>
                      </tr>
                    </tbody>
                  </table>
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
              <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 27 - High Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Fried rice, scrambled eggs, apple, milk</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Trail mix, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Beef steak, rice, cucumber salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Peanut butter sandwich</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Baked chicken, mashed potatoes, steamed broccoli</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>10–12 glasses water + sports drink after training</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 28 - High Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Fried rice, scrambled eggs, apple, milk</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Trail mix, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Beef steak, rice, cucumber salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Peanut butter sandwich</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Baked chicken, mashed potatoes, steamed broccoli</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>10–12 glasses water + sports drink after training</td>
                      </tr>
                    </tbody>
                  </table>
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
              <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 29 - High Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Fried rice, scrambled eggs, apple, milk</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Trail mix, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Beef steak, rice, cucumber salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Peanut butter sandwich</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Baked chicken, mashed potatoes, steamed broccoli</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>10–12 glasses water + sports drink after training</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="meal-table-1">
                    <thead>
                      <tr>
                      </tr>
                        <th colSpan="4">Day 30 - High Intensity</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Breakfast</strong></td>
                        <td>Fried rice, scrambled eggs, apple, milk</td>
                      </tr>
                      <tr>
                        <td><strong>Morning Snack</strong></td>
                        <td>Trail mix, water</td>
                      </tr>
                      <tr>
                        <td><strong>Lunch</strong></td>
                        <td>Beef steak, rice, cucumber salad</td>
                      </tr>
                      <tr>
                        <td><strong>Afternoon Snack</strong></td>
                        <td>Peanut butter sandwich</td>
                      </tr>
                      <tr>
                        <td><strong>Dinner</strong></td>
                        <td>Baked chicken, mashed potatoes, steamed broccoli</td>
                      </tr>
                      <tr>
                        <td><strong>Hydration</strong></td>
                        <td>10–12 glasses water + sports drink after training</td>
                      </tr>
                    </tbody>
                  </table>
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
          <div className="page16-content">
            <h2>Pre-Game and Post-Game Nutrition</h2>
    
            <h5>Before Game:</h5>
            <ul>
              <li><strong>3 hours before:</strong> Rice with lean meat and fruits</li>
              <li><strong>30 minutes before:</strong> Banana and water</li>
            </ul>
    
            <h5>After Game:</h5>
            <ul>
              <li><strong>Within 30 minutes:</strong> Chocolate milk and a sandwich</li>
              <li><strong>1–2 hours later:</strong> A balanced meal with carbohydrates, protein, and vegetables</li>
            </ul>
          </div>
        </div>
      )
    }
,    
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
          <div className="page18-content">
            <h2>Practical Tips for Busy Student-Athletes</h2>
            <div className="timeline">
              <div className="timeline-item left">
                <div className="timeline-content">Pack healthy snacks: boiled eggs, trail mix, fruits.</div>
              </div>
              <div className="timeline-item right">
                <div className="timeline-content">Avoid energy drinks and sugary sodas.</div>
              </div>
              <div className="timeline-item left">
                <div className="timeline-content">Eat rainbow-colored fruits and vegetables daily.</div>
              </div>
              <div className="timeline-item right">
                <div className="timeline-content">Don’t skip meals—even on rest days.</div>
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
          <div className="page19-content">
            <div className="recommendation-badge">
              <span className="text">FINAL RECOMMENDATIONS</span>
              <span className="check-icon">&#10003;</span>
            </div>
            <div className="recommendation-card">
              <ul className="recommendation-list">
                <li>Make small, consistent changes.</li>
                <li>Stay hydrated throughout the day.</li>
                <li>Listen to your body.</li>
                <li>Prioritize sleep and recovery.</li>
                <li>Seek help from coaches, teachers, or health professionals when unsure.</li>
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
      <img 
        src="/images/gamefuelbk.jpg" 
        alt="Thank You" 
        width={300}
      />
      <h2 className="ty">Thank You for Reading!</h2>
      <a
        href="/EBOOK-GAMEFUEL.pdf"
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
