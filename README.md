# Förnya bostadsköer automatiskt

Håll dina bostadsköer förnyade automatiskt!

Fungerar hittils endast för:
- [SGS Studentbostäder](https://sgsstudentbostader.se)
- [Chalmers Studentbostäder](https://chalmersstudentbostader.se)
- [ByggVesta](https://www.byggvesta.se)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and running purposes.

### Prerequisites

- Node v7.6.0 or greater

### Installing

Download the project from Github
```
git clone https://github.com/JohanWinther/renew-housing-queue
```

Go into the folder
```
cd renew-housing-queue
```

Install all prerequisites
```
npm install
```

Create a copy of `credentials-example.json` called `credentials.json` and add any site credentials with the same keys as in `config.json`.

## Deployment

You probably want this to run automatically every X months, so make your system's task scheduler run the command
```
node path-to-index.js
```

For Windows it is probably best to setup a basic task in the Task Scheduler.

## Contributing

Feel free to submit pull requests to help the project or provide config settings for new websites.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details