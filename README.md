# portfolio

This is my portfolio, build with [Next.js](https://nextjs.org/).

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)

<!--- TODO: insert preview image -->

## Features

- Multi-Page Layout with the Next's `app` Router;
- Styled with [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework;
- Fully Responsive;
- Design System documented and with tests;
- Uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Getting Started

These instructions will get you a clone of the project up and running on your
local machine for development and testing purposes. See deployment for notes on
how to deploy the project on a live system.

You will need node.js, NPM and git installed on your machine. You can verify by run:

```bash
node --version
# Expect something like:
# v21.6.2
```

```bash
npm --version
# Expect something like:
# 10.4.0
```

```bash
git --version
# Expect something like:
# git version 2.43.2
```

### Cloning

To clone and run the project, copy and paste the commands below at your terminal.

```bash
# Clone the repository
git clone https://github.com/MateusRyu/portfolio.git

# Move into the repository folder
cd portfolio
```

You can also Fork this repository and do the same, changing `MateusRyu` by your
username after the fork.

### Install the dependencies

After has clone the project, you can install the dependencies using npm:

```bash
npm install
```

If needed, you may want to want fix dependencies with `npm audit fix` or update then with `npm update`.

### Start server

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### (Optionally) Remove current origin repository

Maybe you will want to remove the current origin repository for create your own
repository. You can achieve this running the command below:

```bash
# Remove the current origin repository
git remote remove origin

# Add your own origin repository.
# Change 'YOUR_USERNAME' and 'REPOSITORY_NAME'
# with your details
git remote add origin git@github.com:YOUR_USERNAME/REPOSITORY_NAME.git

# Push your clone
git push -u origin main
```

### Docs

Docs is build with [Storybook](https://storybook.js.org/) and you can run locally with the command below:

```bash
npm run storybook
```

## Deployment

Once you finish your own setup. You need to put your website online! Unless you want to hide for the world! :joy:

The easiest way to deploy your portfolio is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

Code and Docs released under the MIT License - see the [LICENSE.md](https://github.com/MateusRyu/portfolio/blob/main/LICENSE) file for details.

