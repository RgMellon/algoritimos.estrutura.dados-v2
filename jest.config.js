module.exports = {
  testEnvironment: "node", // Ambiente de teste (Node.js ou DOM)
  verbose: true, // Mostra mais detalhes nos testes
  collectCoverage: true, // Ativa cobertura de código
  coverageDirectory: "coverage", // Pasta onde será salva a cobertura
  testMatch: [
    "**/src/**/*.spec.js", // Padrão para encontrar os arquivos de teste na pasta src
  ],
};
