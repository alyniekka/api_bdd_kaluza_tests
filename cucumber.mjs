export default {
  default: {
    requireModule: ['ts-node/esm'], // Use the ESM loader for TypeScript
    require: ['./features/step_definitions/**/*.ts'], // Ensure paths are relative and correct
    format: ['json:reports/cucumber_report.json', 'summary'],
    paths: ['./features/**/*.feature'], // Ensure paths are relative and correct
    publishQuiet: true
  }
};
