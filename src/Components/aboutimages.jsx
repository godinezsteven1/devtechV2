

export default function AboutPage() {
  return (
    <main className="about-page">
      <section>
        <p>
          I have always been fascinated by the movies in where the protagonist is a 'Elite hacker'.  <br />
          The idea of manipulating systems intrigued me, and I wanted to be that person. <br />
          Today, I am. (Well, not exactly like the movies, but you get the point.)
        </p>
        <div className="flex flex-col items-center my-8">
         <img
          src="https://avatars.githubusercontent.com/u/169615840?v=4"
          alt="todler pics"
          className="about-img mx-auto border-4 border-pink-200 rounded-xl shadow-lg w-82 h-82 object-cover"/>
         <p className="caption mt-2 text-center text-sm text-gray-300">Figure 1: Baby Me</p>
        </div>
        <p>
          In 2023, I started studying Computer Science and Mathematics at Northeastern University. I didn't start  <br />
          taking my first Graduate course until Fall semester of Sophomore year when I decided to do my Master's in  <br />
          Artificial Intelligence. 
        </p>
        <div className="flex flex-col items-center my-8">
         <img
          src="https://avatars.githubusercontent.com/u/169615840?v=4"
          alt="headshot"
          className="about-img mx-auto border-4 border-pink-200 rounded-xl shadow-lg w-82 h-82 object-cover"/>
         <p className="caption mt-2 text-center text-sm text-gray-300">Figure 2: 2024 </p>
        </div>
      </section>
      <section>
        <p>
          Outside of code, I spend time tinkering with electronics, lifting weights, riding motorcycles, <br />
          and watching anime. Whether it's binge watching 3 seasons in 2 days(it has been done...) or hitting a new PR and seeing stars, I like pushing limits.  <br />
          For those who care: 
          <ul>
            <li>- DL: 405 lbs</li>
            <li>- Squat: 405 lbs</li>
            <li>- Bench: 260* lbs</li>
            <li>- Standing MP: 185 lbs</li>
            <li>Last Updated: 06/06/2025</li>
          </ul>
        </p>
        <div className="flex flex-col items-center my-8">
         <img
          src="https://avatars.githubusercontent.com/u/169615840?v=4"
          alt="PL"
          className="about-img mx-auto border-4 border-pink-200 rounded-xl shadow-lg w-82 h-82 object-cover"
         />
         <p className="caption mt-2 text-center text-sm text-gray-300">Figure 3: PL</p>
        </div>
      </section>

      <section>
        <p> 
          I have <strong>Three</strong> daugthers, 1 of which is a cat. Her name according to my mom; <strong> Maya</strong>, but if you ask me,
            <strong> Pepper</strong>. She is a black domestic long hair cat, she is a lap cat, and she loves to cuddle.
        </p>
        <p>
          The other two are my motorcycles, <strong>Marceline</strong> and <strong>Mavis</strong>. <br />
          Marceline is a <strong> 2013 Harley-Davidson Dyna Fat Bob</strong>, and Mavis is<strong> 2024 Harley-Davidson Sportster S</strong>, and <strong> no</strong> im not stereotypical Harley biker, I just love the bikes.
          They are my pride and joy. I take care of them like they are my children.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 my-8">
          <div className="flex flex-col items-center">
          <img
          src="/static/aboutImages/marceline.png"
          alt="Steven 2024"
          className="about-img mx-auto border-4 border-pink-200 rounded-xl shadow-lg w-150 h-120 object-cover"
        />
        <p className="caption mt-2 text-center text-sm text-gray-300">Marceline</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="https://avatars.githubusercontent.com/u/169615840?v=4"
          alt="Steven 2025"
          className="about-img mx-auto border-4 border-pink-200 rounded-xl shadow-lg w-150 h-120 object-cover"
        />
        <p className="caption mt-2 text-center text-sm text-gray-300">Mavis</p>
      </div>
      </div>
      </section>



    </main>
  );
}
