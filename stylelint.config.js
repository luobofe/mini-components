module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-config-prettier",
  ],
  plugins: ["stylelint-less"],
  customSyntax: "postcss-less",
  rules: {
    "at-rule-no-unknown": null,
    "color-no-invalid-hex": true,
    "less/color-no-invalid-hex": true,
    "selector-class-pattern": null,
  },
};
