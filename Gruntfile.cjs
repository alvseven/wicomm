module.exports = function (grunt) {
  grunt.initConfig({
    imagemin: {
      dynamic: {
        files: [
          {
            expand: true,
            cwd: "./src/assets",
            src: ["**/*.{svg}"],
            dest: "dist/images/",
          },
        ],
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-imagemin");
  grunt.loadNpmTasks("grunt-newer");

  grunt.registerTask("default", ["newer:imagemin"]);
};
