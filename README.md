# Project

![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=for-the-badge&logo=angular)
![Node.js](https://img.shields.io/badge/Node.js-20.10.0-339933?style=for-the-badge&logo=node.js)
![NPM](https://img.shields.io/badge/npm-10.2.3-CB3837?style=for-the-badge&logo=npm)

## :page_facing_up: About the Project

The  project is a dynamic Angular web application for Aparatos S.L., a company specializing in electronic devices. This application serves both customers looking to purchase products and internal staff managing logistics.

## :open_file_folder: Project Scaffolding

```
src/
├── app/
│   ├── core/                     # Core Module (Singleton services, universal components)
│   │   ├── components/
│   │   ├── domain/
│   │   ├── interceptors/
│   │   └── mocks/
│   ├── features/                 # Feature Modules
│   │   ├── delivery-management/  # Delivery Management Feature
│   │   └── home/                 # Home Feature
│   ├── orders/                   # Orders Feature
│   │   ├── components/
│   │   ├── data-access/          # Orders NgRx state management
│   │   │   ├── api/
│   │   │   ├── store/
│   │   │   │   ├── actions/
│   │   │   │   ├── effects/
│   │   │   │   ├── facade/
│   │   │   │   ├── reducers/
│   │   │   │   └── selectors/
│   │   │   └── orders-data-access.module.ts
│   │   └── domain/
│   │       └── dto/
└── ...
```

## :gear: Installation

Ensure you have the following installed:
- Node.js: v20.10.0 ![Node.js](https://img.shields.io/badge/Node.js-20.10.0-339933?style=flat-square&logo=node.js)
- npm: v10.2.3 ![NPM](https://img.shields.io/badge/npm-10.2.3-CB3837?style=flat-square&logo=npm)

To set up the project:

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/aparatos.git
   ```
2. Navigate to the project directory:
   ```sh
   cd aparatos
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## :rocket: Usage

To run the development server:
```sh
npm start
```
Visit `http://localhost:4200/` in your browser.

To run tests:
```sh
npm test
```

## :busts_in_silhouette: Contributing

We welcome your contributions! Please follow the steps below to contribute to this project:

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## :question: Support

For support, please open an issue or contact the project maintainers.
