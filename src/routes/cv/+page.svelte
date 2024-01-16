<script>
  /** @type {import('./$types').PageData} */
  import { browser } from '$app/environment';

  import Seo from '$lib/components/Seo.svelte';

  // export let data;

  if (browser) {
    window.addEventListener('scroll', function () {
      let totalHeight = document.body.scrollHeight - window.innerHeight;
      let windowOffsetHeight = window.pageYOffset;
      let progress = document.querySelector('.progress');
      let percentage = (windowOffsetHeight * 85) / totalHeight;
      progress.style.top = percentage + '%';
    });

    document.querySelectorAll('.cv__nav a[href^="#"]').forEach((trigger) => {
      trigger.onclick = function (e) {
        e.preventDefault();
        const hash = this.getAttribute('href');
        const target = document.querySelector(hash);
        let headerOffset = 0;
        if (hash == '#contact') {
          headerOffset = -600;
        }
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      };
    });
  }

  let generalist = false;
  let activePhoto = '';
</script>

<Seo title="Matt Thomas | Software Designer" />

<meta name="theme-color" content="#F3E9E6" media="(prefers-color-scheme: light)" />
<meta name="theme-color" content="#F3E9E6" media="(prefers-color-scheme: dark)" />

<div class="cv {generalist ? 'cv--generalist' : ''}">
  <div class="cv__bg"></div>

  <nav class="cv__nav">
    <div class="progress"></div>
    <a id="scroll1" href="#letter">About</a>
    <a id="scroll2" href="#resume">Experience</a>
    <a id="scroll3" href="#contact">Contact</a>
  </nav>

  <article id="letter" class="letter {activePhoto}">
    <div class="resume__container">
      <picture class="portrait">
        <source srcset="/images/matt.webp" type="image/webp" />
        <source srcset="/images/matt.jpg" type="image/jpeg" />
        <img src="/images/matt.jpg" alt="Matt Thomas" loading="lazy" />
      </picture>

      <h1>Matthew Thomas</h1>

      <h2>
        I'm a designer specialising in product design and front-end development. Helping to create digital products for
        over 10 years, I've been fortunate enough to collaborate with clients and technical teams on a wide range of
        projects. My expertise lies in shaping products from concepts, to highly functional and enjoyable customer
        experiences.
      </h2>

      <p>
        My time at Quisk and PixelForce has given me the opportunity to work on, and take lead on many unique creative
        challenges; from local government projects to complex apps with tens of thousands of daily active users.
      </p>

      <p>
        Always looking to understand the bigger picture, my role has evolved from that of a <a
          href="#"
          on:click={() => generalist == false}>specialist</a
        >, to a <a href="#" on:click={() => generalist == false}>generalist</a> in recent years.
      </p>

      <p>
        I use my knowledge to help clarify the complex, define problems and processes, manage teams and stakeholders,
        and ensure the delivery of a successful product. I'm good at identifying the problems, both technical and
        conceptual, that stand in the way of creative solutions.
      </p>

      <p>
        Great design implemented efficiently and effectively is something I've always had great appreciation for, and is
        something I strive for within my own work.
      </p>

      <!-- Turn photos into tryptych of Ocean, Mountain stars and Misty Fisherman -->
      <p>
        In my logged off hours I enjoy building wonky furniture, sitting down at the drum kit, or <a
          href="#"
          x-on:click.prevent="photo1 = ! photo1"
          x-on:click.outside.prevent="photo1 = false">simply</a>
        <a href="#" x-on:click.prevent="photo2 = ! photo2" x-on:click.outside.prevent="photo2 = false">taking</a>
        <a href="#" x-on:click.prevent="photo3 = ! photo3" x-on:click.outside.prevent="photo3 = false">photographs</a>.
      </p>

      <picture class="letter__photo" x-show="photo1" x-transition.opacity.duration.400ms>
        <source srcset="/images/photos/splash.webp" type="image/webp" />
        <source srcset="/images/photos/splash.jpg" type="image/jpeg" />
        <img src="/images/photos/splash.jpg" alt="Splash at Second Valley, SA" loading="lazy" />
      </picture>
      <picture class="letter__photo" x-show="photo2" x-transition.opacity.duration.400ms>
        <source srcset="/images/photos/mountain.webp" type="image/webp" />
        <source srcset="/images/photos/mountain.jpg" type="image/jpeg" />
        <img src="/images/photos/mountain.jpg" alt="Mt. Cook in New Zealand" loading="lazy" />
      </picture>
      <picture class="letter__photo" x-show="photo3" x-transition.opacity.duration.400ms>
        <source srcset="/images/photos/flower.webp" type="image/webp" />
        <source srcset="/images/photos/flower.jpg" type="image/jpeg" />
        <img src="/images/photos/flower.jpg" alt="Blooming flower in Auckland, NZ" loading="lazy" />
      </picture>
    </div>
  </article>

  <article id="resume" class="resume">
    <h1>Matthew Thomas</h1>

    <section>
      <!-- <h3>Experience</h3>
      <div>
        <div class="experience" x-data="{ open: false }" :class="open ? 'experience--active' : ''" @click.outside="open = false">
          <h4 @click="open = ! open">Senior UI/UX Designer<br><span>Pixelforce (2021 &ndash; Present)</span></h4>
          <div class="experience__details">
            <p>Lead design on all major web and mobile app projects. Duties include creating design libraries, user journeys, UX testing, managing remote teams, product strategy, visual QA, running workshops and defining new company processes.</p>
          </div>
        </div>
  
        <div class="experience" x-data="{ open: false }" :class="open ? 'experience--active' : ''" @click.outside="open = false">
          <h4 @click="open = ! open">Senior Designer &amp; Developer<br><span>Quisk Design (2012 &ndash; 2021)</span></h4>
          <div class="experience__details">
            <p>Design and front-end development for many medium-scale Australian businesses. Leading projects, launching campaigns and client training.</p>
          </div>
        </div>
  
        <div class="experience" x-data="{ open: false }" :class="open ? 'experience--active' : ''" @click.outside="open = false">
          <h4 @click="open = ! open">Freelance Designer<br><span>Self-Employed (2010 &ndash; 2012)</span></h4>
          <div class="experience__details">
            <p>Web design, publication design, branding and photography. Primarily working with local South Australian businesses.</p>
          </div>
        </div>
      </div> -->
    </section>

    <section>
      <h3>Education</h3>
      <div>
        <div class="education">
          <h4>Introduction to Human-Computer Interaction (CS147)<br /><span>Stanford Online Learning (2016)</span></h4>
        </div>
        <div class="education">
          <h4>Diploma of Graphic Design &amp; Advertising<br /><span>TAFE SA (2011)</span></h4>
        </div>
        <div></div>
      </div>
    </section>

    <section>
      <h3>Skills</h3>
      <div>
        <div class="education">
          <h4>
            I always enjoy sharing and thinking about the tools and craft that shape our industry. Please feel free to
            reach out if you would like to learn any more about my skills and the topics that interest me most.
          </h4>
        </div>
        <ul class="resume__skills">
          <li>Strong Knowledge of Design &amp; Typographic Principles</li>
          <li>UX &amp; UI Design</li>
          <li>Systems Thinking</li>
          <li>Prototyping</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Information Architecture</li>
          <li>Product Strategy</li>
          <li>User Research &amp; Testing</li>
          <li>CMS &amp; Ecommerce Frameworks</li>
          <li>Accessibility Design</li>
          <li>Client & Staff Training</li>
          <li>Javascript</li>
          <li>Agile Development Workflows</li>
          <li>Technical Document Writing</li>
          <li>Photography</li>
          <li>Version Control &amp; Deployment</li>
          <li>Jamstack Frameworks</li>
          <li>Traditional Server Architecture</li>
        </ul>
      </div>
    </section>

    <section>
      <h3>References</h3>
      <div>
        <div class="education education--last">
          <h4>Available upon request</h4>
        </div>
        <!-- <div class="education education--last">
          <h4>Sharna Jones<br><span>Art Director & Colleague</span></h4>
          <p><a href="tel:0403824594">0403 824 594</a> &nbsp;| &nbsp;<a href="mailto:sharnals@adam.com.au">sharnals@adam.com.au</a></p> -->
        <!-- </div> -->
      </div>
    </section>

    <section id="contact" class="resume__contact">
      <p>
        <a href="mailto:matt@mthomas.com.au"
          >matt@mthomas.com.au
          <svg
            width="42px"
            height="42px"
            viewBox="0 0 42 42"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Path</title>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Artboard" fill="currentColor" fill-rule="nonzero">
                <path
                  d="M20.997091,41.999935 C21.6001881,41.967935 22.074243,41.752735 22.3725405,41.468635 L41.3787712,23.468635 C42.210513,22.640435 42.1771021,21.401435 41.4568967,20.640535 C40.7367214,19.879735 39.388951,19.842435 38.6278523,20.562535 L22.9977448,35.343835 L22.9977448,2.000065 C22.9977448,0.895565 22.1020521,6.5e-05 20.997091,6.5e-05 C19.89213,6.5e-05 18.9964373,0.895565 18.9964373,2.000065 L18.9964373,35.343835 L3.36632978,20.562535 C2.60528109,19.842635 1.28324909,19.905035 0.537305331,20.640535 C-0.234246791,21.401435 -0.14561783,22.748735 0.615330828,23.468635 L19.6215415,41.468635 C20.1073003,41.943435 20.5201352,41.968935 20.996991,41.999935 L20.997091,41.999935 Z"
                  id="Path"
                  transform="translate(20.999935, 21.000000) rotate(-90.000000) translate(-20.999935, -21.000000) "
                ></path>
              </g>
            </g>
          </svg>
        </a>
      </p>
      <p>
        <a href="tel:0481394993"
          >0481 394 993
          <svg
            width="42px"
            height="42px"
            viewBox="0 0 42 42"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Path</title>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Artboard" fill="currentColor" fill-rule="nonzero">
                <path
                  d="M20.997091,41.999935 C21.6001881,41.967935 22.074243,41.752735 22.3725405,41.468635 L41.3787712,23.468635 C42.210513,22.640435 42.1771021,21.401435 41.4568967,20.640535 C40.7367214,19.879735 39.388951,19.842435 38.6278523,20.562535 L22.9977448,35.343835 L22.9977448,2.000065 C22.9977448,0.895565 22.1020521,6.5e-05 20.997091,6.5e-05 C19.89213,6.5e-05 18.9964373,0.895565 18.9964373,2.000065 L18.9964373,35.343835 L3.36632978,20.562535 C2.60528109,19.842635 1.28324909,19.905035 0.537305331,20.640535 C-0.234246791,21.401435 -0.14561783,22.748735 0.615330828,23.468635 L19.6215415,41.468635 C20.1073003,41.943435 20.5201352,41.968935 20.996991,41.999935 L20.997091,41.999935 Z"
                  id="Path"
                  transform="translate(20.999935, 21.000000) rotate(-90.000000) translate(-20.999935, -21.000000) "
                ></path>
              </g>
            </g>
          </svg>
        </a>
      </p>
    </section>
  </article>
</div>
