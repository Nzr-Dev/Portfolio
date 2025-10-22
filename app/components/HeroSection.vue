<template>
  <section id="home" class="hero">
    <div class="hero__container">
      <div class="hero__content">
        <div class="hero__text">
          <h1>Juan Pérez</h1>
          <h2>Frontend Web Developer</h2>
          <p>
            Creating futuristic web experiences with a neon touch. My goal is to
            combine design and functionality to build intuitive and attractive
            interfaces.
          </p>
          <div class="hero__buttons">
            <a href="#projects" class="btn btn--primary">View my projects</a>
            <a href="#contact" class="btn btn--secondary">Contact me</a>
          </div>
        </div>

        <div class="hero__image">
          <div class="image__border">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlJkYcygIP2DWrddLpQtACUY0xdJ3cUuKknwWrcxjskyMEDi2K-ItR8DV8Dj-TrRN3gkTezQOq6iGuKssnBMWKGTP0a0C5f4yPic6Yo7KROlAcnsq-In8eMcVxviqQKzWVNENRlKNQt3P9JCfeVqdN8s2Vew60Ox0wDuh_sTpxzB2EA6Qfg6QUttNJ-_3HOMDrhfAU2NnGbc12vMapizyZe-92AoaC21yH7GXrC-LtJ0U-qcbUQraonJbluFBYr_LCAeZWe66WINtq"
              alt="Juan Pérez profile photo"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 1.5rem 2rem;

  &__container {
    max-width: var(--max-width);
    margin: 0 auto;
    width: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    text-align: center;
  }

  &__text {
    max-width: 600px;

    h1 {
      font-size: 3rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 0.5rem;
    }

    h2 {
      font-size: 1.75rem;
      color: var(--accent-color);
      margin-bottom: 1rem;
    }

    p {
      color: var(--muted-color);
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
  }

  &__buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  &__image {
    .image__border {
      width: 16rem;
      height: 16rem;
      border-radius: 50%;
      overflow: hidden;
      background: var(--card-color);
      border: 4px solid var(--accent-color);
      box-shadow: var(--shadow-neon);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

@media (min-width: 768px) {
  .hero {
    &__content {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }

    &__text {
      h1 {
        font-size: 4.5rem;
      }

      h2 {
        font-size: 2rem;
      }
    }

    &__image {
      .image__border {
        width: 20rem;
        height: 20rem;
      }
    }
  }
}

@media (max-width: 480px) {
  .hero {
    &__buttons {
      flex-direction: column;
      align-items: center;
    }

    .btn {
      width: 100%;
      max-width: 280px;
    }
  }
}
</style>
